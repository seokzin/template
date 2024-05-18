import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1>page</h1>

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
        priority
      />
    </div>
  )
}

export default page
