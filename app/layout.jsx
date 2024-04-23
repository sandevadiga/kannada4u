// RootLayout.js

import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import "./globals.css"; 

export const metadata = {
  title: "kannada4u.com",
  description: "Karantaka's fastest news website",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other metadata here */}
      </Head>
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
