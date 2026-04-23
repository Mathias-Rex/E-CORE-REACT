import ProductCard from "../ProductCard";

import { products } from "./products";

export default function ProductsSection() {
  return (
    <section id="products" class="products">
      <div class="container">
        <h2>Termékkategóriák</h2>

        <div class="product-categories">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
