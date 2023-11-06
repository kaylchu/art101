// index.js - Arrays and Objects Lab 6
// Author: Kyle Chen
// Date: 10/27/2023

// define variables
var myTransport = ["legs", "car", "bus"]

// create an object for my main ride
var myMainRide = {
  make: "Tesla",
  model: "Model 3",
  color:"Black",
  year: 2016,
  //create a function to calculate the age of the car
  age: function() {
    return 2023 - this.year;
  }
}

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
