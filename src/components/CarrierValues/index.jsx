import { CarrierCard } from "../../data/carrierValues";
import {CarrierCards} from "../CarrierCard";

export default function carrierCards() {
  return (
    <section style={{padding: "0 20px 5rem"}}>
      <div className="container">
        <h2 style={{
          textAlign: "center",
          color: "var(--color-primary);",
          marginBottom: "3rem;",
        }}>
          Miért dolgozz az E-CORE-nál?
        </h2>
        <div style={{display: "grid", gap: "1.5rem", maxWidth: "900px", margin: "0 auto"}}>
          {CarrierCards.map((carrierCard) => (
            <CarrierCard key={carrierCard.id} job={carrierCard} />
          ))}
        </div>
      </div>
    </section>
  );
}