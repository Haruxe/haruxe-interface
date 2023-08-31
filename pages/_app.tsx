import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="max-w-[1000px] place-content-center place-items-center mx-auto px-6 mb-[6rem]">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
