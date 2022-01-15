import "./Product.css";
import ProductContext from "../../contexts/ProductContext";
import { useContext } from "react";

export const Product = ({ id, title, price, image, rating }) => {
  const { addToCart } = useContext(ProductContext);
  return (
    <div
      className="product-card"
      onClick={() => {
        addToCart(id);
      }}
    >
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6 className="rating">{`rating: ${rating.rate}⭐ (${rating.count}🖊)`}</h6>
        <h6>{`${price} ₪`}</h6>
      </div>
    </div>
  );
};
