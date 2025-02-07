import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex p-8 px-24 justify-between'>
        <div className="">
            <Link href="/" className='text-[#a09f9f]'>three dash</Link>
        </div>
        <div className="flex gap-16">
            <Link href="/" className='text-[#a09f9f]'>Home</Link>
            <Link href="/" className='text-[#a09f9f]'>Link 1</Link>
            <Link href="/" className='text-[#a09f9f]'>Link 2</Link>
            <Link href="/" className='text-[#a09f9f]'>Link 3</Link>
        </div>

        <div className="">
            <Link href="/" className='text-[#a09f9f]'>Login</Link>
        </div>
    </div>
  )
}
