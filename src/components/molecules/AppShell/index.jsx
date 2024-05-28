import React from "react";
import Navbar from "../Navbar";

const AppShell = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default AppShell;
