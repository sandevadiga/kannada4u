import React from 'react'
import StateNavBar from './StateNavBar'
import SecondNavBar from './SecondNavBar'
import Link from 'next/link'


function NaavBar() {
  return (
    <div className=" flex flex-col text-center sticky top-0 z-50 bg-gray-800 text-white py-4 px-6">
        <div className=' mb-3 text-3xl'> <Link href='/'>Kannada4U.com </Link> </div>
        <StateNavBar/>
        <SecondNavBar/>
    </div>
  )
}

export default NaavBar;