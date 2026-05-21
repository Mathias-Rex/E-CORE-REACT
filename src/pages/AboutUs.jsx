import AboutUsTitle from "../components/AboutUsTitle";
import OurStory from "../components/OurStory";
import Innovations from "../components/Innovations";
import ValuesSection from "../components/ValuesSection";
import CarrierLink from "../components/CareersLink";
import Factory from "../components/Factory";

export default function AboutUs() {
  return (
    <>
      <AboutUsTitle />
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
