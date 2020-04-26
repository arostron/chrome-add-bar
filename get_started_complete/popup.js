// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// element from popup.html
let changeColor = document.getElementById('changeColor');

// get color from storage, set element background to that color
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// when changeColor button pushed, update page background
changeColor.onclick = function(element) {
  // color from clicked element
  let color = element.target.value;
  // run script on current tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
