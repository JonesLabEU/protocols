import os
import posixpath
import re
from urllib.parse import urlsplit
from mkdocs.structure.files import File

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
    path = path.strip("<>")
    if not attrs:
        return f"![{caption}]({path})"
    img = f'<img src="{_fix_path(path, page)}" alt="{caption}"{attrs}>'
    return (
        f'<figure markdown="span">{img}<figcaption>{caption}</figcaption></figure>'
        if caption
        else img
    )


def on_page_markdown(markdown, page, **kwargs):
    markdown = MD.sub(lambda m: _render(m["path"], m["alt"], page), markdown)
    return WIKI.sub(lambda m: _render(m["path"], m["alt"] or "", page), markdown)


def on_files(files, config):
    """Rewrite output paths of protocol pages to their number (e.g., 21.02/), giving short URLs."""
    base = urlsplit(config.get("site_url") or "/").path.rstrip("/")

    section_first = {}
    for f in files.documentation_pages():
        m = re.match(r"(\d{2}\.\d{2})\b", f.name)
        if m:
            num = m.group(1)
            f.dest_uri = f"{num}/index.html"
            f.url = f"{num}/"
            f.abs_dest_path = os.path.normpath(
                os.path.join(config["site_dir"], f.dest_uri)
            )
            section = num[0]
            if section not in section_first or num < section_first[section]:
                section_first[section] = num

    for section, target in section_first.items():
        url = f"{base}/{target}/"
        html = (
            f'<!doctype html><html><head><meta charset="utf-8">'
            f'<meta http-equiv="refresh" content="0; url={url}">'
            f'<link rel="canonical" href="{url}">'
            f"</head><body></body></html>"
        )
        files.append(File.generated(config, f"{section}/index.html", content=html))
    return files
