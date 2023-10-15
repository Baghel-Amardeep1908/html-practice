import { useMemo, useState } from "react";
import Child from "./child-memo";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const myMemo = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += i;
    }
    console.log(sum);
    return sum;
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p onClick={handleClick}>My Counter : {counter}</p>
      {/* <Child />
      <Child />
      <Child />
      <Child />
      <Child />
      <Child count={counter} />
      <Child />
      <Child /> */}
    </div>
  );
};
export default Parent;
