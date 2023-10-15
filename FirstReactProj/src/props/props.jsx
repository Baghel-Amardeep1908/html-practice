import Child1 from "./child-props.jsx";

const Parent1 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "red",
      }}
    >
      <Child1 name="Amardeep" from="Indore" />
      <Child1 name="Shubham" from="Indore" />
      <Child1 name="Ankit" from="Morena" />
      <Child1 name="Vishal" from="Indore" />
      <Child1 name="Avinash" from="Jharkhand" />
      <Child1 name="Prakash" from="Katni" />
      <Child1 name="Arvind" from="Vidisha" />
    </div>
  );
};
export default Parent1;
