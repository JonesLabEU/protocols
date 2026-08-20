import posixpath
import re

MD = re.compile(
    r'!\[(?P<alt>[^\]]*)\]\(\s*(?P<path><[^>]+>|[^)\s]+)(?:\s+"[^"]*")?\s*\)'
)
WIKI = re.compile(r"!\[\[(?P<path>[^\]|]+?)(?P<alt>\|[^\]]*)?\]\]")
SIZE = re.compile(r"^(?P<w>\d+)(?:x(?P<h>\d+))?$")


def _parse(alt):
    caption, attrs = [], ""
    for part in (p.strip() for p in alt.lstrip("|").split("|")):
        m = SIZE.match(part)
        if m:
            attrs = f' width="{m["w"]}"' + (f' height="{m["h"]}"' if m["h"] else "")
        elif part:
            caption.append(part)
    return " ".join(caption), attrs


def _fix_path(path, page):
    if path.startswith(("http://", "https://", "data:", "/")):
        return path
    dest = posixpath.normpath(
        posixpath.join(posixpath.dirname(page.file.src_uri), path)
    )
    return posixpath.relpath(dest, posixpath.dirname(page.file.url) or ".")


def _render(path, alt, page):
    caption, attrs = _parse(alt)
    path = _fix_path(path.strip("<>"), page)
    if not attrs:
        return f"![{caption}]({path})"
    img = f'<img src="{path}" alt="{caption}"{attrs}>'
    return (
        f'<figure markdown="span">{img}<figcaption>{caption}</figcaption></figure>'
        if caption
        else img
    )


def on_page_markdown(markdown, page, **kwargs):
    markdown = MD.sub(lambda m: _render(m["path"], m["alt"], page), markdown)
    return WIKI.sub(lambda m: _render(m["path"], m["alt"] or "", page), markdown)
