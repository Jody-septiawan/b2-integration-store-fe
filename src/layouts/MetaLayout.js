import React from "react";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const MetaLayout = ({ children, title }) => {
  const tmpTitle = title ? `${title} | CemalCemil` : "CemalCemil";
  return (
    <>
      <Head>
        <title>{tmpTitle}</title>
      </Head>
      <main className={`${poppins.className}`}>{children}</main>
    </>
  );
};
