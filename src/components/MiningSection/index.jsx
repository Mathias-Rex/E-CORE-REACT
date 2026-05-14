// import { useEffect, useState } from "react";

import {MiningList as ships} from "./ships";
import  CommerceCard from "../CommerceCard";

export default function MiningShips() {
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
        <h1>Bányászati járművek</h1>
        <p>Speciális felszerelések aszteroida és bolygó bányászathoz</p>
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
