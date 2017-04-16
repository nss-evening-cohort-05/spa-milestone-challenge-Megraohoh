var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	//parse statement goes here. reference inventory and the request
        var data = JSON.parse(this.responseText);
      });
      //don't forget getters and setters
    }
  };

})();