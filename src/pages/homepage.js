import VideoCard from "../components/videoCard";
import React, { useState, useEffect } from "react";

function HomePage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://tokopedia-play.hop.sh/videos")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 ">
        {videos.map((video) => (
          <VideoCard
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
