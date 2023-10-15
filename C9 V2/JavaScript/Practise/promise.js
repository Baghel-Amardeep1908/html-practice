const runPromise2 = () => {
  const p = new Promise((reply, reject) => {
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      sum += i;
    }
    console.log("Sum ", sum);
    reject({ message: "Error" });
  });

  return p;
};

const runPromise = () => {
  const p = new Promise((reply, reject) => {
    reply({ message: "Done" });
  });

  return p;
};
console.log("1. Promise Started");

// Way 1 - Using .then & .catch

runPromise2()
  .then((data) => console.log("4. Success: ", data))
  .catch((err) => console.log("4. Error: ", err));

runPromise()
  .then((data) => console.log("3. Success: ", data))
  .catch((err) => console.log("3. Error: ", err));

console.log("2. Promise Completed");
