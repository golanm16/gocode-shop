import "./CartItem.css";
import not_found_image from "../../assets/not_found.png";
import { useContext } from "react";
import CartItemContext from "../../contexts/CartItemContext";

export const CartItem = ({ id, title, price, image, count }) => {
  const { removeFromCart, incrementCartItem, decrementCartItem } =
    useContext(CartItemContext);
  const calculatedPrice = price * count;
  return (
    <div className="cart-item">
      <button
        onClick={() => {
          removeFromCart(id);
        }}
      >
        remove
      </button>

      <img src={image ?? not_found_image} alt="product" />
      <h4>{title}</h4>
      <h5>{calculatedPrice}</h5>
      <label>{count}</label>
      <button
        onClick={() => {
          incrementCartItem(id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrementCartItem(id);
        }}
      >
        -
      </button>
    </div>
  );
};
