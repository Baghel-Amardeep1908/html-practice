import { useState } from "react";

const NewFCComp = () => {
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div>
      <div>
        <p>{uName}</p>
        <input
          type="text"
          value={uName}
          onChange={(e) => {
            setUName(e.target.value);
            console.log(uName);
          }}
        />
      </div>
      <div>
        <p>{email}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />
      </div>
      <div>
        <p>{password}</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(password);
          }}
        />
      </div>
      <div>
        <p>{city}</p>
        <select
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            console.log(city);
          }}
        >
          <option value="Indore">Indore</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
      <div>
        <p>{gender}</p>
        <input
          type="radio"
          name="Gender"
          value="Male"
          onChange={(e) => {
            setGender(e.target.value);
            console.log(gender);
          }}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="Gender"
          value="Female"
          onChange={(e) => {
            setGender(e.target.value);
            console.log(gender);
          }}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <p>{hobbies}</p>
        <input
          type="checkbox"
          value={hobbies}
          id="travelling"
          onChange={(e) => {
            setHobbies(e.target.id);
            console.log(hobbies);
          }}
        />
        <label htmlFor="travelling">Travelling</label>

        <input
          type="checkbox"
          value={hobbies}
          id="racing"
          onChange={(e) => {
            setHobbies(e.target.id);
            console.log(hobbies);
          }}
        />
        <label htmlFor="racing">Racing</label>
        <input
          type="checkbox"
          value={hobbies}
          id="music"
          onChange={(e) => {
            setHobbies(e.target.id);
            console.log(hobbies);
          }}
        />
        <label htmlFor="music">Music</label>
        <input
          type="checkbox"
          value={hobbies}
          id="reading"
          onChange={(e) => {
            setHobbies(e.target.id);
            console.log(hobbies);
          }}
        />
        <label htmlFor="reading">Reading</label>
      </div>
      <div>
        <p>{rating}</p>
        <input
          type="range"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
            console.log(rating);
          }}
        />
      </div>
    </div>
  );
};
export default NewFCComp;
