import { spacecrafts } from "../../mock_data/spacecrafts.js";

export default function CheckoutPage({ shipName }) {
  const ship = spacecrafts.find((ship) => ship.name === shipName);
  console.log(shipName);
  return (
    <section className="ship-detail">
      <div className="container">
        <div className="ship-header">
          <div className="ship-title-section">
            <h1>{shipName}</h1>
            <p className="ship-category">{ship.category}</p>
            <p className="ship-tagline">{ship.tagline}</p>
          </div>
          <div className="ship-content">
            <div className="ship-description">
              <h2>Áttekintés</h2>
              <p>{ship.description.overview}</p>
              <p>{ship.description.additional}</p>
              <h3>Főbb jellemzők</h3>
              <ul className="features-list">
                {ship.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h3>Alkalmazási területek</h3>
              <p>{ship.description.applications}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
