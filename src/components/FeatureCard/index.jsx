export default function FeatureCard({image, title, description}) {
  return (
    <div class="feature-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
