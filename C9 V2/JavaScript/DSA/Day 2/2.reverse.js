//String reverse without using inbult function

let reverseStr = (str) => {
  let a = "";
  for (let i = str.length - 1; i >= 0; i--) {
    a += str[i];
    console.log(a);
  }
};
reverseStr("Amardeep");