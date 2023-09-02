var Designation;
(function (Designation) {
    Designation[Designation["Developer"] = 100] = "Developer";
    Designation[Designation["Tester"] = 200] = "Tester";
    Designation[Designation["Trainer"] = 300] = "Trainer";
    Designation[Designation["Architect"] = 400] = "Architect";
})(Designation || (Designation = {}));
var d = Designation.Tester;
console.log(d);
console.log(Designation[d]);
// class Emp {
//   designation: Designation;
// }
// var e = new Emp();
// e.designation = Designation.Tester
