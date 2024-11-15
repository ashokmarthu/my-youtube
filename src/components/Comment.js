import React from "react";

const Comment = ({ data }) => {
  console.log(data,"data")
  const { name, text } = data;
  return (
    <div className="flex items-center gap-2 p-2">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
