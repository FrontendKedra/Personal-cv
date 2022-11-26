import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    reposState: { loading: true, success: false, error: false },
  },
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

export const {
  fetchReposResponse,
  setRepos,
  reposSuccess,
  reposError,
} = reposSlice.actions;

export const selectReposState = (state) => state.repos;
export const selectRepos = (state) => selectReposState(state).repos;
export const selectReposCurrentState = (state) => selectReposState(state).reposState;
export default reposSlice.reducer;
