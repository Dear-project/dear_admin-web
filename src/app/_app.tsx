import Image from "next/image";
import { AppProps } from "next/app";
import GlobalStyle from "src/style/global"

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;