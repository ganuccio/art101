//index.js Lab 11- JavaScript Events and Forms
//Author: Gia Nuccio
//Date: 11/11/24


// index.js - Functions lab
// Author: Gia Nuccio
// Date: 10/25/24

//sortUserName - a function that takes user input and sorts the letters
// of their name

function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split(' ');
    console.log("nameArray") =", name Array)";
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort=", nameArraySort);
    //join array back to a string
    var nameSorted = namedArraySort.join(' ');
    console.log("nameSorted=", nameSorted);

    return nameSorted;
}

//callfunction and print to doc
document.writeln(sortUserName());

//output
document.writeln("Oh hey I've fixed your name: ",
    sortUserName(), "</br>");
