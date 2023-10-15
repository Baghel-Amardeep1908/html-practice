const myPromise = () => {
  let p = new Promise((success, reject) => {
    success("I am success Promise");
    reject("I am reject Promise");
  });
  return p;
};
const result = async () => {
  try {
    const p1Result = await myPromise();
    console.log("p1Result", p1Result);
  } catch (err) {
    console.log("p2Result", err);
  }
};
result();
