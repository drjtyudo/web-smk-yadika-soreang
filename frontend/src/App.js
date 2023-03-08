import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.js";
import Guru from "./pages/Guru.js";
import Home from "./pages/Home.js";
import Ak from "./pages/jurusan/Ak.js";
import Hotel from "./pages/jurusan/Hotel.js";
import Rpl from "./pages/jurusan/Rpl.js";
import Profile from "./pages/Profile.js";
import "./styles/style.css";
import "./styles/responsive.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="guru" element={<Guru />} />
        <Route path="rpl" element={<Rpl />} />
        <Route path="akutansi" element={<Ak />} />
        <Route path="hotel" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
