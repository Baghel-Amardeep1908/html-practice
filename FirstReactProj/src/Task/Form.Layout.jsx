import { useState } from "react";

const Form = () => {
  const [gender, setGender] = useState("");
  const [feet, setFeet] = useState("");
  const [inch, setInch] = useState("");
  const [lbs, setLbs] = useState("");
  const [parent, setParent] = useState("");
  const [siblings, setSiblings] = useState("");
  const [activity, setActivity] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [pregnancy, setPregnancy] = useState("");
  const [flag, setFlag] = useState(false);

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleFeet = (e) => {
    setFeet(e.target.value);
  };
  const handleInch = (e) => {
    setInch(e.target.value);
  };
  const handleLbs = (e) => {
    setLbs(e.target.value);
  };
  const handleparent = (e) => {
    setParent(e.target.value);
  };
  const handleSiblings = (e) => {
    setSiblings(e.target.value);
  };
  const handleActivity = (e) => {
    setActivity(e.target.value);
  };
  const handleDiabetes = (e) => {
    setDiabetes(e.target.value);
  };
  const handlePregnancy = (e) => {
    setPregnancy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <p>Gender</p>
      </span>
      <span>
        Male
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={handleGender}
        />
        Female
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleGender}
        />
      </span>
      <p>{flag ? `${gender}` : ""}</p>

      <p>Height and Weight</p>
      <span>
        <input
          type="text"
          name="handw"
          id="feet"
          value={feet}
          onChange={handleFeet}
        />
        ft
      </span>
      <span>
        <input
          type="text"
          name="handw"
          id="inch"
          value={inch}
          onChange={handleInch}
        />
        inch
      </span>
      <span>
        <input
          type="text"
          name="handw"
          id="lbs"
          value={lbs}
          onChange={handleLbs}
        />
        lbs
      </span>
      <p>
        <span>
          <p>Feet : {flag ? `${feet}` : ""}</p>
          <p>Inch : {flag ? `${inch}` : ""}</p>
          <p>lbs : {flag ? `${lbs}` : ""}</p>
        </span>
      </p>
      <p>Family History</p>
      <span>
        <input
          type="checkbox"
          name="family"
          value="Parents"
          onChange={handleparent}
        />
        Parents
        <input
          type="checkbox"
          name="family"
          value="Siblings"
          onChange={handleSiblings}
        />
        Siblings
      </span>
      <p>
        {flag ? `${parent}` : ""} {flag ? `${siblings}` : ""}
      </p>

      <p>Activity Level</p>
      <span>
        <input
          type="radio"
          name="activity"
          value="Not Very Active"
          onChange={handleActivity}
        />
        Not Very Active
        <input
          type="radio"
          name="activity"
          value="Active"
          onChange={handleActivity}
        />
        Active
      </span>
      <p>{flag ? `${activity}` : ""}</p>
      <p>Diabetes</p>
      <span>
        <input
          type="radio"
          name="diabetes"
          value="Pre Diabetes"
          onChange={handleDiabetes}
        />
        Pre Diabetes
        <input
          type="radio"
          name="diabetes"
          value="Type-2"
          onChange={handleDiabetes}
        />
        Type-2
        <input
          type="radio"
          name="diabetes"
          value="Neither"
          onChange={handleDiabetes}
        />
        Neither
      </span>
      <p>{flag ? `${diabetes}` : ""}</p>
      <p>Pregnancy</p>
      <span>
        <input
          type="radio"
          name="pregnancy"
          onChange={handlePregnancy}
          value="Pregnant"
        />
        Pregnant
        <input
          type="radio"
          name="pregnancy"
          onChange={handlePregnancy}
          value="Not Pregnant"
        />
        Not Pregnant
      </span>
      <p>{flag ? `${pregnancy}` : ""}</p>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default Form;
