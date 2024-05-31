import React from "react";
import Navbar from "../Navbar";
import { BudgetProvider } from "@components/atoms/BudgetContext";
import Footer from "../Footer";

const AppShell = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BudgetProvider>
        <div className="mt-14">{children}</div>
      </BudgetProvider>
      <Footer />
    </div>
  );
};

export default AppShell;
