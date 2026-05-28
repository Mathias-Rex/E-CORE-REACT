import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./layout/index.jsx";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Carrier from "./pages/Carrier.jsx";
import Ships from "./pages/Ships";
import ShipDetail from "./pages/ShipDetail.jsx";

import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ships/:type" element={<Ships />} />
          <Route path="ship-detail/:id" element={<ShipDetail />} />
          <Route path="careers" element={<Carrier />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
