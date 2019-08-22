/*
============================================
; Title:  Exercise 3.2
; Author: Loren Wetzel
; Date:   21 August 2019
; Modified By:
; Description: Demonstrates the use of the Factory Pattern
;              in a JavaScript program.
;===========================================
*/
'use strict';

//header output
var header = require('../header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 3.2"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

//constructor functions to define new databases
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Informix(properties) {
  this.username = properties.username || "administer";
  this.password = properties.password || "youWillNeverKnow";
  this.server = properties.server || "localhost:6745";
}

function Oracle(properties) {
  this.username = properties.username || "thatAdmin";
  this.password = properties.password || "theOnlyPassword";
  this.server = properties.server || "localhost:7021";
  this.version = properties.version || "19c";
}

//skeleton database factory
function DatabaseFactory() {}

//default database class
DatabaseFactory.prototype.databaseClass = MySql;

//factory method for creating new databases
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } else if (properties.databaseType === "Oracle"){
    this.databaseClass = Oracle;
  } else if (properties.databaseType === "Informix"){
this.databaseClass = Informix;
  } else{
    this.databaseClass = MySql;
  }

  return new this.databaseClass(properties);
};

//create instances of the factory for different databases
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "theAdmin",
  password: "theAdminPassword1",
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admiral",
  password: "theAdmiral3",
});

//output
console.log(oracle);
console.log(informix);
// end program
