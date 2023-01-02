import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./Components/features/reposSlice";
import { reposResponse } from "./Components/features/reposSaga";
import backgroundReducer from "./Components/features/Introduction/backgroundSlice"

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    background: backgroundReducer,
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(reposResponse);
