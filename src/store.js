import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reposReducer from "./Components/features/reposSlice";
import backgroundReducer from "./Components/features/Introduction/backgroundSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    background: backgroundReducer,
    repos: reposReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
