import { Product } from "../Product/Product";
import "./Products.css";
const strCompare = (str1, str2) => (str1 < str2 ? -1 : str1 > str2 ? 1 : 0);
const sortFunc = {
  none: (products) => "",
  best: (products) => products.sort((a, b) => b.rating.rate - a.rating.rate),
  "ab-up": (products) => products.sort((a, b) => strCompare(a.title, b.title)),
  "ab-down": (products) =>
    products.sort((a, b) => strCompare(b.title, a.title)),
  "price-up": (products) => products.sort((a, b) => a.price - b.price),
  "price-down": (products) => products.sort((a, b) => b.price - a.price),
};

let counter = 0;

export const Products = ({ products, chosenCategory, sortBy }) => {
  console.log(
    `rerndering products ${counter++} \nfilter:${chosenCategory} \nsort:${sortBy}`
  );
  sortFunc[sortBy](products);

  return (
    <section className="products">
      {products
        .filter((p) =>
          chosenCategory !== "All" ? p.category === chosenCategory : true
        )
        .map(({ id, title, price, image, rating }) => (
          <Product
            key={`product-${id}`}
            id={id}
            title={title}
            price={price}
            image={image}
            rating={rating}
          />
        ))}
    </section>
  );
};
