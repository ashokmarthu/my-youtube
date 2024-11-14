import React from "react";
import HamburgerIcon from "../svg/HamburgerIcon.svg";
import YouTubeIcon from "../svg/YouTubeIcon.svg";
import SearchIcon from "../svg/SearchIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 fixed bg-white w-full h-20">
      <div className="flex col-span-1 justify-between">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger"
          src={HamburgerIcon}
          onClick={handleToggleMenu}
        />
        <img className="h-8" alt="y-icon" src={YouTubeIcon} />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          className="rounded-lg w-2/4 text-lg border border-gray-400 rounded-l-full focus:outline-none pl-4"
          placeholder="Search"
          type="text"
        />
        <button className="border border-gray-600 rounded-r-lg p-1.5 text-center bg-gray-100">
          <img alt="y-icon" src={SearchIcon} />
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 rounded-sm"
          alt="user-icon"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        />
      </div>
    </div>
  );
};

export default Header;
