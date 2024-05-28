import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/home-pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/wilayah" element={<Wilayah />} />
          <Route path="/bantuan" element={<Bantuan />} />
          <Route path="/kalkulasi" element={<Kalkulasi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
