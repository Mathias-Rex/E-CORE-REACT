
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
import OurStory from "../components/OurStory";
import Innovations from "../components/Innovations";
import ValuesCards from "../components/ValuesCards";
import Factory from "../components/Factory";

export default function AboutUs() {
  return (
    <div className="app-shell">
      <Navbar />
      <Title />
      <section className="about-content">
        <OurStory />
        <Innovations />
        <ValuesCards />
        <Factory />
      </section>
      <Footer />
    </div>
  );
};
