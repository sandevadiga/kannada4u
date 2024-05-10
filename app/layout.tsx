import React, { ReactNode } from "react";
import Footer from './components/Footer'
import Navbar from "./components/navBar";
import type { Metadata } from 'next'
import "./globals.css"; 

export const metadata:Metadata = {
  title: {
    template: '%s |  ಕನ್ನಡ ಸುದ್ದಿ | Karnataka News : ಕರ್ನಾಟಕ ಸುದ್ದಿ, Latest News in Karnataka | Kannada4u.com' ,
    default: 'ಕನ್ನಡ ಸುದ್ದಿ | Karnataka News : ಕರ್ನಾಟಕ ಸುದ್ದಿ, Latest News in Karnataka | Kannada4u.com',
  },
   keywords: [
    'kannada cricket news',
    'dakshina kannada news',
    'job news kannada',
    'uttar kannada news',
    'uttara kannada news',
    'google news kannada',
    'google news in kannada',
    'udupi news kannada',
    'bidar news kannada',
    'fast news india', 
    'bidar news',
    'chamarajanagar news',
    'chitradurga news',
    'davanagere news',
  ],
  description:"ಕನ್ನಡ4U.com | Kannada4U.com - ಕನ್ನಡದ ಅತ್ಯುತ್ತಮ ನ್ಯೂಸ್ portal. Daily job updates, Daily Gold Price updates, travel guides ಮತ್ತು ಸ್ಥಳೀಯ ಸುದ್ದಿಗೆ ವಿಶೇಷ ಗಮನ. Fast and accurate ಸುದ್ದಿಗೆ ಪ್ರವೇಶಿಸಿ.",
  openGraph: {
    images: '/opengraph-image.png',
  },
};


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
          <meta name="news_keywords" content="kannada cricket news',
    'dakshina kannada news',
    'job news kannada',
    'uttar kannada news',
    'uttara kannada news',
    'google news kannada',
    'google news in kannada',
    'udupi news kannada',
    'bidar news kannada',
    'fast news india', 
    'bidar news',
    'chamarajanagar news',
    'chitradurga news',
    'davanagere news'," />
      <body>
        <div>
          <Navbar  />
          <div className="m-2">
          {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
