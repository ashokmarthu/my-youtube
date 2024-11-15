import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const res = await fetch(VIDEOS_API);
      const data = await res.json();
      setVideos(data.items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-wrap justify-start">
      {videos.length &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
