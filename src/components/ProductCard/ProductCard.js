import './ProductCard.css';
export const ProductCard = ({ id, title, price, image }) => (
    <div className="product-card">
        <div className="product-image">
            <img src={image} alt={title} />
        </div>
        <div className="product-info">
            <h5>{title}</h5>
            <h6>{`${price} ₪`}</h6>
        </div>
    </div>
);