import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./Components/features/reposSlice";
import backgroundReducer from "./Components/features/Introduction/backgroundSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);
