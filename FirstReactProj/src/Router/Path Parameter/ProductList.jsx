import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  let showProducts = () => {
    return products.map((item, index) => {
      return (
        <div key={index}>
          <Link to={`/product-details/${item.id}`}>{item.title}</Link>
        </div>
      );
    });
  };
  return <div>{showProducts()}</div>;
};
export default Product;
