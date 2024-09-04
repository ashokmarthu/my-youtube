import React, { useEffect, useState } from "react";
import { VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

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
    <div className="flex flex-wrap">
      {videos.length &&
        videos.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  );
};

export default VideoContainer;
