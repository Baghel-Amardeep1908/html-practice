const router = createBrowserRouter([
    {
      path: "/",
      element: <MyProducts />,
    },
    {
      path: "/product/:productId",
      element: <ProductDetails />,
    },
  ]);
  
  
  
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { Link } from "react-router-dom";
  
  const MyProducts = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((result) => {
        if (result.data) {
          setProducts(result.data);
        }
      });
    }, []);
  
    return (
      <div>
        <h1>My Products</h1>
        <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {products.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  padding: 12,
                  border: "1px solid silver",
                  width: "180px",
                  listStyleType: "none",
                }}
              >
                <Link to={`/product/${item.id}`}>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default MyProducts;
  
  
  
  
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  
  const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
  
    useEffect(() => {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((result) => {
          if (result.data) {
            setProduct(result.data);
          }
        });
    }, [productId]);
  
    if (!product.id) {
      return <p>Please wait, we are loading details</p>;
    }
  
    return (
      <div>
        <h1>My Product details</h1>
        <p>Name: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    );
  };
  
  export default ProductDetails;
  