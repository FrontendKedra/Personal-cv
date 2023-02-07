import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface InitialState {
  repos: [];
  reposState: { loading: boolean; success: boolean; error: boolean };
}

const initialState: InitialState = {
  repos: [],
  reposState: { loading: true, success: false, error: false },
};

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    fetchReposResponse: () => {},
    setRepos: (state, { payload }) => {
      state.repos = payload;
    },
    reposSuccess: ({ reposState }) => {
      reposState.loading = false;
      reposState.success = true;
    },
    reposError: ({ reposState }) => {
      reposState.loading = false;
      reposState.success = false;
      reposState.error = true;
    },
  },
});

export const { fetchReposResponse, setRepos, reposSuccess, reposError } =
  reposSlice.actions;

export const selectReposState = (state: RootState) => state.repos;
export const selectRepos = (state: RootState) => selectReposState(state).repos;
export const selectReposCurrentState = (state: RootState) =>
  selectReposState(state).reposState;
export default reposSlice.reducer;
