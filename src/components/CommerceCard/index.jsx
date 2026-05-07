export default function CommerceCard({ship}) {
  console.log(ship);
  return (
    <a className="product-item">
      <div className="product-image-container">
        <canvas className="smoke-canvas"></canvas>
        <img src={ship.image} alt={ship.name} />
      </div>
      <li className="product-info">
        <h3>{ship.name}</h3>
        <p>{ship.description.overview}</p>
        <ul className="product-specs">
          {ship?.specs?.cargo?.space && (
            <li>
              <strong>Rakománytér:</strong> {ship?.specs?.cargo?.space}
            </li>
          )}
          {ship?.specs?.cargo?.capacity && (
            <li>
              <strong>Hűtő tér:</strong> {ship?.specs?.cargo?.capacity}
            </li>
          )}
          {ship?.specs?.capacity?.passengers && (
            <li>
              <strong>Utasok száma:</strong> {ship?.specs?.capacity?.passengers}
            </li>
          )}
          <li>
            <strong>Max. sebesség:</strong> {ship?.specs?.performance?.maxSpeed}
          </li>
          <li>
            <strong>Hatótáv:</strong> {ship?.specs.performance.range}
          </li>
          <li>
            <strong>Legénység:</strong> {ship?.specs?.crew?.crew}
          </li>
        </ul>
      </li>
    </a>
  );
}
