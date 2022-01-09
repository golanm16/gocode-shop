import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";

function App() {
  const sortValues = [
    { value: "none", title: "Featured-tbd" },
    { value: "best", title: "Best Selling" },
    { value: "ab-up", title: "Alphabetically, A-Z" },
    { value: "ab-down", title: "Alphabetically, Z-A" },
    { value: "price-up", title: "Price, low to high" },
    { value: "price-down", title: "Price, high to low" },
    { value: "none", title: "Date, new to old-tbd" },
    { value: "none", title: "Date, old to new-tbd" },
  ];
  const [products, setProducts] = useState([]);
  const categories = [
    "All",
    ...products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <>
      <Header
        sortValues={sortValues}
        categories={categories}
        setSortBy={setSortBy}
        setChosenCategory={setChosenCategory}
        set
      />
      <Products
        products={products}
        sortBy={sortBy}
        chosenCategory={chosenCategory}
      />
    </>
  );
}

export default App;
