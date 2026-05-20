import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex overflow-x-hidden" style={{ background: "#0d0d0d", color: "#e5e2e1" }}>
      <Sidebar />
      <main className="flex-1 min-h-screen p-8" style={{ marginLeft: 180 }}>
        <Outlet />
      </main>
    </div>
  );
}
