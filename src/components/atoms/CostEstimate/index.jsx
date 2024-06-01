import React, { useEffect } from "react";
import { useBudget } from "../BudgetContext";
import CatEstimateDetails from "../CatEstimateDetail";
import FloorEstimateDetails from "../FloorEstimateDetail";
import FloorCementEstimateDetails from "../FloorCementEstimateDetail";
import FoundationCementEstimateDetails from "../FooundationCementDetail";
import WallEstimateDetails from "../WallEstimateDetail";

const CostEstimate = () => {
  const {
    totalBudget,
    setTotalBudget,
    semenLantaiEstimate,
    lantaiEstimate,
    pondasiEstimate,
    dindingestimate,
    catEstimate,
  } = useBudget();

  const estimates = {
    dinding: dindingestimate,
    pondasi: pondasiEstimate,
    lantai: lantaiEstimate,
    cat: catEstimate,
  };

  const totalCost =
    Object.values(estimates).reduce((acc, curr) => {
      const cost =
        typeof curr === "object" && curr !== null
          ? curr.cost
          : parseInt(curr, 10) || 0;
      return acc + cost;
    }, 0) + (semenLantaiEstimate?.cost || 0);

  useEffect(() => {
    setTotalBudget(totalCost);
  }, [totalCost, setTotalBudget]);

  return (
    <>
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Estimasi Biaya
      </h2>
      <table className="w-full max-w-3xl mx-auto mt-4 bg-white border border-collapse table-auto">
        <thead>
          <tr>
            <th className="px-2 py-1 text-left border sm:px-4 sm:py-2">
              Kategori
            </th>
            <th className="px-2 py-1 text-right border sm:px-4 sm:py-2">
              Biaya
            </th>
          </tr>
        </thead>
        <tbody>
          <FloorEstimateDetails />
          <FloorCementEstimateDetails />
          <FoundationCementEstimateDetails />
          <CatEstimateDetails />
          <WallEstimateDetails />
        </tbody>
        <tfoot>
          <tr>
            <td className="px-2 py-1 font-semibold border sm:px-4 sm:py-2">
              Total
            </td>
            <td className="px-2 py-1 font-semibold text-right border sm:px-4 sm:py-2">
              Rp {Number(totalBudget).toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CostEstimate;
