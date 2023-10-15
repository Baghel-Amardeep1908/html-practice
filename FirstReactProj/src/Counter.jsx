import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  let onIncrement = () => {
    if (counter < 100) {
      setCounter(counter + 10);
    }
  };
  let onDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};
export default Counter;
