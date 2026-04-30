
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Factory";
import OurStory from "../components/OurStory";
import Innovations from "../components/Innovations";
import Cards from "../components/Cards";
import Factory from "../components/Factory";

export default function AboutUs() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Title />
        <OurStory />
        <Innovations />
        <Cards />
        <Factory />
      </main>
      <Footer />
    </div>
  );
};
