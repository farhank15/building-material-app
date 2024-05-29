import React, { useState } from "react";

const PaintEstimate = () => {
  const [height, setHeight] = useState(4);
  const [width, setWidth] = useState(15);
  const [doorHeight, setDoorHeight] = useState(2);
  const [doorWidth, setDoorWidth] = useState(0.75);
  const [windowHeight, setWindowHeight] = useState(1.5);
  const [windowWidth, setWindowWidth] = useState(1.5);
  const [paintCoverage, setPaintCoverage] = useState(10); // m² per liter
  const [paintPrice, setPaintPrice] = useState(140000); // Rupiah per liter

  const wallArea = height * width;
  const doorArea = doorHeight * doorWidth;
  const windowArea = windowHeight * windowWidth;
  const totalPaintArea = wallArea - (doorArea + windowArea);
  const litersRequired = totalPaintArea / paintCoverage;
  const estimatedCost = litersRequired * paintPrice;

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeight(value === "" ? "" : Number(value));
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    setWidth(value === "" ? "" : Number(value));
  };

  const handleDoorHeightChange = (e) => {
    const value = e.target.value;
    setDoorHeight(value === "" ? "" : Number(value));
  };

  const handleDoorWidthChange = (e) => {
    const value = e.target.value;
    setDoorWidth(value === "" ? "" : Number(value));
  };

  const handleWindowHeightChange = (e) => {
    const value = e.target.value;
    setWindowHeight(value === "" ? "" : Number(value));
  };

  const handleWindowWidthChange = (e) => {
    const value = e.target.value;
    setWindowWidth(value === "" ? "" : Number(value));
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-4/5 p-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold">Estimasi Cat</h2>
          <div className="flex space-x-6">
            <div className="w-1/2">
              <div className="mb-4">
                <label className="block text-gray-700">Tinggi (m)</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={height}
                  onChange={handleHeightChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Lebar (m)</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={width}
                  onChange={handleWidthChange}
                />
              </div>
              <div className="flex mb-4 space-x-2">
                <div>
                  <label className="block text-gray-700">
                    Pintu (Tinggi x Lebar) (m)
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={doorHeight}
                      onChange={handleDoorHeightChange}
                    />
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={doorWidth}
                      onChange={handleDoorWidthChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mb-4 space-x-2">
                <div>
                  <label className="block text-gray-700">
                    Jendela (Tinggi x Lebar) (m)
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={windowHeight}
                      onChange={handleWindowHeightChange}
                    />
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      value={windowWidth}
                      onChange={handleWindowWidthChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <button className="w-full btn btn-primary">Hitung</button>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <div className="text-center">
                <div className="mb-4 text-4xl font-bold">
                  {litersRequired.toFixed(2)} Liter
                </div>
                <div className="text-2xl text-gray-700">Estimasi Biaya</div>
                <div className="text-2xl font-bold text-green-500">
                  Rp {estimatedCost.toLocaleString()}
                </div>
                <button className="mt-4 btn btn-primary">Tambah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintEstimate;
