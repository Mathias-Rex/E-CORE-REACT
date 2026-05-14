import ValueCard from "../ValueCard";
import { valuesData } from "./valuesData";

export default function ValuesCards() {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '4rem', marginBottom: '2rem', color: '#00d9ff'}}>
        Értékeink
      </h2>

      <div className="values-grid">
        {valuesData.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </>
  );
}