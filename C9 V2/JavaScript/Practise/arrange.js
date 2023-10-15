let input = "eebecaaebdeeabecdbeaecf";

let result = {};
for (let i of input) {
  //console.log("i", i);
  if (!result.hasOwnProperty(i)) {
    result[i] = 1;
    //console.log(result[i]);
  }
  result[i] = result[i] + 1;
}
let arr = Object.entries(result).sort((a, b) => b[1] - a[1]);
console.log(arr);
let final = "";
for (let k of arr) {
    const[char,count]=k;
//   for (let i = 0; i < count; i++) {
//     final += char;
//   }
final+=Array(count).fill(char).join("");
  console.log(final);
}
console.log("sfakjdshfkj", final);
