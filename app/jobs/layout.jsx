import React from 'react'
import { Metadata } from 'next';
 
export const metadata = {
    title: {
      template: '%s |  ಕನ್ನಡ ಸುದ್ದಿ | Karnataka News : ಕರ್ನಾಟಕ ಸುದ್ದಿ, Latest News in Karnataka | Kannada4u.com' ,
      default: 'ಕನ್ನಡ ಸುದ್ದಿ | Karnataka News : ಕರ್ನಾಟಕ ಸುದ್ದಿ, Latest News in Karnataka | Kannada4u.com',
    },
     keywords: [
      'jobs in bidar      ',
      'jobs in vijayapur',
      'jobs in chitradurga',
      'jobs in davanagere',
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
    description:"ಕನ್ನಡ4U.com | Kannada4U.com - ಕನ್ನಡದ ಅತ್ಯುತ್ತಮ ನ್ಯೂಸ್ portal. Daily job updates, Daily Gold Price updates, travel guides ಮತ್ತು ಸ್ಥಳೀಯ ಸುದ್ದಿಗೆ ವಿಶೇಷ ಗಮನ. Fast and accurate ಸುದ್ದಿಗೆ ಪ್ರವೇಶಿಸಿ."
  };
  

function layout({ children }) {
  return (
    <div>{children}</div>
  )
}

export default layout