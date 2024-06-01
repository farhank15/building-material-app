import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@pages/homePages";
import Katalog from "@pages/katalogPages";
import Wilayah from "@pages/wilayahPages";
import Bantuan from "@pages/bantuanPages";
import Kalkulasi from "@pages/kalkulasiPages";
import SignIn from "@pages/signinPages";
import Signup from "@pages/signupPages";
import LoadingScreen from "@components/atoms/LoadingScreen";
import ProtectedRoute from "@components/atoms/ProtectedRoute";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    handleRouteChange();
  }, [location]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/katalog" element={<Katalog />} />
      <Route path="/wilayah" element={<Wilayah />} />
      <Route path="/bantuan" element={<Bantuan />} />
      <Route
        path="/kalkulasi"
        element={
          <ProtectedRoute>
            <Kalkulasi />
          </ProtectedRoute>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
