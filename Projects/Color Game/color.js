// Build array to contain background colors for each square
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

//Select color to display on the title
var pickedColor = pickColor();
//The picked color is displayed on the title
var displayColor =  document.getElementById("displayedColor");
displayColor.textContent = pickedColor;

// Select other elements
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

//Add listeners for clicking event on squares
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", 
    function(){
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
        } else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"; 
        }
    })
}

//Function to change tile colors

function changeColors(color) {
    //loop through all tiles
    for(var i = 0; i < squares.length; i++){
        //change color of all tiles
        squares[i].style.background = color;
    }
}

//Function to pick a random color
function pickColor() {
    //pick a random array index
    let random = Math.floor(Math.random() * colors.length)
    //select color from that index
    return colors[random];
}