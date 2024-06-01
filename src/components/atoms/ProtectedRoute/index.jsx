import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import LoadingScreen from "@components/atoms/LoadingScreen";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      Swal.fire({
        icon: "info",
        title: "Login Diperlukan",
        text: "Silakan login terlebih dahulu untuk memulai proyek Anda.",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/signin";
        }
      });
    } else {
      setIsAuthenticated(true);
    }

    setIsChecking(false); // Indicate that the check is complete
  }, []);

  if (isChecking) {
    return <LoadingScreen />; // Show loading screen while checking authentication
  }

  if (!isAuthenticated) {
    return null; // Prevent rendering if not authenticated
  }

  return children;
};

export default ProtectedRoute;
