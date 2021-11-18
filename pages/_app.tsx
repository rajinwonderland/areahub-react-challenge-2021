import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GlobalStyles, theme } from "../styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
