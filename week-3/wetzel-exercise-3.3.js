/*
============================================
; Title:  factory-example1.js || Exercise 3.3
; Author: Professor Krasso
; Date:   27 February 2019
; Modified By: Loren Wetzel
; Modified Date: 21 August 2019
; Description: Demonstrates the use of the Singleton Pattern
;              in a JavaScript program.
;===========================================
*/
'use strict';

//header output
var header = require('../header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 3.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//singleton pattern
var DatabaseSingleton = (function () {
  // Instance stores a reference to the DatabaseSingleton
  var instance;

  //private method
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    // Get the DatabaseSingleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

//test instances of DatabaseSingleton and outputs results
function databaseSingletonTest() {
  var oracle = DatabaseSingleton.getInstance();
  var postres = DatabaseSingleton.getInstance();
  console.log("Same Database instance? %s", oracle === postres);
}

//output
databaseSingletonTest();

// end program
