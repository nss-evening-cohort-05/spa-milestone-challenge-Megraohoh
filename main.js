var containerDiv = document.getElementById("container");
var cars = [];

function populatePage (xhrData) {
	var carString = "";
	var currentCard;
  // Loop over the inventory and populate the page
	  for (var i=0; i<xhrData.cars.length; i++) {
	  	currentCard = xhrData.cars[i];

	  	carString += `<div class="row">`;
	  	carString += `<div class="col-sm-6 col-md-4">`;
	    carString += `<div class="thumbnail">`;
	    carString += `<div class="caption">`;
	    carString += `<h3>Car for Sale</h3>`;
	    carString += `<p class="carMake"> ${cars[i].make}</p>`;
	    carString += `<p class="carModel"> ${cars[i].model}</p>`;
	    carString += `<p class="carYear"> ${cars[i].year}</p>`;
	    carString += `<p class="carPrice"> ${cars[i].price}</p>`;
	    carString += `<p class="carDescription"> ${cars[i].description}</p>`;
	    carString += `</div></div></div></div>`;

	  }
	    containerDiv.innerHTML += carString;
}	 


function clickOnCard() {
  if (event.target.classList.contains("cardDiv")) {
    $("#card-container div").removeClass("clicked");
    event.target.classList.add("clicked");
  }
} 
///click events and domhandling--you're going to forget to use js. focus. 

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	// console.log("IT WORKED!!!", data);
	populatePage(data);

}

function executeThisCodeAfterFileFails(){
	alert("Please refresh the page. Something's wrong.")
}

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET", "inventory.json");
myRequest.send();