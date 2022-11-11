import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme({
    colors: {
      brand: {
        "50": "#f3f0ff",
        "100": "#f2f0ff",
        "200": "#d1ccff",
        "300": "#a9a3ff",
        "400": "#7f7aff",
        "500": "#7f7aff",
        "600": "#5d5dd9",
        "700": "#4448b3",
        "800": "#2e358c",
        "900": "#212866",
      },
    },
    fonts: {
      heading: `'Urbanist', sans-serif`,
      body: `'Urbanist', sans-serif`,
    },
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
