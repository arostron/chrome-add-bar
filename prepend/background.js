
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	term = "rust%20"
    //console.log("Request intercepted: " + info.url);
	// inject prepend statement into url, then redirect to it
	if (0 < info.url.indexOf("www.google.com/search") ||
		0 < info.url.indexOf("www.google.com/complete/search")
	) {

		// dont recurse
		if (-1 == info.url.indexOf(term)) {

		// hacky way to get the term into the search query
		var splitup = info.url.split("search?q=")
		var start = splitup[0]
		var end = splitup[1]
		info.url = start + "search?q=" + term + end
		console.log("Modified URL: " + info.url)
		chrome.tabs.update({ url: info.url });


		}
	}
    //return {redirectUrl: info.url };
  },
  // filters ... #nofilter
  {
    urls: [
      //"*://www.google.com/search/"
    ],
    //types: ["other"]
    types: []
  },
  // extraInfoSpec
  []);
