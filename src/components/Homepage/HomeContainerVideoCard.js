import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCurrentVideo } from "../../utils/slices/currentlyPlayingVideoSlice";

export default function HomeContainerVideoCard({
  title,
  views,
  channelTitle,
  thumbnail,
  videoId,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videoData = useSelector((store) => store.popularVideos);
  return (
    <div className="m-3 h-[300px] w-[380px] hover:cursor-pointer  rounded-md">
      <div
        className="my-1 w-full mx-1 hover:scale-105"
        onClick={() => {
          const clickedVideo = videoData.popularVideos.payload.items.filter(
            (ele) => ele.id === videoId
          );
          dispatch(addCurrentVideo(clickedVideo));
          navigate(`/watch/${videoId}`);
        }}
      >
        <img src={thumbnail.url} alt="" className="rounded-lg" />
      </div>
      <div className="flex ">
        <div>
          <div className="font-semibold">
            {title.length > 72 ? title.substring(0, 72) + "..." : title}
          </div>
          <div className=" text-gray-800">{channelTitle}</div>
          <div>
            {views > 1000000
              ? `${Math.round(views / 1000000)}M`
              : views > 1000
              ? `${Math.ceil(views / 1000)}K`
              : `${views}`}{" "}
            views
          </div>
        </div>
      </div>
    </div>
  );
}
