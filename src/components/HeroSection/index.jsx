import heroImage from "../../assets/images/hero-spacecraft.jpg";

export default function HeroSection() {
  return (
    <header class="hero">
      <div id="particles-js"></div>

      <div class="hero-content">
        <h1>E-CORE Űrjárművek</h1>
        <p class="hero-subtitle">A jövő űrtechnológiája, ma</p>
        <p class="hero-description">
          Innovatív megoldások az űr meghódításához. Kereskedelmi, bányászati,
          kutatási és védelmi járművek tervezése és gyártása.
        </p>
        <a href="#products" class="cta-button">
          Fedezze fel járműveinket
        </a>
      </div>

      <div class="hero-image">
        <img src={heroImage} alt="E-Core űrjármű" />
      </div>
    </header>
  );
}
