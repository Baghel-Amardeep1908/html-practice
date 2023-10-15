// function sum(...args) {
//   console.log(args);
//   let add = 0;
//   args.map((item) => {
//     add += item;
//   });
//   return add;
// }
// console.log(sum(1, 2, 3)); // Should output 6
// console.log(sum(4, 5, 6, 7)); // Should output 22

let obj = {
  uname: "Amardeep",
  lname: "Baghel",
};

let result = ({ address }) => {
  let p = { ...obj, address };
  console.log(p);
};

result({ address: "Indore" });
