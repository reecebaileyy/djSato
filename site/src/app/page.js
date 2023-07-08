import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center bg-black min-w-screen min-h-screen'>
      <Image
        src={logo}
        width={450}
        height={450}
        className='sm:mb-36 animate-appearFromBottom1'
      >
      </Image>
      <div className='min-w-9/12 flex flex-col'>
        <Link className='font' href='/about'>About</Link>
        <Link href='/music'>Testimonials</Link>
        <Link href='/contact'>Contact</Link>

      </div>
    </main>
  )
}
