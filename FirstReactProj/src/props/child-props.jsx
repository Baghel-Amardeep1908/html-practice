import "../App.css";
const Child1 = (meraProps) => {
  return (
    <div className="card">
      <p>
        {meraProps.name} from {meraProps.from}
      </p>
    </div>
  );
};
export default Child1;
