import { useState } from "react";

/* this.state = {
  name: "",
  profile: {
    name: "",
    city: "",
  },
  hobbies: [],
}; */
const FCExampleOne = () => {
  const [count, setCount] = useState(5);
  let countIncrement = () => {
    prevcount = prevcount + 1;
  };
  function countDecrement() {
    setCount(count - 1);
  }
  /* 
  const [profile, setProfile] = useState({ name: "", city: "" });
  const [hobbies, setHobbies] = useState(['music', 'food']); */

  let [uName, setUName] = useState("Dee");
  let [uCity, setUcity] = useState("Delhi");
  return (
    <div>
      <p>{uName}</p>
      <input
        type="text"
        value={uName}
        onChange={(e) => {
          //uName = e.target.value;
          setUName(e.target.value);
        }}
      />
      <input type="text" value={uCity} />
      <p>Hello from FC</p>

      <div>
        <button onClick={countIncrement}>+</button>
        <span>{count}</span>
        <button onClick={countDecrement}>-</button>
      </div>
    </div>
  );
};

export default FCExampleOne;
