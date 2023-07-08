import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'

export default function Home() {
  return (
   <main className='flex flex-row items-center justify-center bg-black min-w-screen min-h-screen'>
   <Image 
    src={logo}
    width={450}
    height={450}
   >
   </Image>
   </main>
  )
}
