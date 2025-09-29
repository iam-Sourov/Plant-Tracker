import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-base-100 p-6 overflow-y-auto">
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
};

export default DashboardLayout;
