// Check if a string is an Anagram

let checkAnagram = (str1, str2) => {
  let splitStr1 = str1.split("");
  let splitStr2 = str2.split("");
  for (i = 0; i <= splitStr1.length - 1; i++) {
    for (j = 0; j <= splitStr2.length; j++) {
      if (splitStr1[i] === splitStr2[j]) {
        console.log("str is anagram");
      }
      console.log("str is not anagram");
    }
  }
};
checkAnagram("amar", "aarma");
