import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import CartItemContext from "./contexts/CartItemContext";
import ProductContext from "./contexts/ProductContext";

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

  // use states
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [sortBy, setSortBy] = useState("none");

  const categories = [
    "All",
    ...products
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index),
  ];

  // only once, after first render code
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  // functions:
  const addToCart = (id) => {
    let item = cartItems.find((ci) => ci.id === id);
    if (!item) {
      setCartItems([
        ...cartItems,
        (item = {
          id,
          count: 1,
        }),
      ]);
    } else {
      incrementCartItem(id);
    }
  };
  const removeFromCart = (id) => {
    setCartItems([...cartItems.filter((ci) => ci.id !== id)]);
  };
  const incrementCartItem = (id) => {
    let item = cartItems.find((ci) => ci.id === id);
    item.count++;
    setCartItems([...cartItems]);
  };
  const decrementCartItem = (id) => {
    let item = cartItems.find((ci) => ci.id === id);
    item.count--;
    if (item.count > 0) {
      setCartItems([...cartItems]);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <>
      <Header
        sortValues={sortValues}
        categories={categories}
        setSortBy={setSortBy}
        setChosenCategory={setChosenCategory}
      />
      <ProductContext.Provider value={{ addToCart }}>
        <Products
          products={products}
          sortBy={sortBy}
          chosenCategory={chosenCategory}
        />
      </ProductContext.Provider>
      <CartItemContext.Provider
        value={{ removeFromCart, incrementCartItem, decrementCartItem }}
      >
        <Cart
          products={products}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          incrementCartItem={incrementCartItem}
          decrementCartItem={decrementCartItem}
        />
      </CartItemContext.Provider>
    </>
  );
}

export default App;
