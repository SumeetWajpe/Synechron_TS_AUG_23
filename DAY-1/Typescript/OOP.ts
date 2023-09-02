enum Designation {
  Developer = 100,
  Tester = 200,
  Trainer = 300,
  Architect = 400,
}

let d: Designation = Designation.Tester;
console.log(d); // 200
console.log(Designation[d]); // Tester
// class Emp {
//   designation: Designation;
// }

// var e = new Emp();
// e.designation = Designation.Tester

// write an array of movies[5] - title, budget, threatre, category (Enum)
// write a method GetMoviesByCategory(category)
enum MovieCategory {
  Fiction,
  Romance,
  Action,
}

class Movie {
  title: string;
  budget: number;
  category: MovieCategory;

  constructor(
    title: string = "Unknown",
    budget: number = 0,
    category: MovieCategory = MovieCategory.Action,
  ) {
    this.title = title;
    this.budget = budget;
    this.category = category;
  }
}

// var movieObj = new Movie();
// console.log(movieObj.title);

// let movies = [
//   new Movie("Sholay", 100000, MovieCategory.Action),
//   new Movie("Swades", 1000000, MovieCategory.Fiction),
// ];
// OR
let movies: Array<Movie> = new Array<Movie>(
  new Movie("Sholay", 100000, MovieCategory.Action),
  new Movie("Swades", 1000000, MovieCategory.Fiction),
);
