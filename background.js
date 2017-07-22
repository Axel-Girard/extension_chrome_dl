chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "download.js" });
});
// executeScript    (null, { file: "file.js" });
// insertCSS        (null, { file: "file.css" });
