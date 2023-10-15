import { useState } from "react";
import marvel from "./Marvel.json";
import MarvelChild from "./Marvel-Child";
const MarvelParent = () => {
  const passProps = () => {
    return (
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {marvel.map((item, index) => {
          const { id, species, ...myData } = item;
          return (
            <div
              key={index}
              style={{
                border: "1px solid silver",
                width: "250px",
              }}
            >
              <MarvelChild myData={myData} />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <h1>My Marvel Character</h1>
      <div>{passProps()}</div>
    </div>
  );
};
export default MarvelParent;
