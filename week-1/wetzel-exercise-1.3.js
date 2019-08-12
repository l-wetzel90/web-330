/*
============================================
; Title:  Exercise 1.3
; Author: Loren Wetzel
; Date:   10 August 2019
; Modified By:
; Description: Using functions, create a cell phone object
;===========================================
*/
'use strict';

var header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 1.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

function CellPhone(manufacturer,model,color,price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
        return "Price: " + this.price;
    };
    this.getModel = function(){
        return "Model: " + this.model;
    };
    this.getDetails = function(){
        return "Manufacturer: " + this.manufacturer + 
        "\n" + this.getModel() + "\nColor: " + this.color +
        "\n" + this.getPrice();
    };
}

var phone = new CellPhone("Samsung", "Galaxy S10", "Black", "800.00");

console.log(phone.getDetails());



// end program