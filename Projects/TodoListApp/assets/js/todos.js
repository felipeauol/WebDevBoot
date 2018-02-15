// // -- Long, difficult way --- //
// //Check Off Specific Todos by Clicking
//     //When I click an li
// $("li").click(function (){
//         //If it is red
//     if($(this).css("color") === "rgb(255, 0, 0)"){
//         //Then turn it black and uncross it
//         $(this).css({
//             color:"black",
//             textDecoration: "none"
//         })
//     }
//     //Else turn it red and cross it off
//     else
//     $(this).css({
//         color: "red",
//         textDecoration: "line-through"
//     });
// });


// -- Shorter, easy way --- //

//Check Off Specific Todos by Clicking
    //When I click a todo
    $("ul").on("click", "li", function () {
        //Then it changes to/from "completed"
        $(this).toggleClass("completed");
    });

//Click on X to delete todo

    //When I click on the X
$("ul").on("click", "li span", function (event) {
    event.stopPropagation();
    //Then the todo fades
    $(this).parent().fadeOut(400, function () {
        //And Then it is removed from the list
        $(this).remove();
    })
})

//Add new todo
    
$("input[type='text']").keypress(function (event) {
    //When I press enter within the textbox
    if (event.which === 13) {
        //Then the text within the box becomes a new todo
        new_todo = $(this).val();
        $("ul").append('<li> <span>X </span> ' + new_todo + '</li>')
        //And the box is reset
        $(this).val("");
    }
})