// index.js - Lab 13: Loops
// Author: Gia Nuccio
// Date: 11/18/24

function fizzBuzzBoom() {
  let oneLongString = " "; //Initalize empty string
 
  // Store the results as a single string for efficiency

  for (let i = 1; num <= 200; num++) {
    let output = `${num}: `; //start with number

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
    if (output === `${num}: `){
        output = `${num}`;
  }
      oneLongString += output + "<br>";
}

  // Add the output to the div
 $("output").html(oneLongString);
}

// Run the function
fizzBuzzBoom();
