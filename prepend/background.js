// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("installed")

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
	term = "rust%20"
    //console.log("Request intercepted: " + info.url);
	// inject prepend statement into url, then redirect to it
	if (0 < info.url.indexOf("www.google.com/")
		&& 0 < info.url.indexOf("search") )
	{

		// hacky way to get the term into the search query
		var splitup = info.url.split("search?q=")
		var start = splitup[0]
		var end = splitup[1]
		info.url = start + "search?q=" + term + end
		console.log("Modified URL: " + info.url)
	}
    return {redirectUrl: info.url };
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
