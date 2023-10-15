import { useState } from "react";
import Child from "./2.Child-Input";

const Parent = () => {
  const [fName, setFName] = useState("");

  //   const myFun = (val) => {
  //     setFName(val);
  //   };
  return (
    <div>
      <Child myName={setFName} />
      <p>{fName}</p>
    </div>
  );
};
export default Parent;
