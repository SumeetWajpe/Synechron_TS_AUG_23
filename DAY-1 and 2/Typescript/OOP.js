// enum Designation {
//   Developer = 100,
//   Tester = 200,
//   Trainer = 300,
//   Architect = 400,
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 200; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "The car " + this.name + " is running @ " + this.speed + " kmph !";
    };
    return Car;
}());
// var carObj = new Car();
// console.log(carObj.accelerate());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, isArmed) {
        var _this = _super.call(this, name, speed) || this;
        _this.isArmed = false;
        _this.isArmed = isArmed;
        return _this;
    }
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());
