// function Add(x, y) {
//   return x + y;
// }
// console.log(Add(20, 30));
// Add();// Error !
// function Add(x: number, y: number): number | string {
//   if (x == 0) {
//     return "X Can't be zero !";
//   }
//   return x + y;
// }
// let result: number | string = Add(10, 20);
// console.log(result);
// Add("Hello", "World !");
// let d: number | string;
// d = 10;
// d = "Hi";
// d = true;
// function Square(x: number): void {
//   return 100;
// }
// Optional Parameters
function PrintBook(author, title, noOfPages) {
    console.log(author, title, noOfPages);
}
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300);
