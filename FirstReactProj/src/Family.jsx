import { useState } from "react";

const Family = () => {
  const [uName, setUName] = useState({ fname: "", lname: "" });
  let handleChange = (e) => {
    const { name, value } = e.target;
    setUName({ ...uName, [name]: value });
  };

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={uName.fname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lname"
        value={uName.lname}
        onChange={handleChange}
      />
      <p>
        Welcome {uName.fname} to the {uName.lname}&apos;s family
      </p>
    </div>
  );
};
export default Family;
