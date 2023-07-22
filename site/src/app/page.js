'use client'

import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import shane from '../../public/assets/images/shane.jpg'
import Link from 'next/link'
import { useState } from 'react'
import { PiTiktokLogoBold, PiInstagramLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaYelp } from "react-icons/fa";

export default function Home() {

  const [hoveredIcon, setHoveredIcon] = useState(null);


  return (
    <main className='flex flex-col items-center justify-center sm:space-y-5 md:space-y-5 sm:justify-start md:justify-start bg-black w-screen h-screen'>
      <div
        className='flex flex-row sm:mt-[50%] md:mt-[50%] z-10'
      >
        <div
          className=' sm:hidden md:hidden min-w-9/12 flex flex-col z-50 items-start justify-center space-y-40 absolute inset-y-0 left-0 w-fit p-5'>
          <Link
            className={`icon animate-appearFromLeft1 ${hoveredIcon === "DJ SATO" ? '' : hoveredIcon === null ? '' : 'dim'} text-white sm:text-sm md:text-sm col-start-1 col-span-1 font-basker duration-50 text-2xl`}
            onMouseEnter={() => setHoveredIcon("DJ SATO")}
            onMouseLeave={() => setHoveredIcon(null)}
            href='/about'
          >
            DJ SATO
          </Link>
          <Link
            className={`icon animate-appearFromLeft2 ${hoveredIcon === "Weddings" ? '' : hoveredIcon === null ? '' : 'dim'} text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl`}
            onMouseEnter={() => setHoveredIcon("Weddings")}
            onMouseLeave={() => setHoveredIcon(null)}
            href='/'
          >
            Weddings
          </Link>
          <Link
            className={`icon animate-appearFromLeft3 ${hoveredIcon === "Private Parties" ? '' : hoveredIcon === null ? '' : 'dim'} text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl`}
            onMouseEnter={() => setHoveredIcon("Private Parties")}
            onMouseLeave={() => setHoveredIcon(null)}
            href='/'
          >
            Private Parties
          </Link>
          <Link
            className={`icon animate-appearFromLeft4 ${hoveredIcon === "Testimonials" ? '' : hoveredIcon === null ? '' : 'dim'} text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl`}
            onMouseEnter={() => setHoveredIcon("Testimonials")}
            onMouseLeave={() => setHoveredIcon(null)}
            href='/'
          >
            Testimonials
          </Link>
        </div>
        <div className='flex flex-col items-center'>
          <Image
            src={logo}
            width={450}
            height={450}
            className='animate-appearFromBottom'
          >
          </Image>
          <h1 className='text-xs font-basker text-white tracking-[.35rem] animate-fadeIn0'>PROFESSIONAL MUSIC</h1>
        </div>

      </div>
      <div className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden hover-icons grid grid-cols-2 gap-y-3 auto-rows-auto justify-items-center place-items-end z-50 w-3/4'>
        <Link
          className={`icon animate-fadeIn1 ${hoveredIcon === "DJ SATO" ? '' : 'dim'} text-white sm:text-sm md:text-sm col-start-1 col-span-1 font-basker duration-50 text-2xl`}
          onMouseEnter={() => setHoveredIcon("DJ SATO")}
          onMouseLeave={() => setHoveredIcon(null)}
          href='/about'
        >
          DJ SATO
        </Link>
        <Link
          className='icon animate-fadeIn2 text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl'
          href='/'
        >
          Weddings
        </Link>
        <Link
          className='icon animate-fadeIn3 text-white sm:text-sm md:text-sm col-start-1 col-span-1 font-basker duration-50 text-2xl'
          href='/'
        >
          Private Parties
        </Link>
        <Link
          className='icon animate-fadeIn4 text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl'
          href='/'
        >
          Testimonials
        </Link>
      </div>
      <div className='hover-icons absolute bottom-0 right-0 flex flex-row sm:flex-col md:flex-col md:space-y-5 sm:space-y-5 items-end justify-end space-x-3 mr-10 mb-10 sm:mb-0 sm:mr-0 md:mb-0 md:mr-0 sm:p-5 md:p-5'>
        <Link href='https://www.instagram.com/djsato_/' target='_blank' className='icon text-white transition animate-fadeIn'>
          <PiInstagramLogoBold size={25} />
        </Link>
        <Link href='https://www.linkedin.com/in/shane-sato3/' target='_blank' className='icon text-white transition animate-fadeIn'>
          <TfiLinkedin size={25} />
        </Link>
        <Link href='https://www.yelp.com/biz/dj-sato-fullerton' target='_blank' className='icon text-white transition animate-fadeIn'>
          <FaYelp size={25} />
        </Link>
        <Link href='https://www.tiktok.com/@djsato_' target='_blank' className='icon text-white transition animate-fadeIn'>
          <PiTiktokLogoBold size={25} />
        </Link>
      </div>


    </main>
  )
}
