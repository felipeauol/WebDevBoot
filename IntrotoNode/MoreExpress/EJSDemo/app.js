var express = require("express");
app = express();

// Tell Express to serve the files on the 'public' folder
app.use(express.static("public"))
// Tell Express to expect the templates served to be .ejs 
app.set("view engine","ejs");


// Route for "/"
app.get("/",function(req, res) {
    res.send("Welcome to our home page");
})

// Dynamic page for a city you want to visit
app.get("/visit/:city",function(req, res){
    city = req.params.city;
    myCity = city.toUpperCase();

    res.render('tours', {city: myCity});
})

// List the city you want to visit n times
app.get("/visit/:city/:number", function(req, res){
    city = city = req.params.city;
    myCity = city.toUpperCase();
    n = req.params.number;

    res.render('tours', {city: myCity, repeat: n});
})

// Start Server
app.listen(3050, function(){
    console.log("Starting Server on port 3050");
})