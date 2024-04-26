import React from 'react'
import Link from 'next/link';

function page() {
  return (
    <div className="flex items-center space-x-4">
    <Link href="/biodata">
      bio data
    </Link>
    <Link href="/biodata/udhd">
      bio inside
    </Link>
    <Link href="/travel">
        travel
    </Link>
    <Link href="/Top10">
      top10
    </Link>
  </div>

  )
}

export default page


