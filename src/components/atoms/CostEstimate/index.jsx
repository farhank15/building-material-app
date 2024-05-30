import React, { useEffect } from "react";
import { useBudget } from "../BudgetContext";
import CostItem from "../CostItem";
import TotalCost from "../TotalCost";

const CostEstimate = () => {
  const {
    totalBudget,
    setTotalBudget,
    semenLantaiEstimate,
    lantaiEstimate,
    pondasiEstimate,
    dindingEstimate,
    catEstimate,
  } = useBudget();
  const estimates = {
    dinding: dindingEstimate,
    pondasi: pondasiEstimate,
    semenLantai: semenLantaiEstimate,
    lantai: lantaiEstimate,
    cat: catEstimate.cost,
  };

  const totalCost = Object.values(estimates).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    setTotalBudget(totalCost);
  }, [totalCost, setTotalBudget]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-xl font-bold">Total Harga</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            <CostItem label="Estimasi Dinding" value={estimates.dinding} />
            <CostItem label="Estimasi Pondasi" value={estimates.pondasi} />
            <CostItem
              label="Estimasi Semen Lantai"
              value={estimates.semenLantai}
            />
            <CostItem label="Estimasi Lantai" value={estimates.lantai} />
            <CostItem label="Estimasi Cat" value={estimates.cat} />
            <tr>
              <td className="px-4 py-2 border">Warna Cat</td>
              <td className="px-4 py-2 text-right border">
                {catEstimate.color}
              </td>
            </tr>
            <TotalCost total={totalCost} />
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-red-500">*Harga belum termasuk pajak</p>
      <div className="mt-6 text-xl font-bold">
        Total Anggaran:
        <span className="text-green-500">
          {" "}
          Rp {totalBudget.toLocaleString()},00
        </span>
      </div>
    </div>
  );
};

export default CostEstimate;
