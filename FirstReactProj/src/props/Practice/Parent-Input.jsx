import { useState } from "react";
import Child from "./Child-Display";

const Parent = () => {
  const [uName, setUName] = useState("");
  const handleChange = (e) => {
    setUName(e.target.value);
  };
  //console.log(uName);

  return (
    <div>
      <input type="text" value={uName} onChange={handleChange} />
      <Child meraName={uName} />
    </div>
  );
};
export default Parent;
