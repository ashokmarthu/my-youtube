import React, { useEffect, useState } from "react";
import HamburgerIcon from "../svg/HamburgerIcon.svg";
import YouTubeIcon from "../svg/YouTubeIcon.svg";
import SearchIcon from "../svg/SearchIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const searchCache = useSelector((state) => state.search.searchResults);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchResults = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
    else {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        getSearchResults();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 fixed bg-white w-full h-20">
      <div className="flex col-span-1 justify-between">
        <div className="hover:bg-gray-300 hover:rounded-full p-1">
          <img
            className="h-8 cursor-pointer"
            alt="hamburger"
            src={HamburgerIcon}
            onClick={handleToggleMenu}
          />
        </div>
        <div>
          <img className="h-8" alt="y-icon" src={YouTubeIcon} />
        </div>
      </div>
      <div className="col-span-10 px-40">
        <div className="flex w-full">
          <input
            className="rounded-lg border border-gray-400 rounded-l-full focus:outline-none py-2 pr-2 pl-4 w-full"
            placeholder="Search"
            value={searchQuery}
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-600 rounded-r-full p-1.5 text-center bg-gray-100">
            <img alt="y-icon" src={SearchIcon} />
          </button>
        </div>
        {suggestions.length > 0 && (
          <div className="flex shadow-2xl bg-white rounded-md mt-2 cursor-pointer">
            <ul className="py-2 w-full">
              {suggestions.map((i, index) => (
                <div className="flex justify-start items-center px-3 py-1 hover:bg-gray-200">
                  <img alt="y-icon" src={SearchIcon} className="w-4 h-4" />
                  <li key={index + Math.random()} className="pl-1">
                    {i}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
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
