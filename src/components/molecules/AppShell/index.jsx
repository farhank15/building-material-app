import React from "react";
import Navbar from "../Navbar";
import { BudgetProvider } from "@components/atoms/BudgetContext";
import Footer from "../Footer";

const AppShell = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BudgetProvider>
        <div className="pt-16">{children}</div>
      </BudgetProvider>
      <Footer />
    </div>
  );
};

export default AppShell;
