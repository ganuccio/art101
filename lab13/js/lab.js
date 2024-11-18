// index.js - Lab 13: Loops
// Author: Gia Nuccio
// Date: 11/18/24

function fizzBuzzBoom() {
  const outputDiv = document.getElementById("output");
  let outputHTML = ""; // Store results as a single string

  for (let i = 1; i <= 200; i++) {
    let result = "";

    if (i % 3 === 0) result += "Fizz";
    if (i % 5 === 0) result += " Buzz";
    if (i % 7 === 0) result += " Boom";

    // Append result or the number itself
    outputHTML += result.trim() ? `${result.trim()}!<br>` : `${i}<br>`;
  }

  // Add results to the output div
  outputDiv.innerHTML = outputHTML;
}

// Ensure function runs after DOM loads
document.addEventListener("DOMContentLoaded", fizzBuzzBoom);
