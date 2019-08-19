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

var person = {
  getAge: function(){
    return this.age;
    // console.log("The person's age is "+ this.age +".");
  }
};

var loren = Object.create(person, {
  "age": {
    "value": "38"
  },
  "fullName":{
    "value": "Loren Wetzel"
  }
});

loren.getAge();

console.log("The person's full name is '%s'", loren.fullName);
console.log("The person's age is '%s'", loren.age);


// end program
