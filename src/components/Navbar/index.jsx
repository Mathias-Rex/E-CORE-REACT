import { NavLink } from "react-router";

export default function Navbar({ page, setPage }) {
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
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/commercial" className={({ isActive }) => (isActive ? "active" : "")}>
              Kereskedelem
            </NavLink>
          </li>
          <li>
            <NavLink to="/mining" className={({ isActive }) => (isActive ? "active" : "")}>
              Bányászat
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" className={({ isActive }) => (isActive ? "active" : "")}>
              Kutatás
            </NavLink>
          </li>
          <li>
            <NavLink to="/battleships" className={({ isActive }) => (isActive ? "active" : "")}>
              Harcászat
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>
              Rólunk
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
