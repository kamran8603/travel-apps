import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { backgrounds } from "../data/data.jsx";
import "./approuter.css";

const Approuter = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const backgroundImage = backgrounds[currentPath] || backgrounds["/"];
  return (
    <div>
      <div className="overlay"></div>
      <div   className="app-layout"
        style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <Navbar />
      </div>
       <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Approuter;
