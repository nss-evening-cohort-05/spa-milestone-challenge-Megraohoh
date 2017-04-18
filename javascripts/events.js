var CarLot = (function (oldCarLot){

	var inputField = document.getElementById("userInput");
	var selectedCard;

	oldCarLot.activateEvents = function(){
		containerDiv.addEventListener("click", function(e){
	//if else statement isn't working. figure out what you're trying to do (add and use styles)		
	//wysiwyg is your inspiration
			if (e.target.classList.contains("thumbnail")) {
		    $("#thumbnail").removeClass("clicked");
		    e.target.classList.add("clicked");
			} else { //else works because if isn't working
				console.log("you fucked up");
			}
			inputField.focus();
		});

		inputField.addEventListener("keyup", function(e){
	      if (e.keyCode === 13) { //this event isn't totally right
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