// index.js - Lab 13: Loops
// Author: Gia Nuccio
// Date: 11/18/24

function fizzBuzzBoom() {
  const outputDiv = document.getElementById("output");
  let outputHTML = ""; 
  // Store the results as a single string for efficiency

  for (let i = 1; i <= 200; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += "Buzz";
    if (i % 7 === 0) result += "Boom";

  // Append the result or the number itself
    outputHTML += result ? `${result}!<br>` : `${i}<br>`;
  }

  // Add the output to the div
  outputDiv.innerHTML = outputHTML;
}

// Run the function
fizzBuzzBoom();
