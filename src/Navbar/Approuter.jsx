
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
    <div
      className="app-layout"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay"></div>


      <Navbar />

   
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Approuter;
