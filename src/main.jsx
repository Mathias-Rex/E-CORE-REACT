import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./layout/index.jsx";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Commercial from "./pages/Commercial";
import Research from "./pages/Research";
import Mining from "./pages/Mining";
import Carrier from "./pages/Carrier.jsx";
import Battleships from "./pages/Battleships";

import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="research" element={<Research />} />
          <Route path="mining" element={<Mining />} />
          <Route path="careers" element={<Carrier />} />
          <Route path="battleships" element={<Battleships />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
