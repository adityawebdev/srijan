import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import Pass from "../components/Pass";
export default function Layout({ children }) {
  return (
    <div className="bg-darkMaroon font-harry">
      <Head>
        <title>Srijan</title>
        <meta
          name="srijan"
          content="college annual fest du delhi university bcas"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=New+Rocker&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <main className="bg-darkMaroon">{children}</main>
      {/* <Pass /> */}
      <Footer />
    </div>
  );
}
