import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../slices/sidebarSlice";
import popularVideosReducer from "../slices/youtubeVideoDataSlice";
import currentlyPlaingVideoReducer from "../slices/currentlyPlayingVideoSlice";
import showDescriptionReducer from "../slices/showDescriptionSlice";
import suggestedSearchReducer from "../slices/suggestedSearchSlice";
import liveChatMsgsReducer from "../slices/liveChatSlice";
const appStore = configureStore({
  reducer: {
    sideBar: sideBarReducer,
    popularVideos: popularVideosReducer,
    currentVideo: currentlyPlaingVideoReducer,
    showDescription: showDescriptionReducer,
    suggestedSearch: suggestedSearchReducer,
    liveChatMsgs: liveChatMsgsReducer,
  },
});
export default appStore;
