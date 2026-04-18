import "./style.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />

      <section id="products" class="products">
        <div class="container">
          <h2>Termékkategóriák</h2>

          <div class="product-categories">
            <a href="pages/commercial/index.html" class="category-card">
              <div class="product-image-container">
                <canvas class="smoke-canvas"></canvas>
                <img
                  src="assets/images/category-commerce.jpg"
                  alt="Kereskedelmi járművek"
                />
              </div>
              <h3>Kereskedelmi járművek</h3>
              <p>Hatékony szállítási megoldások bolygók és állomások között</p>
            </a>

            <a href="pages/mining/index.html" class="category-card">
              <div class="product-image-container">
                <canvas class="smoke-canvas"></canvas>
                <img
                  src="assets/images/category-mining.jpg"
                  alt="Bányászati járművek"
                />
              </div>
              <h3>Bányászati járművek</h3>
              <p>Speciális felszerelések aszteroida és bolygó bányászathoz</p>
            </a>

            <a href="pages/research/index.html" class="category-card">
              <div class="product-image-container">
                <canvas class="smoke-canvas"></canvas>
                <img
                  src="assets/images/category-research.jpg"
                  alt="Kutatási járművek"
                />
              </div>
              <h3>Kutatási járművek</h3>
              <p>Fejlett szenzorokkal felszerelt felfedező űrhajók</p>
            </a>

            <a href="pages/battleships/index.html" class="category-card">
              <div class="product-image-container">
                <canvas class="smoke-canvas"></canvas>
                <img
                  src="assets/images/category-combat.jpg"
                  alt="Harcászati járművek"
                />
              </div>
              <h3>Harcászati járművek</h3>
              <p>Védelmi és biztonsági célú űrjárművek</p>
            </a>
          </div>
        </div>
      </section>

      <section class="video-section">
        <div class="container">
          <h2>Tekintse meg gyártósorunkat működés közben</h2>
          <div class="video-container">
            <video
              id="factoryVideo"
              class="factory-video"
              autoplay
              muted
              loop
              playsinline
            >
              <source
                src="assets/videos/factory_forward_reverse.mp4"
                type="video/mp4"
              />
              A böngésző nem támogatja a videó lejátszást.
            </video>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h4>E-CORE Űrjárművek</h4>
              <p>Az űrutazás következő generációja</p>
            </div>

            <div class="footer-section">
              <h4>Kapcsolat</h4>
              <p>
                Email:&nbsp;
                <a href="mailto:ex.co.or.rre.en@gmail.com">
                  info@ecore-space.com
                </a>
              </p>
              <p>Tel: +36 70 724 3066</p>
              <p>
                HR:&nbsp;
                <a href="mailto:ex.co.or.rre.en@gmail.com">
                  karrier@ecore-space.com
                </a>
              </p>
            </div>

            <div class="footer-section">
              <h4>Gyors linkek</h4>
              <ul>
                <li>
                  <a href="pages/aboutus/index.html">Rólunk</a>
                </li>
                <li>
                  <a href="pages/carreers/index.html">Karrier</a>
                </li>
                <li>
                  <a href="#">Támogatás</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2026 E-CORE Űrjárművek. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
