// var x = 100;
// x = "Hello !";
var x = 100; //Type Inferencing
var s = "Hello !";
var y = 200; // Type annotation
var b;
b = true;
console.log(b);
var str;
var z;
z = 10;
z = "Hi";
z = [10, 20];
z = { x: 100 };
// Arrays
//var cars = ["BMW", "AUDI", "MERC"]; // Type Inferencing
// OR
//var cars: string[] = ["BMW", "AUDI", "MERC"]; // Type Annotation
//var cars = new Array("BMW", "AUDI");
// OR
// Using Generics
var cars = new Array("BMW", "AUDI", "MERC");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log(car);
}
if (true) {
    var q = void 0;
    q = 100;
    console.log(q);
    // after 100 lines
    //   let q = 200; // Error !
}
// const PI: number = 3.14;
// PI = 3.1434; // Error !
var player = { name: "Neeraj Chopra", country: "INDIA" };
// player = {};// Error !
player.country = "Bharat";
