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
          {ship?.specs?.mining?.chamber && (
            <li>
              <strong>Tárolókapacitás:</strong> {ship?.specs?.mining?.chamber}
            </li>
          )}
          {ship?.specs?.mining?.extraction && (
            <li>
              <strong>Bányászati kapacitás:</strong> {ship?.specs?.mining?.extraction}
            </li>
          )}
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
          {ship?.specs?.performance?.maxSpeed && (
            <li>
              <strong>Max. sebesség:</strong> {ship?.specs?.performance?.maxSpeed}
            </li>
          )}
          {ship?.specs?.performance?.range && (
            <li>
              <strong>Hatótáv:</strong> {ship?.specs?.performance?.range}
            </li>
          )}
          {ship?.specs?.crew?.crew && (
            <li>
              <strong>Legénység:</strong> {ship?.specs?.crew?.crew}
            </li>
          )}
          {ship?.specs?.system?.crew && (
            <li>
              <strong>Legénység:</strong> {ship?.specs?.system?.crew}
            </li>
          )}
          {ship?.specs?.capacity?.gasExtraction && (
            <li>
              <strong>Kitermelési kapacitás:</strong> {ship?.specs?.capacity?.gasExtraction}
            </li>
          )}
          {ship?.specs?.capacity?.storage && (
            <li>
              <strong>Tárolókapacitás:</strong> {ship?.specs?.capacity?.storage}
            </li>
          )}
          {ship?.specs?.mining?.depth && (
            <li>
              <strong>Fúrási mélység:</strong> {ship?.specs?.mining?.depth}
            </li>
          )}
          {ship?.specs?.mining?.extract && (
            <li>
              <strong>Bányászati kapacitás:</strong> {ship?.specs?.mining?.extract}
            </li>
          )}
        </ul>
      </li>
    </a>
  );
}
