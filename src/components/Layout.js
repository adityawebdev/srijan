import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import Pass from "../components/Pass";
export default function Layout({ children }) {
  return (
    <div className="bg-darkMaroon">
      <Head>
        <title>Srijan</title>
        <meta
          name="srijan"
          content="college annual fest du delhi university bcas"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <main className="bg-darkMaroon">{children}</main>
      <Pass />
      <Footer />
    </div>
  );
}
