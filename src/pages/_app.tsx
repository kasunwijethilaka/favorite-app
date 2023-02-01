import Header from "@/components/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
