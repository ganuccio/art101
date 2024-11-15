// index.js - Lab 12: Conditionals
// Author: Gia Nuccio
// Date: 11/13/24

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHat(str) {
  let len = str.length;
  let mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}

// Attach click handler to submit button using jQuery
$("#button").click(function() {
  console.log("Button clicked");
  var name = $("#input").val();
  console.log("Name: " + name);
  var house = sortingHat(name);
  console.log("House: " + house);
  $("#output").html("<h1>" + house + "</h1>");
});
