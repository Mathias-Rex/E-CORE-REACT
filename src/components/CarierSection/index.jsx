import { jobs } from "./jobs";
import CarrierCard from "../CarrierCard";

export default function CarrierSection() {
  return (
    <section style={{padding: "0 20px 5rem"}}>
      <div className="container">
        <h2 style={{
          textAlign: "center",
          color: "var(--color-primary);",
          marginBottom: "3rem;",
        }}>
          Aktuális állásajánlatok
        </h2>
        <div style={{display: "grid", gap: "1.5rem", maxWidth: "900px", margin: "0 auto"}}>
          {jobs.map((job) => (
            <CarrierCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}