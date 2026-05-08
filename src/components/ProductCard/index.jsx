export default function ProductCard({ title, description, image, link }) {
  return (
    <a href={link} className="category-card">
      <div className="product-image-container">
        <canvas className="smoke-canvas"></canvas>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
