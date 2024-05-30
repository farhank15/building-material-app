import BgHero from "@assets/images/Hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="hero-overlay bg-opacity-65"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold md:text-5xl lg:text-7xl">
            Welcome to BuildPro
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg">
            Your one-stop solution for all building material needs. From
            flooring and paint estimates to comprehensive project budgeting, we
            make your construction projects seamless and efficient.
          </p>
          <Link
            to="/kalkulasi"
            className="text-sm btn btn-primary md:text-base lg:text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
