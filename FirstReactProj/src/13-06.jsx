import ChildView from "./13-06-2";

const ParentView = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
      <ChildView name="Ajit" city="Mumbai" />
      <ChildView name="Sohail" city="Pune" />
      <ChildView name="Khusi" city="Bhopal" />
      <ChildView name="Reetika" city="Delhi" />
      <ChildView name="Arun" city="Morena" />
      <ChildView name="Varun" city="Delhi" />
      <ChildView name="Sachin" city="Bangalore" />
      <ChildView name="Deepak" city="Bihar" />
      <ChildView name="Manasvi" city="Bhopal" />
      <ChildView />
    </div>
  );
};

export default ParentView;
