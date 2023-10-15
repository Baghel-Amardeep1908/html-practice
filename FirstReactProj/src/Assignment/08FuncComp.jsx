import { useState } from "react";

const FuncComp = () => {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("select");
  const [gender, setGender] = useState("radio");
  const [hobbies, setHobbies] = useState("checkox");
  const [rating, setRating] = useState("slider");
  return (
    <div>
      <div>
        <p>{uName}</p>
        <input
          type="text"
          value={uName}
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default FuncComp;
