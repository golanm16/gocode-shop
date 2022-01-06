import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import Todos from "./components/Todos/Todos";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, [products]);

  const categories = [
    "All",
    ...products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];
  const [chosenCategory, setChosenCategory] = useState("All");

  return (
    <>
      <Header categories={categories} setChosenCategory={setChosenCategory} />
      <Products products={products} chosenCategory={chosenCategory} />
    </>
  );
  // return (
  //   <Todos />
  // )
}

export default App;
