import React from "react";

const TotalCost = ({ total }) => {
  return (
    <tr className="font-bold">
      <td className="px-4 py-2 border">Total</td>
      <td className="px-4 py-2 text-right text-green-500 border">
        {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </td>
    </tr>
  );
};

export default TotalCost;
