const localStorageKey = "background";

export const saveBackgroundInLocalStorage = (backgroundState: boolean) =>
  localStorage.setItem(localStorageKey, JSON.stringify(backgroundState));

export const getBackgroundFromLocalStorage = (): boolean => {
  const item = localStorage.getItem(localStorageKey);
  return item === "string" ? JSON.parse(item) : false;
};
