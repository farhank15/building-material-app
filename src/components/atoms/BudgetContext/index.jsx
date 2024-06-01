import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [totalBudget, setTotalBudget] = useState(0);

  const [semenLantaiEstimate, setSemenLantaiEstimate] = useState({
    cost: 0,
    history: [],
  });

  const [lantaiEstimate, setLantaiEstimate] = useState({
    cost: 0,
    history: [],
  });

  const [pondasiEstimate, setPondasiEstimate] = useState({
    cost: 0,
    history: [],
  });

  const [dindingEstimate, setDindingEstimate] = useState({
    cost: 0,
    history: [],
  });

  const [catEstimate, setCatEstimate] = useState({
    cost: 0,
    color: "",
    history: [],
  });

  const addCatEstimate = (newEstimate) => {
    setCatEstimate((prevEstimate) => ({
      cost: prevEstimate.cost + newEstimate.cost,
      color: newEstimate.color,
      history: [...prevEstimate.history, newEstimate],
    }));
  };

  const removeCatEstimate = (index) => {
    setCatEstimate((prevEstimate) => {
      const newHistory = prevEstimate.history.filter((_, i) => i !== index);
      const newCost = newHistory.reduce((acc, curr) => acc + curr.cost, 0);
      return {
        ...prevEstimate,
        cost: newCost,
        history: newHistory,
      };
    });
  };

  const addSemenLantaiEstimate = (newEstimate) => {
    setSemenLantaiEstimate((prevEstimate) => ({
      cost: prevEstimate.cost + newEstimate.cost,
      history: [...prevEstimate.history, newEstimate],
    }));
  };

  const removeSemenLantaiEstimate = (index) => {
    setSemenLantaiEstimate((prevEstimate) => {
      const newHistory = prevEstimate.history.filter((_, i) => i !== index);
      const newCost = newHistory.reduce((acc, curr) => acc + curr.cost, 0);
      return {
        ...prevEstimate,
        cost: newCost,
        history: newHistory,
      };
    });
  };

  const addPondasiEstimate = (newEstimate) => {
    setPondasiEstimate((prevEstimate) => ({
      cost: prevEstimate.cost + newEstimate.cost,
      history: [...prevEstimate.history, newEstimate],
    }));
  };

  const removePondasiEstimate = (index) => {
    setPondasiEstimate((prevEstimate) => {
      const newHistory = prevEstimate.history.filter((_, i) => i !== index);
      const newCost = newHistory.reduce((acc, curr) => acc + curr.cost, 0);
      return {
        ...prevEstimate,
        cost: newCost,
        history: newHistory,
      };
    });
  };

  const addLantaiEstimate = (newEstimate) => {
    setLantaiEstimate((prevEstimate) => ({
      cost: prevEstimate.cost + newEstimate.cost,
      history: [...prevEstimate.history, newEstimate],
    }));
  };

  const removeLantaiEstimate = (index) => {
    setLantaiEstimate((prevEstimate) => {
      const newHistory = prevEstimate.history.filter((_, i) => i !== index);
      const newCost = newHistory.reduce((acc, curr) => acc + curr.cost, 0);
      return {
        ...prevEstimate,
        cost: newCost,
        history: newHistory,
      };
    });
  };

  const addDindingEstimate = (newEstimate) => {
    setDindingEstimate((prevEstimate) => ({
      cost: prevEstimate.cost + newEstimate.cost,
      history: [...prevEstimate.history, newEstimate],
    }));
  };

  const removeDindingEstimate = (index) => {
    setDindingEstimate((prevEstimate) => {
      const newHistory = prevEstimate.history.filter((_, i) => i !== index);
      const newCost = newHistory.reduce((acc, curr) => acc + curr.cost, 0);
      return {
        ...prevEstimate,
        cost: newCost,
        history: newHistory,
      };
    });
  };

  return (
    <BudgetContext.Provider
      value={{
        totalBudget,
        setTotalBudget,
        semenLantaiEstimate,
        addSemenLantaiEstimate,
        removeSemenLantaiEstimate,
        lantaiEstimate,
        addLantaiEstimate,
        removeLantaiEstimate,
        pondasiEstimate,
        addPondasiEstimate,
        removePondasiEstimate,
        dindingEstimate,
        addDindingEstimate,
        removeDindingEstimate,
        catEstimate,
        addCatEstimate,
        removeCatEstimate,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
