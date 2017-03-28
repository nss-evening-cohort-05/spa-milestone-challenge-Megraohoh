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
	  populatePage();
}	 



function clickOnCard() {
  if (event.target.classList.contains("cardDiv")) {
    $("#card-container div").removeClass("clicked");
    event.target.classList.add("clicked");
  }
} 




