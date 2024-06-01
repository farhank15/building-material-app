import React from "react";
import BgHero from "@assets/images/Hero.webp";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    const token = Cookies.get("token"); // Ensure this is the correct cookie name for your authentication token
    if (token) {
      navigate("/kalkulasi");
    } else {
      Swal.fire({
        icon: "info",
        title: "Login Diperlukan",
        text: "Silakan login terlebih dahulu untuk memulai proyek Anda.",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };

  return (
    <div
      className="min-h-screen hero"
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-7xl">
            Selamat Datang di BuildPro
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg">
            Solusi satu atap Anda untuk semua kebutuhan bahan bangunan. Dari
            perkiraan lantai dan cat hingga perencanaan anggaran proyek yang
            komprehensif, kami membuat proyek konstruksi Anda berjalan lancar
            dan efisien.
          </p>
          <button
            onClick={handleStartProject}
            className="text-sm btn btn-primary md:text-base lg:text-lg"
          >
            Rencanakan Proyekmu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
