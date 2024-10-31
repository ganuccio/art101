// index.js - addnumbers callback
// Author: Gia Nuccio
// Date: 10/30/24


function addNumbers(x){
  var results = (x + 5)
  return results;
}

//test function
console.log("Whats 5 more?", addNumbers(3));
console.log("Whats 5 more?", addNumbers(6));

array = [ 17, 11, 5, 6, 3]
console.log("my array", array );

var result = array.map(addNumbers);
//should return number + 5
console.log("add a number plus 5", result);

var result = array.map(function(x){
  return (x - 1);
})

//should return
console.log("number minus 1", result);