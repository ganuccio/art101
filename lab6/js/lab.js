// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
//Define Variables
let myTransportation = ["make","model", "color", "year", "age"];


//Creat object
let myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "black",
  year: 2011,
  age: function() {
    return 2024 - this.year;
  }
};

// 
console.log(myMainRide.age()); // Output: 13

// Output
document.writeln("My Main Ride: <pre>", 
 JSON.stringify(myMainRide, null, '\t'), "</pre>");
 