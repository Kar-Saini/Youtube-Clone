import { createSlice } from "@reduxjs/toolkit";

const currentlyPlayingVideoSlice = createSlice({
  name: "currentlyPlayingVideo",
  initialState: {},
  reducers: {
    addCurrentVideo: (state, action) => {
      state.currentVideo = action;
    },
    removeCurrentVideo: (state) => {
      return {};
    },
  },
});

export default currentlyPlayingVideoSlice.reducer;
export const { addCurrentVideo, removeCurrentVideo } =
  currentlyPlayingVideoSlice.actions;
