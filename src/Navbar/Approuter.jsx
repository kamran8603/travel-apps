import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Approuter = () => {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Approuter;
