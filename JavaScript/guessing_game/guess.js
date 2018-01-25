var secret = Math.ceil(Math.random()*20);
console.log(secret);

var guess = Number(prompt("Schätz ein Nummer!"));

if (guess === secret){
    alert("Richtig!")
}

else if(guess > secret){
    alert("Ein bisschen niedriger. Versuch es noch einmal");
}

else if(guess < secret){
    alert("Ein bisschen höher. Versuch es noch einmal");
}