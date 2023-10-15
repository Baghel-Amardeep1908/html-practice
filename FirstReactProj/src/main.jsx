import ReactDOM from "react-dom/client";
import Parent from "./Pure Component/PreantComp";
import ClassComp from "./Pure Component/ClassComp";
import FuncComp from "./Pure Component/FuncComp";
//import Parent from "./props/Practice/2.Parent-Display";

// import MyEffect from "./useEffect/useEffect";
// import FilterMyEffect from "./useEffect/product-filter";
// import Parent from "./React Memo/parent-memo";
//import Product from "./React Memo/filter-product";
// import APICallingWithAsync from "./Promise/1.promise";
//import MyPromise from "./Promise/2.promise";
//import "./index.css";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./Router/Home.jsx";
// import Contact from "./Router/Contact.jsx";
// import About from "./Router/About.jsx";
// import Product from "./Router/Path Parameter/ProductList.jsx";
// import ProductDetails from "./Router/Path Parameter/ProductDetail.jsx";
// const myRouter = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/contact", element: <Contact /> },
//   { path: "/about", element: <About /> },

//   { path: "/products", element: <Product /> },
//   { path: "/product-details/:productId", element: <ProductDetails /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<RouterProvider router={myRouter} />
  // <Parent />
  <Parent />
);
