import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: {
    'html, body': {
      padding: 0,
      margin: 0,
      fontFamily: 'Noto Sans, sans-serif',
    },
    '*': {
      boxSizing: 'border-box',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: 'Noto Sans, sans-serif',
    },
  },
};

const colors = {
  black: '#33333',
};

const theme = extendTheme({
  styles,
  colors,
  config,
  components,
});

export default theme;
