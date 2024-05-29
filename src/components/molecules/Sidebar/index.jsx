import React from "react";
import { Link } from "react-router-dom";
import SidebarButton from "@components/atoms/SidebarButton";

const Sidebar = () => {
  return (
    <div className="w-1/5 p-4 bg-gray-100">
      <nav className="space-y-4">
        <Link to="/flooring">
          <SidebarButton label="Lantai" />
        </Link>
        <Link to="/paint">
          <SidebarButton label="Estimasi Cat" />
        </Link>
        <SidebarButton label="Estimasi Semen Lantai" />
        <SidebarButton label="Estimasi Semen Pondasi" />
        <SidebarButton label="Total Budget" />
        <SidebarButton label="Pindah" />
      </nav>
    </div>
  );
};

export default Sidebar;
