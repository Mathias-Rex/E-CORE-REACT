import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function AboutUs() {
  return (
    <div className="app-shell">
      <Navbar />
      <Title />
      <section className="about-content"></section>
      <Footer />
    </div>
  );
}
