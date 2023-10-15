import { useState } from "react";
import ProductView from "./14-06-2";

const HomeView = () => {
  const [uName, setUName] = useState("");
  const [counter, setCounter] = useState(10);

  console.log("HomeView Re-Render: ", uName, counter);
  const name1 = uName;
  console.log("Name1 ", name1);

  return (
    <div>
      <p>{name1}</p>
      <p>Homeview</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setUName(e.target.value)}
      />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <hr />
      <ProductView name={uName} count={counter} />
    </div>
  );
};

export default HomeView;
