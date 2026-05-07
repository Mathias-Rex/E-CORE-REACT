import FeatureCard from "../FeatureCard";

import {features} from "./features";

export default function FeaturesSection() {
  return (
    <section className="features">
      <div className="container">
        <h2>Miért válassza az E-CORE-t?</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
