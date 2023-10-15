import { useState } from "react";
import UnMounting from "./03-07-mouse-move";

const ShowHideFifth = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((state) => !state)}>Toggle</button>
      {show ? <UnMounting /> : <p>No Comp loaded</p>}
    </div>
  );
};
export default ShowHideFifth;
