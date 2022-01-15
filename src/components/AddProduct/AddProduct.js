import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./AddProduct.css";

export const AddProduct = ({ categories }) => {
  categories = ["select category", ...categories, "add new category"];
  let product = useRef({});

  useEffect(() => {
    product.current = {
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }, []);

  const [disableCategoryInput, setDisableCategoryInput] = useState(true);
  const [category, setCategory] = useState("");
  const [infoText, setInfoText] = useState("");

  return (
    <div className="AddProduct">
      <h6>add a new product</h6>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          product.current.title = e.target.value;
        }}
      ></input>
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          product.current.description = e.target.value;
        }}
      ></input>
      <input
        type="number"
        placeholder="price"
        onChange={(e) => {
          product.current.price = e.target.value;
        }}
      ></input>
      <select
        onChange={(e) => {
          if (infoText === "must select or add new category") {
            setInfoText("");
          }
          if (e.target.value === "add new category") {
            setCategory("");
            setDisableCategoryInput(false);
            return;
          } else {
            setDisableCategoryInput(true);
          }
          if (e.target.value === "select category") {
            setInfoText("must select or add new category");
            return;
          }
          product.current.category = e.target.value;
          setCategory(e.target.value);
        }}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="category"
        disabled={disableCategoryInput}
        onChange={(e) => {
          product.current.category = e.target.value;
          setCategory(e.target.value);
        }}
        value={category}
      ></input>
      <input
        type="text"
        placeholder="image url"
        onChange={(e) => {
          product.current.image = e.target.value;
        }}
      ></input>
      <h6>{infoText}</h6>
      <button
        onClick={() => {
          if (!product.category) console.log(product.current);
        }}
      >
        add product
      </button>
    </div>
  );
};
