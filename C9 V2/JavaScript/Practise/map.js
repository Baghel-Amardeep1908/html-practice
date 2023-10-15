// // Result: [4, 10, 16, 22, 28]

// const numbers = [2, 5, 8, 11, 14];
// let result = numbers.map((item) => {
//   return item * 2;
// });
// console.log(result);

// // Filter
// // Result: ["apple", "banana", "grapes"]

// const words = ["apple", "banana", "kiwi", "grapes", "pear"];
// let result = words.filter((item) => {
//   return item.length >= 5;
// });
// console.log(result);

// // Reduce
// // Result: 47

// const numbers = [3, 7, 12, 5, 20];
// let result = numbers.reduce((acc, curr) => {
//   return acc + curr;
// });
// console.log(result);

// Map, Filter, Reduce
// Result: 470

const books = [
  { title: "Book 1", pages: 150 },
  { title: "Book 2", pages: 220 },
  { title: "Book 3", pages: 180 },
  { title: "Book 4", pages: 250 },
];
let pageArr = [];

let filterItem = books.map((item) => {
  pageArr.push(item.pages > 200);
});
