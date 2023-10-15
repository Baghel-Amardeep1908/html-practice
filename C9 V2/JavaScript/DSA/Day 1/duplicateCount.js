//Remove Duplicate characters from array of element and find the count of an elements using set

const arr = ["amardeepsinghbaghel", "fdsjalkfhjshbfk"];

let arr2 = new Set();
arr.map((data) => {
  for (let i of data) {
    arr2.add(i);
  }
});

console.log(arr2);
