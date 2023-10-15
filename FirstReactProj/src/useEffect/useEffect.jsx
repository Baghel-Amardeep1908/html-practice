import { useEffect, useState } from "react";

const MyEffect = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((item) => {
        setProduct(item);
      });
  }, []);

  const showProduct = () => {
    return product.map((data, index) => {
      return (
        <div key={index}>
          <div>
            <img src={data.image} alt="" height={200} width={200} />
          </div>
          <div>
            <p>{data.title}</p>
            <p>{data.price}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {showProduct()}
      </div>
    </div>
  );
};
export default MyEffect;
