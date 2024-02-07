import React from "react";

export default function VideoPlayerComponent({ videoId }) {
  return (
    <div className=" w-full h-[490px] rounded-lg my-2">
      <div className="">
        <iframe
          className=" w-full aspect-video rounded-xl  "
          src={`https://www.youtube.com/embed/${videoId}?si=jpHHW8Z84z5H-XPR`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
