import FeatureCard from "../FeatureCard";
import iconInnovation from "../../assets/images/icon-innovation.jpg";
import iconReliability from "../../assets/images/icon-reliability.jpg";
import iconCustomization from "../../assets/images/icon-customization.jpg";

export default function FeaturesSection() {
  const features = [
    {
      image: iconInnovation,
      title: "Élvonalbeli technológia",
      description:
        "Legmodernebb hajtóművek és navigációs rendszerek, amelyek újradefiniálják az űrutazást.",
    },
    {
      image: iconReliability,
      title: "Megbízhatóság",
      description:
        "Több mint 25 év tapasztalat az űriparban, több ezer sikeres küldetéssel.",
    },
    {
      image: iconCustomization,
      title: "Testreszabhatóság",
      description:
        "Minden járművünk az Ön egyedi igényeihez igazítható moduláris rendszerrel.",
    },
  ];

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
