// Build array to contain background colors for each square
var colors = generateColorArray(6);

//Select color to display on the title
var pickedColor = pickColor();
//The picked color is displayed on the title
var displayColor =  document.getElementById("displayedColor");
displayColor.textContent = pickedColor;

// Select other elements
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("#header");

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

//Add listeners for clicking event on squares
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", 
    function(){
        //Win case
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            header.style.background = pickedColor;
            changeColors(pickedColor);
        //Lose case
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

//Function to pick a random color from array
function pickColor() {
    //pick a random array index
    let random = Math.floor(Math.random() * colors.length)
    //select color from that index
    return colors[random];
}

//Function to generate an array of colors
function generateColorArray(n) {
//create an array
    var arr = [];
//generate n rgb colors
    for (let i = 0; i < n; i++) {
        //add random color to array
        arr.push(randomColor());
    }
//return array
    return arr;   
}

//Function to generate a random rgb color
function randomColor() {
    //generate a value for r
    let r = Math.floor(Math.random() * 256);
    //generate a value for g
    let g = Math.floor(Math.random() * 256);
    //generate a value for b
    let b = Math.floor(Math.random() * 256);
    //form string
    color = "rgb(" + r + ", " + g + ", " + b + ")";
    //return color as string
    return color;
}