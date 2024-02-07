import { createSlice } from "@reduxjs/toolkit";

const showDescriptionSlice = createSlice({
  name: "showDescription",
  initialState: {
    show: false,
  },
  reducers: {
    showDesc: (state) => {
      state.show = !state.show;
    },
    hideDesc: (state) => {
      state.show = !state.show;
    },
  },
});

export default showDescriptionSlice.reducer;
export const { showDesc, hideDesc } = showDescriptionSlice.actions;
