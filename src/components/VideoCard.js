import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-1 m-2 w-80 shadow-sm rounded-lg">
      <img
        src={thumbnails?.standard?.url}
        alt="thumbnail"
        className="rounded-lg object-cover"
      />
      <ul>
        <li className="font-bold py-1 truncate">{title}</li>
        <li className="text-base font-medium">{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
