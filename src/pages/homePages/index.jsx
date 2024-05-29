import React from "react";
import { useParams } from "react-router-dom";
import FlooringEstimate from "@components/molecules/FlooringEstimate";
import PaintEstimate from "@components/molecules/PaintEstimate";
import HomeContent from "@components/templates/Home"; // Konten default untuk halaman Home

const Home = () => {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case "flooring":
        return <FlooringEstimate />;
      case "paint":
        return <PaintEstimate />;
      default:
        return <HomeContent />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Home;
