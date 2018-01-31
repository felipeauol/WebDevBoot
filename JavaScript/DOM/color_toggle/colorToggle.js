//Build a webpage with a single button that  
//toggles the background between white and purple

var button = document.querySelector("button");
var body = document.querySelector("body");

if(button){
    button.addEventListener("click", function () {
    if(body.getAttribute("class") == "white"){
        body.setAttribute("class","purple");
    } else{
        body.setAttribute("class","white");
    }
})
}

// Alternative solution using `classList.toggle`:

// button.addEventListener("click", function(){
//     document.body.classList.toggle("purple");
// })