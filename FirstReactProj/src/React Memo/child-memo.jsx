import { memo } from "react";

const Child = ({ count }) => {
  console.log("I am Child Comp");
  return (
    <div>
      <p>Parent Count : </p>
    </div>
  );
};
const MemoChild = memo(Child);
export default MemoChild;
