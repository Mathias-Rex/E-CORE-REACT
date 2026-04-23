import FeatureCard from "../FeatureCard";

import {features} from "./features";

export default function FeaturesSection() {
  return (
    <section class="features">
      <div class="container">
        <h2>Miért válassza az E-CORE-t?</h2>

        <div class="feature-grid">
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
