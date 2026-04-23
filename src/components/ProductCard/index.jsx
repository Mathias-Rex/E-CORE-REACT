export default function ProductCard({ title, description, image, link }) {
  return (
    <a href={link} class="category-card">
      <div class="product-image-container">
        <canvas class="smoke-canvas"></canvas>
        <img
          src={image}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
