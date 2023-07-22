'use client'

import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import shane from '../../../public/assets/images/shane.jpg'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react';


export default function Home() {

    const venueRefs = useRef([]);

  useEffect(() => {
    venueRefs.current.forEach((ref, index) => {
      if (ref) {
        setTimeout(() => {
          ref.classList.add('active');
        }, index * 100); // 100ms stagger
      }
    });
  }, []);

    return (
        <main className='flex flex-col items-center justify-center bg-black w-screen min-h-screen p-10'>

            <h1 className='text-white font-basker text-6xl text-center sm:text-3xl'>Hi! I&apos;m DJ SATO</h1>


            <section className='flex flex-col items-center justify-center space-y-5 m-10'>
                <h2 className='text-white font-basker text-4xl underline mb-3 sm:text-xl'>About Me</h2>
                <div className='flex flex-col items-center gap-5 justify-center'>
                    <Image className="animate-grow-fade-in rounded-xl shadow-lg mb-3" src={shane} alt='Shane Sato' width={450} height={450} />
                    <p className='text-white font-basker text-xl sm:text-sm'>Name: Shane Sato</p>
                    <p className='text-white font-basker text-xl sm:text-sm w-2/3 sm:w-full text-center'>Education: Bachelors of Arts Degree in Finance from the California State University of Fullerton</p>
                </div>
            </section>


            <section className='flex flex-col items-center justify-start space-y-5 w-full'>
                <h2 className='text-white font-basker text-4xl sm:text-xl underline mb-3'>Venues you can find me at</h2>
                <div className='grid grid-cols-2 gap-6 text-center w-3/4 mx-auto'>
                    <p ref={el => venueRefs.current[0] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>XO Lounge</p>
                    <p ref={el => venueRefs.current[1] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Westminster</p>
                    <p ref={el => venueRefs.current[2] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Legacy Nightclub</p>
                    <p ref={el => venueRefs.current[3] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Newport Beach</p>
                    <p ref={el => venueRefs.current[4] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Back Alley</p>
                    <p ref={el => venueRefs.current[5] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Fullerton</p>
                    <p ref={el => venueRefs.current[6] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>The QD Venue</p>
                    <p ref={el => venueRefs.current[7] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Westminster</p>
                    <p ref={el => venueRefs.current[8] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>The Grand</p>
                    <p ref={el => venueRefs.current[9] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[10] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Killarney&apos;s</p>
                    <p ref={el => venueRefs.current[11] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[12] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Catch One</p>
                    <p ref={el => venueRefs.current[13] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Los Angeles</p>
                    <p ref={el => venueRefs.current[14] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Heat Ultra Lounge</p>
                    <p ref={el => venueRefs.current[15] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Anaheim</p>
                    <p ref={el => venueRefs.current[16] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>At The Top - Underground Tiki Lounge</p>
                    <p ref={el => venueRefs.current[17] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[18] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Studio 537</p>
                    <p ref={el => venueRefs.current[19] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Los Angeles</p>
                    <p ref={el => venueRefs.current[20] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>The 1912</p>
                    <p ref={el => venueRefs.current[21] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Santa Ana</p>
                    <p ref={el => venueRefs.current[22] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Fullerton Community Center</p>
                    <p ref={el => venueRefs.current[23] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Fullerton</p>
                    <p ref={el => venueRefs.current[24] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>The Peninsula</p>
                    <p ref={el => venueRefs.current[25] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Newport Beach</p>
                    <p ref={el => venueRefs.current[26] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Fire Wings</p>
                    <p ref={el => venueRefs.current[27] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[28] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Richard Nixon Library</p>
                    <p ref={el => venueRefs.current[29] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Yorba Linda</p>
                    <p ref={el => venueRefs.current[30] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Bluewater Grill</p>
                    <p ref={el => venueRefs.current[31] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Redondo Beach</p>
                    <p ref={el => venueRefs.current[32] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Jinya Ramen Bar</p>
                    <p ref={el => venueRefs.current[33] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[34] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Terasaki Budokan</p>
                    <p ref={el => venueRefs.current[35] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Los Angeles</p>
                    <p ref={el => venueRefs.current[36] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Appu&apos;s Cafe</p>
                    <p ref={el => venueRefs.current[37] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Long Beach</p>
                    <p ref={el => venueRefs.current[38] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Los Angeles Garden Weddings</p>
                    <p ref={el => venueRefs.current[39] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Los Angeles</p>
                    <p ref={el => venueRefs.current[40] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Treehouse Lounge Pasea Hotel</p>
                    <p ref={el => venueRefs.current[41] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>Huntington Beach</p>
                    <p ref={el => venueRefs.current[42] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>La Mirada Golf Course</p>
                    <p ref={el => venueRefs.current[43] = el} className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 fade-in sm:text-sm'>La Mirada</p>
                </div>
            </section>


        </main>
    )
}
