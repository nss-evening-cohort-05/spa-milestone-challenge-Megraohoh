var containerDiv = document.getElementById("container");
var carString = "";

CarLot.loadInventory();
CarLot.activateEvents()

function populatePage (xhrData) {
  var counter = 0;
  for (var i=0; i<xhrData.cars.length; i++) {
      counter = counter+1;
      carString += `<div class="row">`;
      carString += `<div class="col-sm-6 col-md-4">`;
      carString += `<div class="thumbnail" id="card` + counter + `">`;
      carString += `<div class="caption">`;
      carString += `<h3>Car for Sale</h3>`;
      carString += `<p class="carMake"> ${xhrData.cars[i].make}</p>`;
      carString += `<p class="carModel"> ${xhrData.cars[i].model}</p>`;
      carString += `<p class="carYear"> ${xhrData.cars[i].year}</p>`;
      carString += `<p class="carPrice"> ${xhrData.cars[i].price}</p>`;
      carString += `<p class="carDescription"> ${xhrData.cars[i].description}</p>`;
      carString += `</div></div></div></div>`;

    }
      containerDiv.innerHTML += carString;
}; 

