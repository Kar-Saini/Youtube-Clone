import React from "react";
import { useSelector } from "react-redux";
import VideoSuggestionCard from "./VideoSuggestionCard";

export default function VideoSuggestions() {
  const popularVideosData = useSelector((store) => store.popularVideos);

  return (
    <div className="mx-2 ">
      {popularVideosData.popularVideos.payload.items.map((ele) => (
        <VideoSuggestionCard
          key={ele.id}
          title={ele.snippet.title}
          views={ele.statistics.viewCount}
          channelTitle={ele.snippet.channelTitle}
          thumbnail={ele.snippet.thumbnails?.medium}
          videoId={ele.id}
        />
      ))}
    </div>
  );
}
