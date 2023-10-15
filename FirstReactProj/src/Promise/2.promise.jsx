import axios from "axios";
import { useEffect, useState } from "react";

const MyPromise = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const loadingAPI = async () => {
      const productsData = await axios.get(
        "https://fakestoreapi.com/products/"
      );
      setProduct(productsData.data);
      console.log("productsData", productsData);
    };
    loadingAPI();
  }, []);
  return (
    <div>
      {product.map((data, index) => {
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
      })}
    </div>
  );
};
export default MyPromise;
