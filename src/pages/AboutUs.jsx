import Title from "../components/Title";
import OurStory from "../components/OurStory";
import Innovations from "../components/Innovations";
import ValuesSection from "../components/ValuesSection";
import CarrierLink from "../components/CarrierLink";
import Factory from "../components/Factory";

export default function AboutUs() {
  return (
    <>
      <Title />
      <section className="about-content">
        <OurStory />
        <Innovations />
        <ValuesSection />
        <Factory />
        <CarrierLink />
      </section>
    </>
  );
}
