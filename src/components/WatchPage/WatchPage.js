import React from "react";
import VideoPlayerComponent from "./VideoPlayerComponent";
import ChannelDetails from "./ChannelDetails";
import VideoSuggestion from "./VideoSuggestions";
import { useParams } from "react-router-dom";
import CommentContainer from "./comments/CommentContainer";
import LiveChat from "./livechat/LiveChat";

export default function WatchPage() {
  const { videoId } = useParams();

  return (
    <div className="flex w-5/6 mx-auto ">
      <div className="w-3/4">
        <VideoPlayerComponent videoId={videoId} />
        <ChannelDetails />
        <CommentContainer />
      </div>
      <div>
        <LiveChat />
        <VideoSuggestion />
      </div>
    </div>
  );
}
