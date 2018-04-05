var express = require("express");
app = express();

// Route for "/"
app.get("/",function(req, res) {
    res.send("Welcome to our home page");
})

// Dynamic page for city you want to visit
app.get("/visit/:city",function(req, res){
    city = req.params.city;
    myCity = city.toUpperCase();
    
    
    res.render('tours.ejs', {city: myCity});
})

// Start Server
app.listen(3050, function(){
    console.log("Starting Server on port 3050");
})