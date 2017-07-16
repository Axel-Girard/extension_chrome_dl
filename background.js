chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
     if(response !== undefined){
       alert(response);
       console.log(response.farewell);
     }
  });
});
