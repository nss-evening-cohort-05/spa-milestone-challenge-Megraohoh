var CarLot = (function (oldCarLot){

	var inputField = document.getElementById("userInput");
	var selectedCard;

	oldCarLot.activateEvents = function(){
		containerDiv.addEventListener("click", function(e){

			if (e.target.classList.contains("thumbnail")) {
		    $("#thumbnail").removeClass("clicked");
		    e.target.classList.add("clicked");
			} else {
				console.log("you fucked up");
			}
			inputField.focus();
		});

		inputField.addEventListener("keyup", function(e){
	      if (e.keyCode === 13) {
	        inputField.value = "";    
	      } else if(selectedCard === undefined) {

	      } else {
	        var editDescription = selectedCard
	        editDescription.innerHTML = inputField.value;
	      }
		})
	}
return oldCarLot;
})(CarLot || {});