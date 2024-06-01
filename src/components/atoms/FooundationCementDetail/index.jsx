import React from "react";
import { useBudget } from "../BudgetContext";
import { FaEllipsisV } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FoundationCementEstimateDetails = () => {
  const { pondasiEstimate, removePondasiEstimate } = useBudget();

  const handleViewDetails = (estimate, index) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
      title: `Detail Semen Pondasi`,
      html: `
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;text-align:left;">
            <thead>
              <tr style="background-color:#f2f2f2;">
                <th style="border:1px solid #ddd;padding:8px;">Biaya</th>
                <th style="border:1px solid #ddd;padding:8px;">Jumlah Pak</th>
                <th style="border:1px solid #ddd;padding:8px;">Waktu</th>
                <th style="border:1px solid #ddd;padding:8px;">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid #ddd;padding:8px;">Rp ${Number(
                  estimate.cost
                ).toLocaleString()}</td>
                <td style="border:1px solid #ddd;padding:8px;">${
                  estimate.numberOfPacks
                }</td>
                <td style="border:1px solid #ddd;padding:8px;">${
                  estimate.timestamp
                }</td>
                <td style="border:1px solid #ddd;padding:8px;text-align:center;">
                  <button id="delete-button-${index}" class="text-white bg-red-500 rounded px-2 py-1 hover:bg-red-700">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      showConfirmButton: true,
      confirmButtonText: "OK",
      showCloseButton: false,
      focusConfirm: false,
      didOpen: () => {
        document
          .getElementById(`delete-button-${index}`)
          .addEventListener("click", () => {
            removePondasiEstimate(index);
            MySwal.close();
          });
      },
    });
  };

  if (!pondasiEstimate) {
    return null; // or return some placeholder UI
  }

  return (
    <tr>
      <td className="px-2 py-1 border sm:px-4 sm:py-2">
        Estimasi Semen Pondasi
      </td>
      <td className="px-2 py-1 text-right border sm:px-4 sm:py-2">
        Rp {Number(pondasiEstimate.cost).toLocaleString()}
        <button
          className="ml-2 text-gray-600 hover:text-gray-800"
          onClick={() => handleViewDetails(pondasiEstimate, 0)} // Assuming single estimate for simplicity
        >
          <FaEllipsisV />
        </button>
      </td>
    </tr>
  );
};

export default FoundationCementEstimateDetails;
