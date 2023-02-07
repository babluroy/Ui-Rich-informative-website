import { useEffect, useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/globals.css";
import AOS from "aos";
import Layout from "../Components/Layout";
import Cursor_Pointer from "@/Components/Cursor_Pointer";
import { CursorContext } from "@/context/CursorContext";

export default function App({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  const [cursorStyle, setCursorStyle] = useState({
    width: 20,
    height: 20,
    color: "#000",
    mixBlendMode: "difference",
  });

  useEffect(() => {
    AOS.init();
    checkIsMobile();
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <>
      <Head>
        <title>UI-RICH</title>
        <meta name="description" content="UI-RICH" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
        <Layout>
          {!isMobile && <Cursor_Pointer />}
          <Component {...pageProps} />
        </Layout>
      </CursorContext.Provider>
    </>
  );
}
