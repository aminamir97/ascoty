import "../styles/globals.css";
import NavBar from "../components/navBar/index";
import Footer from "../components/footer/index";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  if (typeof Node === "function" && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      // debugger;
      if (child.parentNode !== this) {
        if (console) {
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    };
  }
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
