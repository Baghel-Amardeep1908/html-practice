import { useState } from "react";
import ChildColor from "./Color-Child";
import "./App.css";
import { Button } from "bootstrap";

const ColorView = () => {
  const [color, setColor] = useState("");

  const handleChange = () => {
    setColor("red");
  };
  const handleChange1 = () => {
    setColor("blue");
  };
  const handleChange2 = () => {
    setColor("green");
  };

  return (
    <div>
      <button onClick={handleChange}>Button 1</button>
      <button onClick={handleChange1}>Button 2</button>
      <button onClick={handleChange2}>Button 3</button>
      <div>
        <ChildColor colour={color} />
      </div>
    </div>
  );
};
export default ColorView;
