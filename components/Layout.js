import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import Events from "./Events";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Srijan</title>
        <meta
          name="srijan"
          content="college annual fest du delhi university bcas"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Events />
      <Footer />
    </>
  );
}
