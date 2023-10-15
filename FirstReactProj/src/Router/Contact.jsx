import { Link } from "react-router-dom";
let Contact = () => {
  return (
    <div>
      <h1>My React Page</h1>
      <div>
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/about"}>About Us</Link>
      </div>
    </div>
  );
};
export default Contact;
