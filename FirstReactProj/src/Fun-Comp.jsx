import { useState } from "react";

const FunComp = () => {
  let [uName, setUName] = useState("");
  let [check, setCheck] = useState("");

  return (
    <div>
      <p>Name:{uName}</p>
      <input
        type="text"
        value={uName}
        onChange={(e) => {
          setUName(e.target.value);
        }}
      />
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
      <p>Checked:{check ? "Yes" : "No"}</p>
    </div>
  );
};
export default FunComp;
