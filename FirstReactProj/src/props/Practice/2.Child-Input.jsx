import { useState } from "react";

const Child = (props) => {
  const handleChange = (e) => {
    props.myName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
export default Child;
