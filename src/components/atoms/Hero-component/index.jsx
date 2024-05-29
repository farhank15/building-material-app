import React from "react";
import BgHero from "@assets/images/Hero.webp";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          <h1 className="mb-5 text-5xl md:text-5xl lg:text-7xl font-bold">
            Welcome to BuildPro
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg">
            Your one-stop solution for all building material needs. From
            flooring and paint estimates to comprehensive project budgeting, we
            make your construction projects seamless and efficient.
          </p>
          <button className="btn btn-primary text-sm md:text-base lg:text-lg">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
