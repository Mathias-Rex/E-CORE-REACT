export default function Navbar({ page, setPage }) {
  const handleLinkClick = (e, pageName) => {
    e.preventDefault();
    setPage(pageName);
  };

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
            <a
              href="index.html"
              className={page === "home" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="pages/commercial/index.html"
              className={page === "commercial" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "commercial")}
            >
              Kereskedelem
            </a>
          </li>
          <li>
            <a
              href="pages/mining/index.html"
              className={page === "mining" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "mining")}
            >
              Bányászat
            </a>
          </li>
          <li>
            <a
              href="pages/research/index.html"
              className={page === "research" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "research")}
            >
              Kutatás
            </a>
          </li>
          <li>
            <a
              href="pages/battleships/index.html"
              className={page === "battleships" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "battleships")}
            >
              Harcászat
            </a>
          </li>
          <li>
            <a
              href="pages/aboutus/index.html"
              className={page === "aboutus" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "aboutus")}
            >
              Rólunk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
