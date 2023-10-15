import { useEffect, useState } from "react";

const FilterMyEffect = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((item) => {
        setProduct(item);
        setFiltered(item);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const filteredData = product.filter((item) => {
      return item.title.toLowerCase().search(search.toLowerCase()) !== -1;
    });
    setFiltered(filteredData);
  }, [search]);

  const showProduct = () => {
    return filtered.map((data, index) => {
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
      <div>
        <input type="search" value={search} onChange={handleSearch} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {showProduct()}
      </div>
    </div>
  );
};
export default FilterMyEffect;
