var Designation;
(function (Designation) {
    Designation[Designation["Developer"] = 100] = "Developer";
    Designation[Designation["Tester"] = 200] = "Tester";
    Designation[Designation["Trainer"] = 300] = "Trainer";
    Designation[Designation["Architect"] = 400] = "Architect";
})(Designation || (Designation = {}));
var d = Designation.Tester;
console.log(d); // 200
console.log(Designation[d]); // Tester
// class Emp {
//   designation: Designation;
// }
// var e = new Emp();
// e.designation = Designation.Tester
// write an array of movies[5] - title, budget, threatre, category (Enum)
// write a method GetMoviesByCategory(category)
var MovieCategory;
(function (MovieCategory) {
    MovieCategory[MovieCategory["Fiction"] = 0] = "Fiction";
    MovieCategory[MovieCategory["Romance"] = 1] = "Romance";
    MovieCategory[MovieCategory["Action"] = 2] = "Action";
})(MovieCategory || (MovieCategory = {}));
var Movie = /** @class */ (function () {
    function Movie(title, budget, category) {
        if (title === void 0) { title = "Unknown"; }
        if (budget === void 0) { budget = 0; }
        if (category === void 0) { category = MovieCategory.Action; }
        this.title = title;
        this.budget = budget;
        this.category = category;
    }
    return Movie;
}());
var movieObj = new Movie();
console.log(movieObj.title);
