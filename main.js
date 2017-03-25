var containerDiv = document.getElementById("container");
var carHolderDiv = document.getElementById("carHolder");
var cars = [];

function populatePage (inventory) {
  // Loop over the inventory and populate the page
	  containerDiv.innerHTML = "";
	  for (var i=0; i<cars.length; i++) {
	  	var carCards = "";

	  	carCards += `<div class="row">`;
	  	carCards += `<div class="col-sm-6 col-md-4">`;
	    carCards += `<div class="thumbnail">`;
	    carCards += `<div class="caption">`;
	    carCards += `<h3>Car for Sale</h3>`;
	    carCards += `<p class="carMake"> ${cars[i].make}</p>`;
	    carCards += `<p class="carModel"> ${cars[i].model}</p>`;
	    carCards += `<p class="carYear"> ${cars[i].year}</p>`;
	    carCards += `<p class="carPrice"> ${cars[i].price}</p>`;
	    carCards += `<p class="carDescription"> ${cars[i].description}</p>`;
	    carCards += `</div></div></div></div>`;

	    containerDiv.innerHTML += newCard;
	  }
}	 



function clickOnCard() {
  if (event.target.classList.contains("cardDiv")) {
    $("#card-container div").removeClass("clicked");
    event.target.classList.add("clicked");
  }
} 
  
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();


// Load the inventory and send a callback function to be
// invoked after the process is complete
// CarLot.loadInventory();


// var getPlanets = document.getElementById('showPlanets');
// var planetHolderDiv = document.getElementById('planetHolder');

// function writeToDom() {
// 	planetHolderDiv.innerHTML = ""; //wipes clean the DOM each time btn is hit
// 	for (var i = 0; i < planets.length; i++) {
// 		var newPlanet=""; //empty string

// 		newPlanet += `<div class="planetBox" id="planetBox-${i}">` //use i since it's a counter and the id will increase numerical value (view in inspect elements)
// 			//$ tells the browser that the code is js inside the html

// 		newPlanet += `<div class="planetName hidden"> ${planets[i].name} </div>`; //string templating	
// 		newPlanet += `<img class="planetImage" src="${planets[i].url}">`
// 		newPlanet += `</div>`
// 	planetHolderDiv.innerHTML += newPlanet;
// 	}
// }	

// function showMeTheMoney(event){
// 	if(event.target.className === 'planetImage'){
// 	console.log("event worked", event);
// 	// console.log("event worked", event.target.parentNode.id); //unique identifier affected by js (line 49)
// 	console.log("text?", event.target.previousSibling);
// 	event.target.previousSibling.classList.remove('hidden');
// 	}	
// }

// getPlanets.addEventListener("mouseenter", writeToDom);

// // console.log("planetBoxes", planetBoxes)

// document.body.addEventListener("click", showMeTheMoney);



