import { all } from "redux-saga/effects";
import { watchBackground } from "./Components/features/Introduction/backgroundSaga";
import { watchReposResponse } from "./Components/features/reposSaga";

export default function* rootSaga() {
  yield all([watchBackground(), watchReposResponse()]);
}
