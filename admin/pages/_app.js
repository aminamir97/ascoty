import SignIn from "./login";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MiniDrawer from ".";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const [auth, setAuth] = useState();
  React.useEffect(() => {
    setAuth(localStorage.getItem("auth"));
  }, [auth]);

  function handleLoging() {
    setAuth(true);
  }
  function handleLogOut() {
    setAuth(false);
    localStorage.clear();
  }

  return (
    <>
      {auth ? (
        <MiniDrawer
          children={<Component logout={handleLogOut} {...pageProps} />}
        />
      ) : (
        <SignIn fx={handleLoging} />
      )}
    </>
  );
}

export default MyApp;
