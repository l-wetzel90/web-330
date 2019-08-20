/*
============================================
; Title:  Exercise 2.2
; Author: Loren Wetzel
; Date:   16 August 2019
; Modified By:
; Description: Create Node.js server
;===========================================
*/
'use strict';

//header output
var header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 2.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//constructor function
var person = {
  getAge: function(){
    return this.age;
    // console.log("The person's age is "+ this.age +".");
  }
};

//create object from a different object
var loren = Object.create(person, {
  "age": {
    "value": "38"
  },
  "fullName":{
    "value": "Loren Wetzel"
  }
});

//call to new object
loren.getAge();

//output
console.log("The person's full name is '%s'", loren.fullName);
console.log("The person's age is '%s'", loren.age);

// end program
