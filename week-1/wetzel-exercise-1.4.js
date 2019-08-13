/*
============================================
; Title:  Exercise 1.4
; Author: Loren Wetzel
; Date:   10 August 2019
; Modified By:
; Description: Duck Typing exercise
;===========================================
*/
'use strict';

var header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 1.4"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

//constructor function
function Car(model) {
    this.model = model;
}

//add to constructor
Car.prototype.start = function () {
    console.log("Car added to racetrack!");
}

//constructor function
function Truck(model, year) {
    this.model = model;
    this.year = year;
}

//add to constructor
Truck.prototype.start = function () {
    console.log("Truck added to racetrack!");
}

//constructor function
function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

//add to constructor
Jeep.prototype.start = function () {
    console.log("Jeep added to racetrack!");
}

//variable declaration
var racetrack = [];

//function to add to array
function driveIt(vehicle) {
    vehicle.start();
    racetrack.push(vehicle);
}

//variable declaration
var vwCar = new Car("Jetta");
var chevyTruck = new Truck("Silverado", "1991");
var theJeep = new Jeep("Cherokee", "1999", "Red");

//add variables to array
driveIt(vwCar);
driveIt(chevyTruck);
driveIt(theJeep);


//output
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var j = 0; j < racetrack.length; j++) {
    console.log(racetrack[j].constructor.name + ": " + racetrack[j].model);
}


// end program
