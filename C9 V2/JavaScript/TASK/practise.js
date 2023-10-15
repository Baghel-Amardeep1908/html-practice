let arr = [1, 2, 3, 4, 5, 6, 0, 7, 8, 9];
let out = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
    out.push(arr[i]);
  }
}
console.log(out);
let arr2 = arr.map((item) => item * 2);
console.log("Arr2", arr2);

let arr3 = arr.filter((item) => item % 2 == 0);
console.log("Arr3", arr3);
