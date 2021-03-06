import { createGlobalStyle } from "styled-components";

export const palette = {
  primary1: {
    two: "#A9C1B8",
    three: "#7EA295",
    four: "#538372",
    five: "#2b7561",
    six: "#20503F",
    seven: "#183C2F",
    eight: "#10281F"
  },
  primary2: {
    two: "#DEEDE5",
    three: "#CEE4D9",
    four: "#BEDBCC",
    five: "#b8d9cc",
    six: "#8BA899",
    seven: "#687E73",
    eight: "#45544C"
  },
  secondary1: {
    two: "#D9B5BB",
    three: "#C6909A",
    four: "#B36B78",
    five: "#b55c6b",
    six: "#803845",
    seven: "#602A34",
    eight: "#401C22"
  },
  secondary2: {
    two: "#F2DEE3",
    three: "#ECCED5",
    four: "#E6BEC7",
    five: "#e8bdc4",
    six: "#B38B94",
    seven: "#86686F",
    eight: "#59454A"
  },
  functional1: "#fafafa",
  functional2: "#c7c7c7",
  functional3: "#7A7979",
  functional4: "#5c5c5c"
};

const breakpoint = {
  mobile: "599px",
  tabletPortrait: "900px",
  tabletLandscape: "1200px",
  desktop: "1800px"
};
export const media = {
  mobile: `(max-width: ${breakpoint.mobile})`,
  tabletPortrait: `(min-width: ${breakpoint.mobile})`,
  tabletLandscape: `(min-width: ${breakpoint.tabletPortrait})`,
  desktop: `(min-width: ${breakpoint.tabletLandscape})`,
  desktopLarge: `(min-width: ${breakpoint.desktop})`
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  body {
    font-family: "Source Sans Pro", "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    background-color: ${palette.functional1}
  }
  * {
    box-sizing: border-box;
  }
`;

export const theme = {
  primary1: palette.primary1.five,
  primary2: palette.primary2.five,
  secondary1: palette.secondary1.five,
  secondary2: palette.secondary2.five,
  functional1: palette.functional1,
  functional2: palette.functional1,
  functional3: palette.functional1,
  functional4: palette.functional1,
  media
};

export default GlobalStyle;
