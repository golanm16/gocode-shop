import { ProductCard } from "../ProductCard/ProductCard";
import './Products.css'

export const Products = ({ products }) => (
    <section className="products">
        {products.map(
            ({ id, title, price, image }) => <ProductCard key={id} id={id} title={title} price={price} image={image} />
        )}
    </section>
);