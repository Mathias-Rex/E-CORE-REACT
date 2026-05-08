export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="index.html">
            <img src="logo.png" alt="E-CORE logo" />
            E-CORE
          </a>
        </div>

        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="nav-menu" id="nav-menu">
          <li>
            <a href="index.html" className="active">
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
