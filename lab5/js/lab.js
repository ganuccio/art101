// index.js - lab 5
// Author: Gia Nuccio
// Date: 10/20/24

// Define Variables using let and const
const make = "Toyota";
const model = "Prius";
const color = "Black";
const year = 2011;

// Calculate the car's age
const currentYear = new Date().getFullYear(); // dynamically gets the current year
let age = currentYear - year; 

// Output the car details
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + " years<br>");

// Example Function: Adds two numbers and returns the sum
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Main function to control program flow
function main() {
  console.log("Main function started.");
  // You can add any other code here that you want to execute when the page loads
  let sum = addNumbers(5, 7);
  console.log("Sum of 5 and 7 is: " + sum);
}

// Let's get this party started
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