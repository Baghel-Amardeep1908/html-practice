import { useState } from "react";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import PureComp from "./PureComp";
const Parent = () => {
  const [count, setCount] = useState(0);
  const [ncount, setNcount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>Count : {count}</div>
      <ClassComp cCount={count} qcount={ncount} />
      {/* <FuncComp fCount={count} /> */}
      <PureComp pCount={count} qcount={ncount} />
      <ClassComp qcount={ncount} />
      {/* <FuncComp /> */}
      <PureComp qcount={ncount} />
      <ClassComp cCount={count} qcount={ncount} />
      {/* <FuncComp fCount={count} /> */}
      <PureComp pCount={count} qcount={ncount} />
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
export default Parent;
