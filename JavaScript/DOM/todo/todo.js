//Objectives:
// - turn li green on hover
// - restore color afterwards
// - on click, add strikethrough to li, turn it green permanently, and add a make it less opaque

//Select all lis
lis = document.querySelectorAll("li");

//For each li
for (let i = 0; i < lis.length; i++) {
    //When I hover over an li,
    lis[i].addEventListener("mouseover",
    //Then it turns green
    function(){
        this.classList.add("selected")
    } )

    //When I mouse out of the li
    lis[i].addEventListener("mouseout",
    //Then it turns back to black
    function () {
        this.classList.remove("selected")
    })

    //When I click the li
    lis[i].addEventListener("click",
    //Then it turns gree, strikethrough and less opaque
    function() {
        this.classList.toggle("done");
    }
)
}

