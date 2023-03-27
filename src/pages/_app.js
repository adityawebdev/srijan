import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-[100vh] bg-darkMaroon flex justify-center items-center">
          <HashLoader color={"#ce9530"} loading={loading} size={80} />
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
