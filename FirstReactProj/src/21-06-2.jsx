const ChildCompSample = ({ onMyIncrement, onMyDecrement }) => {
  console.log("Props: ", onMyIncrement);
  return (
    <>
      <p>I am from child</p>
      <button onClick={onMyIncrement}>Increment From child</button>
      <button onClick={onMyDecrement}>Decrement</button>
    </>
  );
};

export default ChildCompSample;
