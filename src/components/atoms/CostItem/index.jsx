import React from "react";

const CostItem = ({ label, value }) => {
  return (
    <tr>
      <td className="px-4 py-2 border">{label}</td>
      <td className="px-4 py-2 text-right border">
        {value.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </td>
    </tr>
  );
};

export default CostItem;
