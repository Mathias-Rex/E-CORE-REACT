export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <a href="index.html">
            <img src="logo.png" alt="E-CORE logo" />
            E-CORE
          </a>
        </div>

        <div class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul class="nav-menu" id="nav-menu">
          <li>
            <a href="index.html" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="pages/commercial/index.html">Kereskedelem</a>
          </li>
          <li>
            <a href="pages/mining/index.html">Bányászat</a>
          </li>
          <li>
            <a href="pages/research/index.html">Kutatás</a>
          </li>
          <li>
            <a href="pages/battleships/index.html">Harcászat</a>
          </li>
          <li>
            <a href="pages/aboutus/index.html">Rólunk</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
