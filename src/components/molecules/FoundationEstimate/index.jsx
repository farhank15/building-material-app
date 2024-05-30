import { useBudget } from "@components/atoms/BudgetContext";
import React, { useState } from "react";
import CementIcon from "@assets/images/semenPondasi.svg"; // Pastikan jalur gambar sesuai dengan lokasi sebenarnya

const FoundationCementEstimate = () => {
  const { setSemenLantaiEstimate } = useBudget();
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [cementWeight, setCementWeight] = useState(40); // kg per sack

  const floorArea = length * width; // in square meters
  const cementNeededPerSqM = 10; // kg per square meter
  const totalCementNeeded = floorArea * cementNeededPerSqM; // total kg needed
  const numberOfSacks = Math.ceil(totalCementNeeded / cementWeight);
  const pricePerSack = cementWeight === 50 ? 70000 : 50000; // 70,000 IDR for 50 kg, 50,000 IDR for 40 kg
  const estimatedCost = numberOfSacks * pricePerSack;

  const handleLengthChange = (e) => {
    const value = e.target.value;
    setLength(value === "" ? "" : Number(value));
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    setWidth(value === "" ? "" : Number(value));
  };

  const handleCementWeightChange = (e) => {
    const value = e.target.value;
    setCementWeight(value === "" ? "" : Number(value));
  };

  const handleAddEstimate = () => {
    setSemenLantaiEstimate(estimatedCost);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md md:p-6">
      <h2 className="mb-6 text-xl font-bold md:text-2xl">
        Estimasi Semen Pondasi
      </h2>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="block text-gray-700">Panjang (m)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={length}
              onChange={handleLengthChange}
              placeholder="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Lebar (m)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={width}
              onChange={handleWidthChange}
              placeholder="0"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Berat Semen (kg/sak)</label>
            <select
              className="w-full p-2 border rounded"
              value={cementWeight}
              onChange={handleCementWeightChange}
            >
              <option value={40}>40 kg</option>
              <option value={50}>50 kg</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={CementIcon}
            alt="Cement Icon"
            className="w-24 mb-4 md:w-36"
          />
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold md:text-4xl">
              {numberOfSacks} Sak Semen
            </div>
            <div className="text-xl text-gray-700 md:text-2xl">
              Estimasi Biaya
            </div>
            <div className="text-xl font-bold text-green-500 md:text-2xl">
              Rp {isNaN(estimatedCost) ? 0 : estimatedCost.toLocaleString()}
            </div>
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={handleAddEstimate}
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCementEstimate;
