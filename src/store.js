import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./Components/features/reposSlice";
import { reposResponse } from "./Components/features/reposSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(reposResponse);
