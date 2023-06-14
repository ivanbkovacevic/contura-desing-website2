import "../styles/globals.scss";
import { ContextProvider } from "../context/context";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ContextProvider>
    //   <Layout>
    //     <Component {...pageProps} />
    //   </Layout>
    // </ContextProvider>
  );
}

export default MyApp;
