import React from "react";
import Sidebar from "./Sidebar";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <ButtonList />
    </div>
  );
};

export default Body;
