import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [semenLantaiEstimate, setSemenLantaiEstimate] = useState(0);
  const [lantaiEstimate, setLantaiEstimate] = useState(0);
  const [pondasiEstimate, setPondasiEstimate] = useState(0);
  const [dindingEstimate, setDindingEstimate] = useState(0);
  const [catEstimate, setCatEstimate] = useState({ cost: 0, color: "Grey" });

  return (
    <BudgetContext.Provider
      value={{
        totalBudget,
        setTotalBudget,
        semenLantaiEstimate,
        setSemenLantaiEstimate,
        lantaiEstimate,
        setLantaiEstimate,
        pondasiEstimate,
        setPondasiEstimate,
        dindingEstimate,
        setDindingEstimate,
        catEstimate,
        setCatEstimate,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
