import { useState } from "react";

const Colors = () => {
  const [color, setColor] = useState({
    red: "",
    green: "",
    blue: "",
    black: "",
  });

  let handleChange = (e) => {
    const { name, value } = e.target;

    if (color[name]) {
      delete color[name];
      setColor(color);
      console.log("aaaaaaaaa", color);
    } else {
      setColor({ ...color, [name]: value });
      console.log("bbbbbbbbbbb", color);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        name="red"
        id=""
        value="Red"
        onChange={handleChange}
      />
      Red
      <input
        type="checkbox"
        name="green"
        id=""
        value="Green"
        onChange={handleChange}
      />
      Green
      <input
        type="checkbox"
        name="blue"
        id=""
        value="Blue"
        onChange={handleChange}
      />
      Blue
      <input
        type="checkbox"
        name="black"
        id=""
        value="Black"
        onChange={handleChange}
      />
      Black
      <p>
        {color.red}
        {color.green}
        {color.blue}
        {color.black}
      </p>
    </div>
  );
};
export default Colors;
