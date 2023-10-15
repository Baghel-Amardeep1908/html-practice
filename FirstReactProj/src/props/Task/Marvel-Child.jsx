const MarvelChild = ({ myData }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={`${myData.image}`} alt="" height={300} width={250} />
        <p>Superhero : {myData.name}</p>
        <p>Name : {myData.actor}</p>
        <p>Movie Cast Name : {myData.realname}</p>
        <p>Citizenship : {myData.citizenship}</p>
      </div>
    </div>
  );
};
export default MarvelChild;
