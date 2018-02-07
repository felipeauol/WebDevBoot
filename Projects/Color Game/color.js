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
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//Variable to track number of squares being displayed
var numSquares = 6;

//Set tile backgrounds to be colors in the array
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

//Add listeners for clicking event on squares
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", 
    function(){
        //Right
        if (this.style.backgroundColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            h1.style.background = pickedColor;
            changeColors(pickedColor);
        //Wrong
        } else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"; 
        }
    })
}

//When I click the reset button
    resetButton.addEventListener("click",
    function(){
    //Then new colors are generated        
    colors = generateColorArray(numSquares);
    //Then a new color is picked
    pickedColor = pickColor();
    //Then the picked color dispaly is changed
    displayColor.textContent = pickedColor;    
    //Then the tile colors are reset
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    //Then the h1 background is reset
    h1.style.background = "#232323";
    }
)

//When I click the Easy mode button
easyBtn.addEventListener("click",
function () {
    //Then the Easy button is selected
    easyBtn.classList.add("selected");
    //And the Hard button is unselected
    hardBtn.classList.remove("selected");
    //Then the game is reset with only 3 tiles
    numSquares = 3;
    colors = generateColorArray(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    for (let i = 0;i < squares.length;i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];        
        } else {
            squares[i].style.display = "none";    
        }
    }
})

//When I click the Hard mode button
hardBtn.addEventListener("click",
function () {
    //Then the Easy button is unselected
    easyBtn.classList.remove("selected");
    //And the Hard button is selected
    hardBtn.classList.add("selected");
    //Then the game is reset with 6 tiles
    numSquares = 6;
    colors = generateColorArray(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    for (let i = 0;i < squares.length;i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})


//Change tile colors
function changeColors(color) {
    //loop through all tiles
    for(var i = 0; i < squares.length; i++){
        //change color of all tiles
        squares[i].style.background = color;
    }
}

//Pick a random color from array
function pickColor() {
    //pick a random array index
    let random = Math.floor(Math.random() * colors.length)
    //select color from that index
    return colors[random];
}

//Generate an array of colors
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

//Randomize rgb colors into an array
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