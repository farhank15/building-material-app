import React from "react";
import Navbar from "../Navbar";

const AppShell = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">{children}</div>
    </div>
  );
};

export default AppShell;
