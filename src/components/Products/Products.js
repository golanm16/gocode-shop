import { Product } from "../Product/Product";
import "./Products.css";

export const Products = ({ products, chosenCategory }) => {
  return (
    <section className="products">
      {products
        .filter((p) =>
          chosenCategory !== "All" ? p.category === chosenCategory : true
        )
        .map(({ id, title, price, image }) => (
          <Product
            key={`product-${id}`}
            id={id}
            title={title}
            price={price}
            image={image}
          />
        ))}
    </section>
  );
};
