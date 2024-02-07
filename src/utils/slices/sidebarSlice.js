import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export default sidebarSlice.reducer;
export const { toggleSideBar } = sidebarSlice.actions;
