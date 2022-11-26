import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    reposState: { loading: false, success: false, error: false },
  },
  reducers: {
    fetchReposResponse: () => {},
    setRepos: (state, { payload }) => {
      state.repos = payload;
    },
    reposLoading: ({ reposState }) => {
      reposState.loading = true;
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
  reposLoading,
  reposSuccess,
  reposError,
} = reposSlice.actions;

export const selectReposState = (state) => state.repos;
export const selectRepos = (state) => selectReposState(state).repos;
export default reposSlice.reducer;
