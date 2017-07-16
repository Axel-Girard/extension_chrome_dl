chrome.runtime.onMessage.addListener(function(message, sender, callback) {
  alert("message");
  var b = document.querySelectorAll("ul.gallery-b li a");

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
