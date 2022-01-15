import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";

export const Cart = ({ cartItems, products }) => {
  const emptyProduct = {
    title: "item not found",
    price: 0,
  };

  // get cart items data
  const itemsWithData = cartItems.map((ci) => {
    return {
      // get original product by id
      ...(products.find((prod) => prod.id === ci.id) ?? emptyProduct),
      // add cart item count
      count: ci.count,
    };
  });
  // react component
  return (
    <div className="Cart">
      <h2>Cart</h2>
      {itemsWithData.map(({ id, title, price, image, count }) => (
        <CartItem
          key={id}
          image={image}
          title={title}
          price={price}
          id={id}
          count={count}
        />
      ))}
      <h3>
        {cartItems.length > 0
          ? `final price: ${itemsWithData
              .map((item) => item.count * item.price)
              .reduce((p, c) => p + c)
              .toFixed(2)}`
          : "cart is empty"}
      </h3>
    </div>
  );
};
