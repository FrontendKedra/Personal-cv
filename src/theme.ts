export interface ThemeFields {
  [index: string]: string;
}

export interface Theme {
  sharedColors: ThemeFields;
  breakpoints: ThemeFields;
  borderRadius: ThemeFields;
}

const sharedFields: Theme = {
  sharedColors: {
    violet: "#090a3305",
    darkerViolet: "#090a3308",
    anakiwa: "#8cc2ff",
  },
  breakpoints: {
    small: "480px",
    medium: "767px",
    large: "921px",
  },
  borderRadius: {
    small: "4px",
    medium: "30px",
    large: "50px",
  },
};

export const lightTheme = {
  ...sharedFields,
  colors: {
    iron: "#d1d5da",
    gray: "#d1d5da4d",
    lightGray: "#d1d5da4d",
    slateGray: "#6e7e91",
    mineShaft: "#252525",
    white: "#ffffff",
    buttonWhite: "#ffffff",
    scienceBlue: "#0366d6",
    lightBlue: "#0366d633",
    melrose: "#9999FF",
    mercury: "#e5e5e5",
  },
  shadows: {
    hoverShadow:
      "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF",
  },
};

export const darkTheme = {
  ...sharedFields,
  colors: {
    iron: "#E5E5E5",
    gray: "#d1d5da1a",
    lightGray: "#d0d0d073",
    slateGray: "#ffffff",
    mineShaft: "#ffffff",
    white: "#363636b8",
    buttonWhite: "#252525",
    scienceBlue: "#2188FF",
    lightBlue: "#0366d680",
    melrose: "#2196f342",
    mercury: "#252525",
  },
  shadows: {
    repositoryShadow: "0px -2px 50px #090a3305, 0px 16px 58px #090a3308",
    hoverShadow:
      "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE",
  },
};
