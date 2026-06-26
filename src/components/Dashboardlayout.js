import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import "../assets/styles/Dashboardlayout.css"; // ملف التنسيق المشترك
import Callus from "./Callus";

function DashboardLayout({ isNavOpen }) {
  return (
    <div className="dashboard-container">
      <div className={`dashboard-layout ${isNavOpen ? "nav-is-open" : ""}`}>
        <div className="main-content-page">
          <Outlet />
        </div>
        <SideNav isOpen={isNavOpen} />
      </div>
      <Callus />
    </div>
  );
}

export default DashboardLayout;
