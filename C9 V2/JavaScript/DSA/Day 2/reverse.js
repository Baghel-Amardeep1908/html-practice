// String reverse with reversing of individual words

const reverseStr = (str) => {
  let reverse = str.split("");

  for (i = reverse.length; i >= 0; i--) {
    console.log(reverse[i]);
  }
};
reverseStr("Amardeep");
