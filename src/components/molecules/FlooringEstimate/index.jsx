import React, { useState } from "react";

const FlooringEstimate = () => {
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(10);
  const [price, setPrice] = useState(50000);
  const tileSize = 0.3; // 30 cm in meters

  const roomArea = length * width; // in m²
  const tileArea = tileSize * tileSize; // in m²
  const numberOfTiles = Math.ceil(roomArea / tileArea);
  const estimatedCost = numberOfTiles * price;

  const handleLengthChange = (e) => {
    const value = e.target.value;
    setLength(value === "" ? "" : Number(value));
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    setWidth(value === "" ? "" : Number(value));
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-4/5 p-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold">Estimasi Lantai</h2>
          <div className="flex space-x-6">
            <div className="w-1/2">
              <div className="mb-4">
                <label className="block text-gray-700">
                  Panjang Ruangan (m)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={length}
                  onChange={handleLengthChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Lebar Ruangan (m)</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={width}
                  onChange={handleWidthChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Lantai</label>
                <select className="w-full p-2 border rounded">
                  <option>Keramik</option>
                  <option>Marmer</option>
                  <option>Kayu</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Ukuran Keramik (cm)
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value="30 x 30"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Harga Keramik (Rupiah / pcs)
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-1/2">
              <div className="text-center">
                <div className="mb-4 text-4xl font-bold">
                  {numberOfTiles} Keramik
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

export default FlooringEstimate;
