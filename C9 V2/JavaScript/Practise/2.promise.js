const runPromise = () => {
  const p = new Promise((reply, reject) => {
    reply({ message: "Done" });
  });

  return p;
};

const runPromise2 = () => {
  const p = new Promise((reply, reject) => {
    reject({ message: "Error" });
  });

  return p;
};
console.log("1. Promise Started");
// Second way

const runAsyncPromise = async () => {
  try {
    const p1Result = await runPromise();
    console.log({ p1Result });
    const p2Result = await runPromise2();

    console.log({ p2Result });
  } catch (err) {
    console.log("Error: ", err);
  }
};

runAsyncPromise();
console.log("2. Promise Completed");
