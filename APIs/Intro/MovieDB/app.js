var express = require("express");
var app = express();


var request = require("request");

// Require body-parser to parse the body of the post request
var parser = require("body-parser");
// Configure parser to work
app.use(parser.urlencoded({extended: true}))

app.set("view engine", "EJS");

var results;

app.get("/", function(req, res){
    res.send("Welcome to the homepage");
})

app.get("/search/", function(req, res){
    res.render("search");
})

app.post("/results", function(req, res){
    var query = req.body.title;

    var searchdb = "http://www.omdbapi.com/?s=" + query + "&apikey=c4e4488b";
    
    request(searchdb,function (err, resp, body) {
        if (!err && res.statusCode == 200) {
            var results = JSON.parse(body);
        
            res.render("results", {results:results.Search});
        }
    });

})

app.listen(3000,function () {    
    console.log("Serving your app on port 3000");
})
