import React, { useEffect } from "react";
import HomeContainerVideoCard from "./HomeContainerVideoCard";
import { YT_URL } from "../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../../utils/slices/youtubeVideoDataSlice";

export default function HomeContainer() {
  const popularVideosData = useSelector((store) => store.popularVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(YT_URL);
      const jsonData = await data.json();
      dispatch(addPopularVideos(jsonData));
    }
    fetchData();
  }, []);
  if (!popularVideosData.popularVideos) {
    return;
  }
  //console.log(popularVideosData.popularVideos.payload.items);
  return (
    <div className="h-full flex flex-wrap justify-normal ">
      {popularVideosData.popularVideos.payload.items.map((ele) => (
        <HomeContainerVideoCard
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
