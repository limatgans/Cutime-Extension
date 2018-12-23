"use strict";
function OpenCuTimeHTML() {
	// Open a new tab. 
	browser.tabs.create({
		// loads "cutime.html" into it.
		"url": "./src/cutime.html"
	});
}

// Adding OpenCuTimeHTML() as a listener.
browser.browserAction.onClicked.addListener(OpenCuTimeHTML);