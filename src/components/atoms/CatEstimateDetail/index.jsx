import React from "react";
import { useBudget } from "../BudgetContext";
import { FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CatEstimateDetails = () => {
  const { catEstimate, removeCatEstimate } = useBudget();

  const handleViewDetails = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `Detail Cat`,
      html: `
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;text-align:left;">
            <thead>
              <tr style="background-color:#f2f2f2;">
                <th style="border:1px solid #ddd;padding:8px;">Biaya</th>
                <th style="border:1px solid #ddd;padding:8px;">Liter</th>
                <th style="border:1px solid #ddd;padding:8px;">Waktu</th>
                <th style="border:1px solid #ddd;padding:8px;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              ${catEstimate.history
                .map(
                  (estimate, index) => `
                  <tr>
                    <td style="border:1px solid #ddd;padding:8px;">Rp ${estimate.cost.toLocaleString()}</td>
                    <td style="border:1px solid #ddd;padding:8px;">${estimate.litersRequired?.toFixed(
                      2
                    )} L</td>
                    <td style="border:1px solid #ddd;padding:8px;">${
                      estimate.timestamp
                    }</td>
                    <td style="border:1px solid #ddd;padding:8px;text-align:center;">
                      <button id="delete-button-${index}" class="text-white bg-red-500 rounded px-2 py-1 hover:bg-red-700">Delete</button>
                    </td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "OK",
      showCloseButton: false,
      focusConfirm: false,
      didOpen: () => {
        catEstimate.history.forEach((estimate, index) => {
          document
            .getElementById(`delete-button-${index}`)
            .addEventListener("click", () => {
              removeCatEstimate(index);
              MySwal.close();
            });
        });
      },
    });
  };

  return (
    <tr>
      <td className="px-2 py-1 border sm:px-4 sm:py-2">Estimasi Cat</td>
      <td className="px-2 py-1 text-right border sm:px-4 sm:py-2">
        Rp{" "}
        {catEstimate.history
          .reduce((acc, est) => acc + est.cost, 0)
          .toLocaleString()}
        <button
          className="ml-2 text-gray-600 hover:text-gray-800"
          onClick={handleViewDetails}
        >
          <FaEllipsisV />
        </button>
      </td>
    </tr>
  );
};

export default CatEstimateDetails;
