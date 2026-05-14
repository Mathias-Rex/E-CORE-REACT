export default function ValueCard({ title, description }) {
  return (
        <div className="value-card">
          <h4>{title}</h4>
          <p>
            {description}
          </p>
        </div>
  );
}
