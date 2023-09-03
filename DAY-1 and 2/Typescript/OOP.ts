// enum Designation {
//   Developer = 100,
//   Tester = 200,
//   Trainer = 300,
//   Architect = 400,
// }

// let d: Designation = Designation.Tester;
// console.log(d); // 200
// console.log(Designation[d]); // Tester
// class Emp {
//   designation: Designation;
// }

// var e = new Emp();
// e.designation = Designation.Tester

// write an array of movies[5] - title, budget, threatre, category (Enum)
// write a method GetMoviesByCategory(category)
// enum MovieCategory {
//   Fiction,
//   Romance,
//   Action,
// }

// class Movie {
//   //   private id: number;
//   title: string;
//   budget: number;
//   category: MovieCategory;

//   constructor(
//     title: string = "Unknown",
//     budget: number = 0,
//     category: MovieCategory = MovieCategory.Action,
//   ) {
//     this.title = title;
//     this.budget = budget;
//     this.category = category;
//   }
// }

// var movieObj = new Movie();

// console.log(movieObj.title);

// let movies = [
//   new Movie("Sholay", 100000, MovieCategory.Action),
//   new Movie("Swades", 1000000, MovieCategory.Fiction),
// ];
// OR
// let movies: Array<Movie> = new Array<Movie>(
//   new Movie("Sholay", 100000, MovieCategory.Action),
//   new Movie("Swades", 1000000, MovieCategory.Fiction),
// );

// interface IMovie {
//   name: string;
//   budget: number;
//   theatre?: string;
//   getDetails: () => string;
// }

// let movie: IMovie = {
//   name: "Sholay",
//   budget: 100000,
//   getDetails() {
//     return "The movie " + this.name + " is having budget of Rs." + this.budget;
//   },
// };
// console.log(movie.getDetails());

// type Movie = {
//   name: string;
//   budget: number;
//   theatre?: string;
//   getDetails?: () => string;
// };

// let movie: Movie = {
//   name: "Sholay",
//   budget: 100000,
// };

// Inheritance

class Car {
  name: string;
  speed: number;
  static carMake: number = 1994;
  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(): string {
    return "The car " + this.name + " is running @ " + this.speed + " kmph !";
  }

  static getDetails(): void {
    console.log(Car.carMake);
  }
}

var carObj = new Car();
Car.getDetails();
// console.log(carObj.accelerate());

// class JamesBondCar extends Car {
//   isArmed: boolean = false;
//   constructor(name: string, speed: number, isArmed: boolean) {
//     super(name, speed);
//     this.isArmed = isArmed;
//   }
//   accelerate(): string {
//     return super.accelerate() + " Is it armed ?" + this.isArmed;
//   }
// }

// Multi level Inheritance allowed, but multiple not allowed
// class BatmanCar extends JamesBondCar{

// }

// var jbc = new JamesBondCar("Aston Martin", 300, true);

// console.log(jbc.accelerate());

// interface IPerson {
//   age: number;
// }

// interface IEmployee {
//   id: number;
//   name: string;
//   salary: number;
// }

// class Employee implements IEmployee, IPerson {
//   id: number;
//   name: string;
//   salary: number;
//   age: number;
// }

// OR

// interface IPerson {
//   age: number;
//   name: string;
// }

// interface IEmployee extends IPerson {
//   id: number;
//   salary: number;
//   getSalary: () => number;
// }

// class Employee implements IEmployee {
//   id: number;
//   name: string;
//   salary: number;
//   age: number;
//   getSalary(): number {
//     return this.salary;
//   }
// }

// Enhanced class syntax

class EnhancedCar {
  constructor(public name: string = "AUDI", public speed: number = 200) {}
  accelerate() {
    return "The car " + this.name + " is running @ " + this.speed + " kmph !";
  }
}

var eCar = new EnhancedCar();
console.log(eCar.accelerate());

// String Interpolation
let product = { name: "Macbook Pro", price: 250000 };

console.log("The product " + product.name + " costs Rs." + product.price);
console.log(`The product ${product.name} costs Rs.${product.price}`);

let multiLineStr = `First Line
Second Line
Third Line 
  Fourth Line !`;

console.log(multiLineStr);
