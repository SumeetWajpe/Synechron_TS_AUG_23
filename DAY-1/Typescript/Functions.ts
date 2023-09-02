// function Add(x, y) {
//   return x + y;
// }
// console.log(Add(20, 30));
// Add();// Error !

function Add(x: number, y: number): number {
  return x + y;
}

let result: number = Add(10, 20);

console.log(result);
// Add("Hello", "World !");
