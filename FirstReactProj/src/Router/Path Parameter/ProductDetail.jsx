import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ProductDetails = () => {
  const [detail, setDetail] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((data) => data.json())
      .then((result) => {
        console.log("Result", result);
        setDetail(result);
      });
  }, [productId]);

  return <div> {detail.description || "Loading"} </div>;
};
export default ProductDetails;
