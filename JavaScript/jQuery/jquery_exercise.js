//Correctly include jQuery

//Select all divs and give them a purple background
$("div").css("background", "purple");
//Select all divs with the class highlight and give them 200px wide
$("div.highlight").css("width", "200px");
//Select the div with the id "third" and give it a orange border
$("#third").css("border", "2px solid orange");
//Bonus: select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");