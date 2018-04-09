var express = require("express");
var app = express();

var request = require("request");
var bodyParser = require('body-parser');


app.get("/", function(req, res){
    res.send("Welcome to the homepage");
})

var results;

app.get("/search/:title", function(req, res){
    var query = req.params.title;
    
    var search = "http://www.omdbapi.com/?t=" + query + "&apikey=c4e4488b";
    console.log('search: ', search);
    
    request("search",function (err, resp, body) {
        bod = bo.body;
        console.log('body: ', bod);
        if (!err && res.statusCode == 200) {
            var results = JSON.parse(body);
            console.log('results: ', results);
            
            res.redirect("/results");
        }
    });

})

app.post("/results",function (req, res){
    res.send(results);
})



app.listen(3000,function () {    
    console.log("Serving your app on port 3000");
})
