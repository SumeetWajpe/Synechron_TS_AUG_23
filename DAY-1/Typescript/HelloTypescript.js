// var x = 100;
// x = "Hello !";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// var cars: Array<string> = new Array<string>("BMW", "AUDI", "MERC");
// for (const car of cars) {
//   console.log(car);
// }
if (true) {
    var q = void 0;
    q = 100;
    console.log(q);
    // after 100 lines
    //   let q = 200; // Error !
}
// const PI: number = 3.14;
// PI = 3.1434; // Error !
// const player = { name: "Neeraj Chopra", country: "INDIA" };
// player = {};// Error !
// player.country = "Bharat";
// Spread Operator
var cars = ["BMW", "AUDI", "FERRARI"];
var moreCars = ["TATA", "MAHINDRA"];
var allCars = __spreadArray(__spreadArray(__spreadArray([], cars, true), moreCars, true), ["MARUTI"], false);
console.log(allCars);
cars[0] = "PQR";
