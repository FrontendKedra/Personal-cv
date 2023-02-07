import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { getBackgroundFromLocalStorage } from "./backgroundLocalStorage";

interface InitialState {
  darkBackground: boolean;
}

const initialState: InitialState = {
  darkBackground: getBackgroundFromLocalStorage(),
};

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    toggleBackgroundColor: (state) => {
      state.darkBackground = !state.darkBackground;
    },
  },
});

export const { toggleBackgroundColor } = backgroundSlice.actions;

export const selectBackgroundState = (state: RootState) => state.background;
export const selectDarkBackground = (state: RootState) =>
  selectBackgroundState(state).darkBackground;

export default backgroundSlice.reducer;
