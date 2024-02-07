import { createSlice } from "@reduxjs/toolkit";

const suggestedSearchSlice = createSlice({
  name: "suggestedSearch",
  initialState: {},
  reducers: {
    addSuggestion: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default suggestedSearchSlice.reducer;
export const { addSuggestion } = suggestedSearchSlice.actions;
