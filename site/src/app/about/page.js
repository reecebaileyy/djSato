'use client'

import Image from 'next/image'
import logo from '../../../public/assets/images/logo.png'
import shane from '../../../public/assets/images/shane.jpg'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {

    return (
        <main className='flex flex-col items-center justify-center bg-black w-screen min-h-screen p-10'>

            <h1 className='text-white font-basker text-6xl text-center sm:text-3xl'>Hi! I’m DJ SATO</h1>


            <section className='flex flex-col items-center justify-center space-y-5 m-10'>
                <h2 className='text-white font-basker text-4xl underline mb-3 sm:text-xl'>About Me</h2>
                <div className='flex flex-col items-center gap-5 justify-center'>
                    <Image className="rounded-xl shadow-lg mb-3 hover:shadow-xl transition-shadow duration-300" src={shane} alt='Shane Sato' width={450} height={450} />
                    <p className='text-white font-basker text-xl sm:text-sm'>Name: Shane Sato</p>
                    <p className='text-white font-basker text-xl sm:text-sm w-2/3 sm:w-full text-center'>Education: Bachelors of Arts Degree in Finance from the California State University of Fullerton</p>
                </div>
            </section>


            <section className='flex flex-col items-center justify-start space-y-5 w-full'>
                <h2 className='text-white font-basker text-4xl sm:text-xl underline mb-3'>Venues you can find me at</h2>
                <div className='grid grid-cols-2 gap-6 text-center w-3/4 mx-auto'>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>XO Lounge</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Westminster</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Legacy Nightclub</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Newport Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Back Alley</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Fullerton</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>The QD Venue</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Westminster</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>The Grand</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Killarney's</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Catch One</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Los Angeles</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Heat Ultra Lounge</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Anaheim</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>At The Top - Underground Tiki Lounge</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Studio 537</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Los Angeles</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>The 1912</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Santa Ana</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Fullerton Community Center</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Fullerton</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>The Peninsula</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Newport Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Fire Wings</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Richard Nixon Library</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Yorba Linda</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Bluewater Grill</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Redondo Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Jinya Ramen Bar</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Terasaki Budokan</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Los Angeles</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Appu's Cafe</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Long Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Los Angeles Garden Weddings</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Los Angeles</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Treehouse Lounge Pasea Hotel</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>Huntington Beach</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>La Mirada Golf Course</p>
                    <p className='text-white font-basker text-xl hover:text-red-500 transition-colors duration-300 sm:text-sm'>La Mirada</p>
                </div>
            </section>


        </main>
    )
}
