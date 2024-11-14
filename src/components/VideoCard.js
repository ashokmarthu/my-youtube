import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="p-2 m-2 w-72 h-80 shadow-sm">
      <img src={thumbnails?.high?.url} alt="thumbnail"  className="rounded"/>
      <ul>
        <li className="font-bold py-2 truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
