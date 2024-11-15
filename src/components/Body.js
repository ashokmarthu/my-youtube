import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="flex px-2">
      {isMenuOpen && <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
