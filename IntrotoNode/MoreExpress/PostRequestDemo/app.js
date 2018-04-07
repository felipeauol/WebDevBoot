var express = require("express");
var app = express();

// Require body-parser to parse the body of the post request
var parser = require("body-parser");
// Configure parser to work
app.use(parser.urlencoded({extended: true}))

app.set("view engine", "ejs");

friends = ["Mary", "Joseph", "Jesus"];

app.get("/", function(req, res){
    res.render("home");
})

// Route for friend list
app.get("/friends", function(req, res){
    res.render("friends",{friends:friends});
})


// Route for post request to add a new friend
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
})


// Start Server
app.listen(3051, function() {
    console.log("Serving your app on port 3051");
})