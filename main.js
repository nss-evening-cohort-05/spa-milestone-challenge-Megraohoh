var containerDiv = document.getElementById("container");
var carString = "";
var cars = [];

function populatePage (xhrData) {
	var counter = 0;
	for (var i=0; i<xhrData.cars.length; i++) {
	  	counter = counter+1;
	  	carString += `<div class="row">`;
	  	carString += `<div class="col-sm-6 col-md-4">`;
	    carString += `<div class="thumbnail" id="card` + counter + `">`;
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
  inputField.focus();
} 

///click events and domhandling--you're going to forget to use js. focus. 
var inputField = document.getElementById("userInput");
var selectedCard;


inputField.addEventListener("keyup", function(){

      if (event.keyCode === 13) {
        inputField.value = "";    
      } else if( selectedCard === undefined) {
        alert("Hey Baby! Pick a Lady!! *wink*")

      } else {
        var editDescription = selectedCard
        editDescription.innerHTML = inputField.value;

      }
});

inputField.addEventListener("keyup", function(){

      if (event.keyCode === 13) {
        inputField.value = "";    
      } else if(selectedCard === undefined) {
        alert("Which cars' description would you like to edit?")

      } else {
        var editDescription = selectedCard
        editDescription.innerHTML = inputField.value;

      }
});

function executeThisCodeAfterFileLoaded(){
	var data = JSON.parse(this.responseText);
	console.log("IT WORKED!!!", data);
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