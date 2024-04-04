import Image from "next/image";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "src/style/global";
import { theme } from "src/style/them";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
  );
}

export default MyApp;
