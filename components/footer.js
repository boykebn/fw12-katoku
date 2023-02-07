import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#9ED5C5] px-24 py-5 md:block hidden">
        <div className="hidden">
          <Link href="/" className="text-white text-3xl">
            KantongKu
          </Link>
          <div className="w-60 text-white mt-10">
            <p>
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
          </div>
          <div className="border-0 border-b mt-10"></div>
        </div>
        <div className="flex">
          <div className="flex-1 text-white">
            <p>2022 KantongKu. All right reserved.</p>
          </div>
          <div className="flex gap-6 text-white ">
            <p>+62 813-8826-2406</p>
            <Link href="/">contact@katoku.com</Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer