import React, { useState } from "react";
import { useBudget } from "@components/atoms/BudgetContext";
import PaintIcon from "@assets/images/cat.svg"; // Pastikan jalur gambar sesuai dengan lokasi sebenarnya

const PaintEstimate = () => {
  const { setCatEstimate } = useBudget();
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [doorHeight, setDoorHeight] = useState("");
  const [doorWidth, setDoorWidth] = useState("");
  const [doorCount, setDoorCount] = useState("");
  const [windowHeight, setWindowHeight] = useState("");
  const [windowWidth, setWindowWidth] = useState("");
  const [windowCount, setWindowCount] = useState("");
  const [paintPrice, setPaintPrice] = useState(""); // Rupiah per 2.5 liters
  const [color, setColor] = useState("Grey");

  const paintCoverage = 10; // m² per liter, fixed value as per example

  const wallArea = height && width ? height * width : 0;
  const doorArea =
    doorHeight && doorWidth ? doorHeight * doorWidth * doorCount : 0;
  const windowArea =
    windowHeight && windowWidth ? windowHeight * windowWidth * windowCount : 0;
  const totalPaintArea = Math.max(0, wallArea - (doorArea + windowArea));
  const litersRequired = totalPaintArea / paintCoverage;

  // Calculate total cost considering paint packaging
  const paintPackageVolume = 2.5; // liters per package
  const totalPackagesRequired = Math.ceil(litersRequired / paintPackageVolume);
  const estimatedCost = totalPackagesRequired * paintPrice;

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleDoorHeightChange = (e) => {
    setDoorHeight(e.target.value);
  };

  const handleDoorWidthChange = (e) => {
    setDoorWidth(e.target.value);
  };

  const handleDoorCountChange = (e) => {
    setDoorCount(e.target.value);
  };

  const handleWindowHeightChange = (e) => {
    setWindowHeight(e.target.value);
  };

  const handleWindowWidthChange = (e) => {
    setWindowWidth(e.target.value);
  };

  const handleWindowCountChange = (e) => {
    setWindowCount(e.target.value);
  };

  const handlePaintPriceChange = (e) => {
    setPaintPrice(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleAddEstimate = () => {
    setCatEstimate({ cost: estimatedCost, color });
  };

  const colorMap = {
    Grey: "#B0B0B0",
    Putih: "#FFFFFF",
    Biru: "#0000FF",
    Coklat: "#A52A2A",
    Merah: "#FF0000",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md md:p-6">
      <h2 className="mb-6 text-xl font-bold md:text-2xl">Estimasi Cat</h2>
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <label className="block text-gray-700">Tinggi (m)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={height}
              onChange={handleHeightChange}
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
            <label className="block text-gray-700">
              Pintu (Jumlah, Tinggi x Lebar) (m)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={doorCount}
                onChange={handleDoorCountChange}
                placeholder="1"
              />
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={doorHeight}
                onChange={handleDoorHeightChange}
                placeholder="0"
              />
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={doorWidth}
                onChange={handleDoorWidthChange}
                placeholder="0"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Jendela (Jumlah, Tinggi x Lebar) (m)
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={windowCount}
                onChange={handleWindowCountChange}
                placeholder="1"
              />
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={windowHeight}
                onChange={handleWindowHeightChange}
                placeholder="0"
              />
              <input
                type="number"
                className="w-1/3 p-2 border rounded"
                value={windowWidth}
                onChange={handleWindowWidthChange}
                placeholder="0"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Harga Cat (Rupiah per 2.5 liter)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={paintPrice}
              onChange={handlePaintPriceChange}
              placeholder="350000"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Warna Cat</label>
            <select
              className="w-full p-2 border rounded"
              value={color}
              onChange={handleColorChange}
            >
              <option value="Grey">Grey</option>
              <option value="Putih">Putih</option>
              <option value="Biru">Biru</option>
              <option value="Coklat">Coklat</option>
              <option value="Merah">Merah</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img src={PaintIcon} alt="Paint Icon" className="w-24 mb-4 md:w-36" />
          <div className="text-center">
            <div
              className="w-24 h-24 m-auto mb-4 rounded-lg shadow-lg shadow-slate-600 md:w-36"
              style={{ backgroundColor: colorMap[color] }}
            ></div>
            <div className="mb-4 text-2xl font-bold md:text-4xl">
              {litersRequired.toFixed(2)} Liter
            </div>
            <div className="text-xl text-gray-700 md:text-2xl">
              Estimasi Biaya
            </div>
            <div className="text-xl font-bold text-green-500 md:text-2xl">
              Rp {estimatedCost.toLocaleString()}
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

export default PaintEstimate;
