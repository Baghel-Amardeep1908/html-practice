//Remove Duplicate characters from array of element using filter

let arr = [
  "a",
  "b",
  "a",
  "f",
  "s",
  "d",
  "f",
  "w",
  "s",
  "g",
  "d",
  "f",
  "w",
  "s",
  "a",
  "n",
];
// let arr=[2,4,2,1,6]
const duplicateRemovalUsingFilter = (arr) => {
  let result = arr.filter((item, index) => {
    // let count = 0;
    // for (let i of arr) {
    //   if (i === item) {
    //     count++;
    //   }
    // }
    // console.log(item, count);
    // return count == 1;

    let count = 0;
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count == 0;
  });
};
return result;

console.log(duplicateRemovalUsingFilter(arr));
