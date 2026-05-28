import { useParams } from "react-router";

import BattleshipsSection from "../components/BattleshipsSection";
import ShipCard from "../components/ShipCard";

import { spacecrafts } from "../mock_data/spacecrafts.js";

export default function Ships() {
  const { type } = useParams();
  console.log(type);

  const ships = spacecrafts.filter((ship) => ship.type === type);
  console.log(ships);

  return (
    <>
      {ships.length > 0 ? (
        <>
          <div className="product-header">
            <h1>Harcászati járművek</h1>
            <p>Védelmi és biztonsági célú űrjárművek</p>
          </div>
          <div className="container">
            <ul className="products-grid">
              {ships.map((ship) => (
                <ShipCard key={ship.id} ship={ship} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="product-header">
          <h1>{`Nincs ${type} jármű`}</h1>
            <p>Kérem válasszon a menüben található kategáriák közül!</p>
        </div>
      )}
    </>
  );
}
