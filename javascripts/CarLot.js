var CarLot = (function () {
  var inventory = [];

  function executeThisCodeAfterFileLoaded(){
  var data = JSON.parse(this.responseText);
  populatePage(data);
  }

  function executeThisCodeAfterFileFails(){
    alert("Please refresh the page. Something's wrong.")
  }

  return {
    loadInventory: function (callback) {
        var myRequest = new XMLHttpRequest(); //~new~ is a constructor
        myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
        myRequest.addEventListener("error", executeThisCodeAfterFileFails);
        myRequest.open("GET", "inventory.json");
        myRequest.send();
      }
    }
})();