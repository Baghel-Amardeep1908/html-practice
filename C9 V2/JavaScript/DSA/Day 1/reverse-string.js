let reverseStr = (str) => {
  let result = str.split("");
  let reversedStr = [];
  for (let i = result.length - 1; i >= 0; i--) {
    let newStr = result[i];
    reversedStr.push(newStr);
  }

  let joinStr = reversedStr.join("");
  console.log(joinStr);
};

reverseStr("amardeep");
