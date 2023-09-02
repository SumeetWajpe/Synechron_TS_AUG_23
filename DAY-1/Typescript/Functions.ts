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

// function PrintBook(author: string, title: string, noOfPages?: number) {
//   console.log(author, title, noOfPages);
// }

// PrintBook(); // undefined X 3
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 300);

// Default Parameters

// function PrintBook(
//   author: string = "Unknown",
//   title: string = "Unknown",
//   noOfPages: number = 0,
// ): void {
//   //   author = author || "Unknown";
//   //   title = title || "Unknown";
//   //   noOfPages = noOfPages || 0;
//   console.log(author, title, noOfPages);
// }

// PrintBook();
// PrintBook("Shivaji Sawant", "Mryutyunjay", 500);

// Rest Parameters

function PrintBook(author: string, ...titles: string[]) {
  console.log(author, titles);
}
PrintBook("Shivaji Sawant", "Mryutyunjay", "Yugandhar");
