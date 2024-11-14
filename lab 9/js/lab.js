// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Author: Gia Nuccio
// Date: 11/4/24


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("button-challenge").click(function(){

  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});