import ProductCard from "../ProductCard";
import { products } from "./products";

export default function ProductsSection() {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Termékkategóriák</h2>

        <div className="product-categories">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
