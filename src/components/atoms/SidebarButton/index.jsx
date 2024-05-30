import React from "react";

const SidebarButton = ({ label, onClick, name, images, className }) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center p-2 bg-white border shadow-sm border-slate-300 shadow-slate-500 rounded-xl transition-transform transform hover:scale-105 ${className}`}
    >
      <img className="mb-2 w-14" src={images} alt={name} />
      <button className="p-1 text-xs font-medium text-left rounded font-poppins sm:text-sm">
        {label}
      </button>
    </div>
  );
};

export default SidebarButton;
