var express = require("express");
var app = express();


// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/pig" should print "The cow says 'Moo'"
// ...

app.get("/speak/:animal",function(req, res){
    var animal = req.params.animal;
    var sounds = {
        pig: "oink",
        cow: "moo",
        fox: "???",
        bird: "tweet",
        goldfish: "...",
        cat: "resistance is futile"
    };

    res.send("The " + animal + " says " + sounds[animal]);
})


// Visiting "/repeat/{text}/{n}" should print "text" n times
app.get("/repeat/:text/:n", function (req, res) {
    var text = req.params.text;
    
    var n = req.params.n;
    var string = "";

    for(i=0; i < n; i++){
        string += text + " ";
    }
    res.send(string);
})

// Start the server
app.listen(3000,function(){
    console.log("Starting Server on Port 3000");
})
