import { useEffect, useState } from "react";

// import {ResearchList as ships} from "./ships";
import  CommerceCard from "../CommerceCard";

export default function ResearchShips() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function fetchShips() {
      const res = await fetch("https://ecore-backend-production.up.railway.app/api/spacecrafts/type/research");
      const data = await res.json();
      setShips(data);
    }
    fetchShips();
  }, []);

  return (
    <>
      <div className="product-header">
        <h1>Kutatási járművek</h1>
        <p>Megbízható és hatékony kutatási megoldások az űrben</p>
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
