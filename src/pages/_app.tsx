import '@fontsource/open-sans';
import '@fontsource/inter';
import '@fontsource/cutive-mono';
import 'focus-visible/dist/focus-visible';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from '../theme';
import { MediaContextProvider } from '@components/MediaContext';

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MediaContextProvider>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </MediaContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
