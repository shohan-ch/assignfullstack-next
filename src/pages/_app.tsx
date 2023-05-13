import MainLayout from "@/components/Layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      common: {
        white: "#FFFFFF",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}
