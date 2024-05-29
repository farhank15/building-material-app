import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/homePages";
import Katalog from "@pages/katalogPages";
import Wilayah from "@pages/wilayahPages";
import Bantuan from "@pages/bantuanPages";
import Kalkulasi from "@pages/kalkulasiPages";
import SignIn from "@pages/signinPages";
import Signup from "@pages/signupPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="/katalog" element={<Katalog />} />
        <Route path="/wilayah" element={<Wilayah />} />
        <Route path="/bantuan" element={<Bantuan />} />
        <Route path="/kalkulasi" element={<Kalkulasi />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
