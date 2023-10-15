import ChildD24A from "./ChildA";
import { ProfileProvider } from "./context/ProfileContext";

const ParentD24A = () => {
  return (
    <ProfileProvider value={{ name: "Satyam", city: "Jabalpur" }}>
      <div>
        <p>I am Parent D24A</p>
        <ChildD24A />
      </div>
    </ProfileProvider>
  );
};

export default ParentD24A;
