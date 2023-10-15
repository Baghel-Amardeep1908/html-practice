// Find factorial of user input number

let factorial = (num) => {
  let a = 1;
  for (let i = num; i > 0; i--) {
    a = a * i;
  }
  console.log(a);
};
factorial(10);
