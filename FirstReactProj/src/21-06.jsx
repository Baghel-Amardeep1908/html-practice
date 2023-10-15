import { useState } from "react";
import ChildCompSample from "./21-06-2";

const ParentCompSample = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    console.log("On Clicked");
    setCount((prevState) => prevState + 1);
  };

  onDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={onIncrement}>Increment from parent</button>
      <ChildCompSample onMyIncrement={onIncrement} />
      <ChildCompSample onMyDecrement={onDecrement} />
    </>
  );
};

export default ParentCompSample;
