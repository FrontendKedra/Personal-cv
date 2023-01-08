import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundFromLocalStorage } from "./backgroundLocalStorage";

const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    darkBackground: getBackgroundFromLocalStorage(),
  },
  reducers: {
    toggleBackgroundColor: (state) => {
      state.darkBackground = !state.darkBackground;
    },
  },
});

export const { toggleBackgroundColor } = backgroundSlice.actions;

export const selectBackgroundState = (state) => state.background;
export const selectDarkBackground = (state) =>
  selectBackgroundState(state).darkBackground;

export default backgroundSlice.reducer;
