import { useState } from "react";
import Greetings from "./Greeting";

function Homepage() {
  const [name, setName] = useState("Rahul");
  return (
    <div>
      <p>Greetings</p>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Greetings name={name} city="Dehradun" />
    </div>
  );
}
export default Homepage;

