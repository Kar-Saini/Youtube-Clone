import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showDesc, hideDesc } from "../../utils/slices/showDescriptionSlice";

export default function ChannelDetails() {
  const dispatch = useDispatch();
  const showDescription = useSelector((store) => store.showDescription.show);
  const currentPlayingVideoData = useSelector(
    (store) => store.currentVideo.currentVideo.payload[0]
  );
  return (
    <div className=" w-full px-2">
      <div className=" text-2xl font-bold ">
        {currentPlayingVideoData.snippet.title}
      </div>
      <div className="flex py-1 ">
        <div className="flex  w-full  justify-between">
          <div className="flex w-1/2 ">
            <div>Logo</div>
            <div className="mx-2">
              <div>{currentPlayingVideoData.snippet.channelTitle}</div>
              <div>Subs</div>
            </div>
          </div>
          <div className="flex w-1/2 justify-between text-md">
            <div className="hover:cursor-pointer">
              <button className="bg-gray-500 px-2 py-1 rounded-l-full">
                👍🏿likes {currentPlayingVideoData.statistics.likeCount}
              </button>
              <button className="bg-gray-500 px-2 py-1 border-l-2 border-black rounded-r-full">
                👎🏿
              </button>
            </div>
            <div className="hover:cursor-pointer text-md px-2 rounded-full ">
              Share
            </div>
            <div className="hover:cursor-pointer rounded-full ">Download</div>
            <div className="hover:cursor-pointer rounded-full ">...</div>
          </div>
        </div>
      </div>
      <div className=" rounded-lg py-2 hover:bg-gray-100 ">
        <div className="w-full">
          {currentPlayingVideoData.snippet.publishedAt.split("T")[0]}
        </div>
        <div className="w-full flex">
          <div>
            <div>{currentPlayingVideoData.statistics.viewCount} views</div>
          </div>
          <div className="mx-2 font-semibold">
            {!showDescription && (
              <button
                className="hover:bg-gray-200 rounded-md"
                onClick={() => {
                  dispatch(showDesc());
                }}
              >
                more ...
              </button>
            )}
          </div>
        </div>
        {showDescription && (
          <div>
            <div className="w-full">
              {currentPlayingVideoData.snippet.description}
            </div>
            <button
              onClick={() => {
                dispatch(hideDesc());
              }}
              className="font-semibold hover:bg-gray-200 rounded-md"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
