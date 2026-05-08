import { useEffect, useState } from "react";

// import {CommerceList as ships} from "../CommerceSection/ships";
import  CommerceCard from "../CommerceCard";

export default function CommerceShips() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function fetchShips() {
      const res = await fetch("https://ecore-backend-production.up.railway.app/api/spacecrafts/type/commercial");
      const data = await res.json();
      setShips(data);
    }
    fetchShips();
  }, []);

  return (
    <>
      <div className="product-header">
        <h1>Kereskedelmi járművek</h1>
        <p>Megbízható és hatékony szállítási megoldások az űrben</p>
      </div>
      <div className="container">
        <ul className="products-grid">
          {ships.map((ship) => (
            <CommerceCard key={ship.id} ship={ship} />
          ))}
        </ul>
      </div>
    </>
  );
}
