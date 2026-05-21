// import { useEffect, useState } from "react";

import {BattleList as ships} from "./ships";
import  ShipCard from "../ShipCard";

export default function BattleShips() {
  // const [ships, setShips] = useState([]);

  // useEffect(() => {
  //   async function fetchShips() {
  //     const res = await fetch("https://ecore-backend-production.up.railway.app/api/spacecrafts/type/commercial");
  //     const data = await res.json();
  //     setShips(data);
  //   }
  //   fetchShips();
  // }, []);

  return (
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
  );
}
