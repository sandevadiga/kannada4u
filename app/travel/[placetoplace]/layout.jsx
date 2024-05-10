import React from 'react'
import { Metadata } from 'next';
 
export const metadata = {
  title: {
    template: '%s | Kannada4u News',
    default: 'Kannada4U.com',
  },
   keywords: [
    'udupi to horanadu distance',
    'bidar gurudwara',
    'hyderabad to bidar distance',
    'mysore to chamarajanagar',
    'chamarajanagar tourist places',
    'places to visit in chamarajanagar',
    'bangalore to chamarajanagar',
    'chikballapur to bangalore',
    'mysore to chikballapur',
    'chitradurga to bangalore distance',
    ' chitradurga fort photos',
    'chitradurga to davangere',
    'chitradurga to shimoga',
    'chitradurga to mysore',
    'dakshina kannada tourist places',
    'engineering colleges in davanagere',
    'davanagere to chikmagalur',
    

  ],
  description: "Karantaka's fastest news website ",
};


function layout({ children }) {
  return (
    <div>{children}</div>
  )
}

export default layout