import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: { liveChatMsgs: [] },
  reducers: {
    addLiveChatMsg: (state, action) => {
      state.liveChatMsgs.splice(10, 1);
      state.liveChatMsgs.unshift(action.payload);
    },
    deleteLiveChatMsg: (state) => {
      state.liveChatMsgs.length = 0;
    },
  },
});

export default liveChatSlice.reducer;
export const { addLiveChatMsg, deleteLiveChatMsg } = liveChatSlice.actions;
