const localStorageKey = "background";

export const saveBackgroundInLocalStorage = (backgroundState) =>
  localStorage.setItem(localStorageKey, JSON.stringify(backgroundState));

export const getBackgroundFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageKey)) || false;
