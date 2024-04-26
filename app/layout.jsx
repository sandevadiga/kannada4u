// RootLayout.js

import React from "react";
import Head from "next/head";
import Footer from './components/Footer'
import Navbar from "./components/navBar";
import "./globals.css"; 

export const metadata = {
  title: {
    template: '%s | Kannada4u News',
    default: 'Kannada4U.com',
  },
   keywords: [
    'udupi',
    'ujire',
    'kannada news',
    'local news ',
    'hubbali',
    'hassan',
    'Karwarwa',
    'Karawali',
    'gokarna',
    'mysore',
    'kannada top10',
    'shivamogga',
    'belagavi'
  ],
  description: "Karantaka's fastest news website ",
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
          <Navbar  />
          <div className="m-2">
          {children}.
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
