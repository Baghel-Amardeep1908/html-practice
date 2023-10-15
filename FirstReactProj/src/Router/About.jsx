import { Link } from "react-router-dom";
let About = () => {
  return (
    <div>
      <h1>My React Page</h1>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};
export default About;
