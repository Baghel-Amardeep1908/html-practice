import { Link } from "react-router-dom";
let Home = () => {
  return (
    <div>
      <h1>My React Page</h1>
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div>
        <Link to={"/about"}>About Us</Link>
      </div>
    </div>
  );
};
export default Home;
