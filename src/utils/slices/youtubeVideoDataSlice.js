import { createSlice } from "@reduxjs/toolkit";

const youtubeVideoDataSlice = createSlice({
  name: "youtubeVideoData",
  initialState: {},
  reducers: {
    addPopularVideos: (state, action) => {
      state.popularVideos = action;
    },
  },
});

export default youtubeVideoDataSlice.reducer;
export const { addPopularVideos } = youtubeVideoDataSlice.actions;
