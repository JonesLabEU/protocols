# Gel quantification
<iframe id="dynamic-frame" src="../../../tools/gel_quantification.html" style="width: 100%; height: 600px; border: none; scrolling: no; overflow: hidden;"> </iframe> <script>
	const iframe = document.getElementById('dynamic-frame'); // Listen for the secure message coming from the child HTML tool
	window.addEventListener('message', function(event) { // Make sure the message is the resize signal we are expecting
	if (event.data && event.data.type === 'resize-iframe') {
	// Dynamically adjust the iframe height to match the tool's new height
		iframe.style.height = event.data.height + 'px';
		}
	});
</script>