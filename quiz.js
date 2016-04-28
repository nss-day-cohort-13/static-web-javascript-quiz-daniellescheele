


var height = document.getElementById("height");
var character = document.getElementById("character");
var formButton = document.getElementById("formButton");


formButton.addEventListener("click", checkValues);
window.addEventListener("keyup",function(event) {
	if (event.code === "Enter") {
		checkValues();
	} else {
	  return;
	}
	
})

function checkValues() {
  if (height.value === "" || character.value === "") {
 	 alert("Value Required");
  } else {
  	var pineTree = {
			height: 0,
			character: "0"
		};
	 pineTree.height = height.value;
	 pineTree.character = character.value;  
  	 createTree(pineTree);
  }

}

function createTree(pineTree) {
	
	var spacesAmount = pineTree.height;
  for (var i = 0; i < pineTree.height; i++) {
    spacesAmount--;
    var holder = "";
    var charAmount = pineTree.height - spacesAmount + i;
    
		for (var s = 0; s < spacesAmount; s++) {
			holder += " ";
		}
		for (var c = 0; c < charAmount; c++) {
			holder += pineTree.character;
		}
	console.log(holder);

	}
};
    		
// create " " spacesAmount of times
			// make pinetree.character charAmount of times 
		



	  






     






   
 

