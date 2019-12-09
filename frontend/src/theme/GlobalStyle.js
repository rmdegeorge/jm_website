import {createGlobalStyle} from 'styled-components';


export default const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
`;

const size = {
  mobile: '425px',
  tablet: '768px',
  computer: '1024px',
};
export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  computer: `(min-width: ${size.computer})`,
};
export const theme = {
  primary1: {
    200: '#A9C1B8',
    300: '#7EA295',
    400: '#538372',
    500: '#2b7561',
    600: '#20503F',
    700: '#183C2F',
    800: '#10281F'
  },
  primary2: {
    200: '#DEEDE5',
    300: '#CEE4D9',
    400: '#BEDBCC',
    500: '#b8d9cc',
    600: '#8BA899',
    700: '#687E73',
    800: '#45544C'
  },
  secondary1: {
    200: '#D9B5BB',
    300: '#C6909A',
    400: '#B36B78',
    500: '#b55c6b',
    600: '#803845',
    700: '#602A34',
    800: '#401C22',
  },
  secondary2: {
    200: '#F2DEE3',
    300: '#ECCED5',
    400: '#E6BEC7',
    500: '#e8bdc4',
    600: '#B38B94',
    700: '#86686F',
    800: '#59454A'
  },
  functional1: {
    '#fafafa'
  },
  functional2: {
    '#c7c7c7'
  },
  functional3: {
    '#7A7979'
  },
  functional4: {
    '#5c5c5c'
  },
}
