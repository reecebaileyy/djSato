'use client'

import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'
import { PiTiktokLogoBold, PiInstagramLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { FaYelp } from "react-icons/fa";

export default function Home() {
  return (
    <main className='flex flex-col items-center sm:justify-start justify-center bg-black min-w-screen min-h-screen'>
      <div className=' flex flex-row sm:mb-36 z-10'>
        <div
          className='sm:hidden md:hidden min-w-9/12 flex flex-col z-50 items-start justify-center space-y-40 absolute inset-y-0 left-0 w-1/6 p-5'>
          <Link
            className='text-white font-basker animate-appearFromLeft1 text-2xl hover:opacity-200'
            href='/about'
          >
            DJ SATO
          </Link>
          <Link
            className='text-white font-basker animate-appearFromLeft2 text-2xl'
            href='/weddings'
          >
            Weddings
          </Link>
          <Link
            className='text-white font-basker animate-appearFromLeft3 text-2xl'
            href='/privateparties'
          >
            Private Parties
          </Link>
          <Link
            className='text-white font-basker animate-appearFromLeft4 text-2xl'
            href='/testimonials'>
            Testimonials
          </Link>
        </div>
        <Image
          src={logo}
          width={450}
          height={450}
          className='animate-appearFromBottom'
        >
        </Image>
      </div>
      <div
        className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden hover-icons grid grid-cols-2 auto-rows-auto justify-items-center place-items-center z-50 w-3/4 '>
        <Link
          className='icon text-white sm:text-sm md:text-sm col-start-1 col-span-1 font-basker duration-50 text-2xl hover:opacity-200'
          href='/about'
        >
          DJ SATO
        </Link>
        <Link
          className='icon text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl'
          href='/weddings'
        >
          Weddings
        </Link>
        <Link
          className='icon text-white sm:text-sm md:text-sm col-start-1 col-span-1 font-basker duration-50 text-2xl'
          href='/privateparties'
        >
          Private Parties
        </Link>
        <Link
          className='icon text-white sm:text-sm md:text-sm col-start-2 col-span-1 font-basker duration-50 text-2xl'
          href='/testimonials'>
          Testimonials
        </Link>
      </div>
      <div className='hover-icons absolute bottom-0 right-0 flex flex-row sm:flex-col md:flex-col sm:space-y-5 items-end justify-end space-x-3 mr-10 mb-10'>
        <Link href='https://www.instagram.com/djsato_/' target='_blank'  className='icon text-white transition animate-fadeIn'>
          <PiInstagramLogoBold size={25} />
        </Link>
        <Link href='https://www.linkedin.com/in/shane-sato3/' target='_blank'  className='icon text-white transition animate-fadeIn'>
          <TfiLinkedin size={25} />
        </Link>
        <Link href='https://www.yelp.com/biz/dj-sato-fullerton' target='_blank'  className='icon text-white transition animate-fadeIn'>
          <FaYelp size={25} />
        </Link>
        <Link href='https://www.tiktok.com/@djsato_' target='_blank' className='icon text-white transition animate-fadeIn'>
          <PiTiktokLogoBold size={25} />
        </Link>
      </div>


    </main>
  )
}
