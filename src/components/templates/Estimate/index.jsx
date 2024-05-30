import BudgetAmount from "@components/molecules/BudgetAmount";
import FloorCementEstimate from "@components/molecules/FloorCementEstimate";
import FlooringEstimate from "@components/molecules/FlooringEstimate";
import FoundationEstimate from "@components/molecules/FoundationEstimate";
import PaintEstimate from "@components/molecules/PaintEstimate";
import Sidebar from "@components/molecules/Sidebar";
import WallingEstimate from "@components/molecules/WallingEstimate";
import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("flooring");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden lg:flex-row">
      <Sidebar onSectionChange={handleSectionChange} />
      <div className="flex-1 p-4 overflow-auto md:p-8">
        {activeSection === "flooring" && <FlooringEstimate />}
        {activeSection === "paint" && <PaintEstimate />}
        {activeSection === "cementFloor" && <FloorCementEstimate />}
        {activeSection === "foundation" && <FoundationEstimate />}
        {activeSection === "walling" && <WallingEstimate />}
        {activeSection === "budget" && <BudgetAmount />}
      </div>
    </div>
  );
};

export default App;
