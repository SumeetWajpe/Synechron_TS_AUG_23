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
