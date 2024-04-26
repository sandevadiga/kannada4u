import React from 'react'
import { Metadata } from 'next';
 
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
  

function layout({ children }) {
  return (
    <div>{children}</div>
  )
}

export default layout