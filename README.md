# chrome-add-bar
I find myself always adding a key word to my searches. For example:

rust bson docs
rust mongodb docs
rust serde

I want a chrome extension where I can set "rust" as my search term add on, so that i can just search

bson docs
mongodb docs
serde


## progress so far

I thought the simplest way to do this would be to inject a term into a google search query, then just simply redirect to the new request.
I found out that Google searches contain numerous requests so it isnt that simple...

I might try something with the omnibox in the future?

## installing a chrome extension
- in google chrome go to:
	- chrome://extensions/
- check developer mode
- load unpacked

## sources
https://developer.chrome.com/extensions
https://developer.chrome.com/extensions/webRequest
https://developer.chrome.com/extensions/samples
