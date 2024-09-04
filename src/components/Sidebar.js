import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 w-40 shadow-md">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Live</li>
        <li>Videos</li>
      </ul>

      <ul className="pt-5">
        <h1 className="font-bold">Subscription</h1>
        <li>Sports</li>
        <li>Music</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
