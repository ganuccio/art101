// index.js - Lab 13: Loops
// Author: Gia Nuccio
// Date: 11/18/24

function fizzBuzz() {
  let oneLongString = ""; // Initialize an empty string

  // Loop through numbers 1 to 200
  for (let num = 1; num <= 200; num++) {
    let output = `${num}: `; // Start with the number

    if (num % 3 === 0) {
      output += "Fizz";
    }
    if (num % 5 === 0) {
      output += "Buzz";
    }
    if (num % 7 === 0) {
      output += "Boom";
    }

    // Append the result or the number itself
    if (output === `${num}: `) {
      output = `${num}`;
    }
    oneLongString += output + "<br>";
  }

  // Add the output to the div (ensure correct selector)
  $("#output").html(oneLongString);
}

// Run the function
fizzBuzz();

// Ensure jQuery waits for the DOM to be fully loaded
$(document).ready(function () {
  fizzBuzz(); // Call your function here
});