// var x = 100;
// x = "Hello !";

var x = 100; //Type Inferencing
var s = "Hello !";
var y: number = 200; // Type annotation
var b: boolean;
b = true;
console.log(b);
var str: string;
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
  let q;
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
let cars: string[] = ["BMW", "AUDI", "FERRARI"];
let moreCars: string[] = ["TATA", "MAHINDRA"];
let allCars: string[] = [...cars, ...moreCars, "MARUTI"];
console.log(allCars);
cars[0] = "PQR";

// With Objects
let person = { name: "Carlos Alcaraz", country: "Spain" };
let player = { ...person, age: 20, grandSlamsWon: 2 };
console.log(player);
