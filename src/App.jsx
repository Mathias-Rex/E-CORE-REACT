import { useState } from "react";

import Layout from "./layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Commercial from "./pages/Commercial";
import Research from "./pages/Research";
import Mining from "./pages/Mining";
import Carrier from "./pages/Carrier.jsx";

import "./style.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <Layout page={page} setPage={setPage}>
      {page === "home" && <Home />}
      {page === "commercial" && <Commercial />}
      {page === "research" && <Research />}
      {page === "mining" && <Mining />}
      {/* {page === "battleships" && <Battleships />} */}
      {page === "aboutus" && <AboutUs />}
      {page === "carrier" && <Carrier />}
    </Layout>
  );
}
