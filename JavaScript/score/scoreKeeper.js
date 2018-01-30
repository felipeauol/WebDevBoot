//Select the score elements on h1
var p1_display = document.getElementById("score_p1");
var p2_display = document.getElementById("score_p2");

//Create score keeping and game-win variables
var p1Score = 0;
var p2Score = 0;
var isWon = false;
var winningScore = 5;

//Select other elements
var btn_p1 = document.getElementById("p1");
var btn_p2 = document.getElementById("p2");
var btn_reset = document.getElementById("reset");
var play_to = document.getElementById("play-to");
var score_max = document.querySelector("input");

//When I click the button for Player 1
btn_p1.addEventListener("click",
function(){
//If the game is not already won, Then 1 point is added to P1's score
    if(!isWon){
        p1Score++;
        p1_display.textContent = p1Score;
    //If P1 gets a winning score,
        if (p1Score === winningScore) {
            //Then the game is won
            isWon = true;
            p1_display.classList.add("winner");
        }
    }
})

//Same for Player 2
btn_p2.addEventListener("click",function(){
    if(!isWon){
        p2Score++;
        p2_display.textContent = p2Score;
    //If P2 gets a winning score,
        if (p2Score === winningScore) {
            //Then the game is won and P2 is the winner
            isWon = true;
            p2_display.classList.add("winner");   
        }
    }
})

//When I click the Reset button
btn_reset.addEventListener("click",
//Then the players' scores are set to 0 and the game starts over
function() {
    p1_display.textContent = 0;
    p2_display.textContent = 0;
    p1Score = p2Score = 0;
    isWon = false;
})

//If I enter a number in the input field
score_max.addEventListener("change", 
//Then the winning score of the game and the value displayed also change
function(){
    winningScore =  parseInt(score_max.value);
    play_to.textContent = score_max.value;
    reset();
})

//Function to reset the game
function reset() {
    isWon = false;
    p1Score = p2Score = 0;
    p1_display.textContent = 0;
    p2_display.textContent = 0;
    p1_display.classList.remove("winner");
    p1_display.classList.remove("winner");   
}