
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Factory";
import Tortenetunk from "../components/Tortenetunk";
import Innovacionk from "../components/Innovacionk";
import Cards from "../components/Cards";
import Factory from "../components/Factory/index copy";

export default function AboutUs() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">
        <Title />
        <Tortenetunk />
        <Innovacionk />
        <Cards />
        <Factory />
      </main>
      <Footer />
    </div>
  );
};
