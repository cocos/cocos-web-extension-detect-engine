chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'js/contentscript.js',
    allFrames: true,
  });
});
