import { carrierValues } from "./carrierValues";
import ValueCard from "../ValueCard";

export default function carrierCards() {
  console.log("carrierValues", carrierValues);
  return (
    <section className="features" style={{ padding: "4rem 20px;" }}>
      <div className="container">
        <h2>Miért dolgozz az E-CORE-nál?</h2>
        <div className="feature-grid">
          {carrierValues.map((values) => (
            <ValueCard key={values.id} values={values} />
          ))}
        </div>
      </div>
    </section>
  );
}
