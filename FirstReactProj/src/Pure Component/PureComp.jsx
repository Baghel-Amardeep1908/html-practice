import { memo } from "react";

const PureComp = ({ pCount }) => {
  console.log("Pure Component");
  return <div>{/* <div>Pure Component Count : {pCount}</div> */}</div>;
};
const NewPureComp = memo(PureComp);
export default NewPureComp;
