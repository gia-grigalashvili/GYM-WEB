import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavigation from "../components/AdminPanel/AdminNavigation/AdminNavigation";
import AdminHeader from "../components/AdminPanel/Header/AdminHeader";
import AdminPanel from "../components/AdminPanel/AdminPanel";

export default function AdminLayout() {
  const isLogined = !!sessionStorage.getItem("adminLogin");

  return (
    <div className="bg-[#121212]">
      {isLogined ? (
        <div>
          <AdminHeader />
          <AdminNavigation />
          <Outlet />
        </div>
      ) : (
        <AdminPanel />
      )}
    </div>
  );
}
