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
var movie = {
    name: "Sholay",
    budget: 100000,
    getDetails: function () {
        return "The movie " + this.name + " is having budget of Rs." + this.budget;
    },
};
console.log(movie.getDetails());
