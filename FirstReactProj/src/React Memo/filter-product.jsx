import { useEffect, useMemo, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((item) => {
        console.log(item);
        setProduct(item);
      });
  }, []);

  let filteredProduct = useMemo(() => {
    // if (!search) {
    //   console.log("fhdskjfhk");
    //   return product;
    // }
    // console.log("fsdjfkjlhds");
    const finalFilter = product.filter(
      (val) => val.title.toLowerCase().search(search.toLowerCase()) !== -1
    );
    console.log("fhkdshfkjash", finalFilter);
    return finalFilter;
  }, [search, product]);

  const showData = () => {
    return filteredProduct.map((item, index) => {
      return (
        <div key={index}>
          <div>
            <img src={item.image} alt="" height={200} width={200} />
          </div>
          <p>{item.title}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div>{showData()}</div>
    </div>
  );
};
export default Product;
