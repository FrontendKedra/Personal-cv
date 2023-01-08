import { saveBackgroundInLocalStorage } from "./backgroundLocalStorage";
import { selectDarkBackground, toggleBackgroundColor } from "./backgroundSlice";
import { call, select, takeLatest } from "redux-saga/effects";

function* saveBackgroundInLocalStorageHandler() {
  const background = yield select(selectDarkBackground);
  yield call(saveBackgroundInLocalStorage, background);
}

export function* watchBackground() {
  yield takeLatest(
    toggleBackgroundColor.type,
    saveBackgroundInLocalStorageHandler
  );
}
