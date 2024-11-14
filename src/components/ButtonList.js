import React from "react";

const ButtonList = ({ id }) => {
  return (
    <div>
      <button className="px-5 py-2 bg-gray-200 rounded-lg text-nowrap">{id}</button>
    </div>
  );
};

export default ButtonList;
