import React from 'react'
import StateNavBar from './StateNavBar'
import SecondNavBar from './SecondNavBar'

function NaavBar() {
  return (
    <div className='flex flex-col'>
        <div>LOGO</div>
        <StateNavBar/>
        <SecondNavBar/>
    </div>
  )
}

export default NaavBar