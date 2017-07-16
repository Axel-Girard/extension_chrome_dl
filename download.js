chrome.browserAction.onClicked.addListener(function(){
  chrome.tabs.getSelected(null, function(tab) {
    var b = document.querySelectorAll("ul.gallery-b li a");
    alert(b.length);

    function dl(lien) {
      var link = document.createElement('a');
      link.href = lien;
      link.download = '';
      document.body.appendChild(link);
      link.click();
    }

    for(var i = 0; i < b.length; i++){
    	dl(b[i].href);
    }
  });
});
