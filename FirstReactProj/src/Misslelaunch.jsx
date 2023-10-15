import { useState } from "react";
import "./missle.css";

const MissleLaunch = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  const handleChange1 = () => {
    setButton1(!button1);
    if (button1) {
      setButton2(false);
      setButton3(false);
      setButton4(false);
    }
  };
  const handleChange2 = () => {
    setButton2(!button2);
    if (button2) {
      setButton3(false);
      setButton4(false);
    }
  };
  const handleChange3 = () => {
    setButton3(!button3);
    if (button3) {
      setButton4(false);
    }
  };
  const handleChange4 = () => {
    setButton4(!button4);
  };

  return (
    <div className="button">
      <div className="mainContainer">
        <div>
          <p>Open Tunnel</p>

          <button onClick={handleChange1}>{button1 ? "On" : "Off"}</button>
        </div>

        <div>
          <p>Enable Power</p>
          <button disabled={button1 == false} onClick={handleChange2}>
            {button2 ? "On" : "Off"}
          </button>
        </div>

        <div>
          <p>Start Countdown</p>
          <button disabled={button2 == false} onClick={handleChange3}>
            {button3 ? "On" : "Off"}
          </button>
        </div>

        <div>
          <p>Launch Missile</p>
          <button disabled={button3 == false} onClick={handleChange4}>
            {button4 ? "On" : "Off"}
          </button>
        </div>
      </div>
      <div id="missile">
        <p>{button4 ? "Missle Launched" : ""}</p>
      </div>
    </div>
  );
};
export default MissleLaunch;
