import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Navbar } from "../components";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
