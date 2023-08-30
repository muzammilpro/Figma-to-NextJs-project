'use client'
import Image from 'next/image'
import Button from './(components)/Button/page'
import Navbar from './(components)/navbar/page'
import MainCard from './(components)/mainCard/page'
import Carousel from './(components)/carousle/page'
import MoveCard from './(components)/MoveCard/pages'
import SliderPage from './(components)/MoveCard/pages'
import Moves from './(components)/Moves/page'
import Multiplesmoves from './(components)/Multiplesmoves/page'
import Link from 'next/link'
import Workerinfo from './(components)/workersinfo/page'
import Footer from './(components)/Footer/Footer'
import OurPricing from './(components)/OurPricing/OurPricing'
import TrustedClient from './(components)/TrustedClient/TrustedClient'


export default function Home() {
  return (
    <div >
      <div className='max-w-full py-0 bg-grad  px-4 sm:py-0 bg-gradient-to-r from-blue-800 to-blue-600' >
        <Navbar />
        <div className='max-w-[1220px] mx-auto' >
          <div className='max-w-2xl grid ' >
            <h1 className='text-6xl font-semibold text-slate-50 leading-[70px] md:mt-28   '>Creative <br /> Digital Agency</h1>
            <h1 className='text-sm my-3  text-slate-50 ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Ea eligendi nulla perferendis</h1>
            <span className=' mt-3  mb-28' ><Button txt='Learn More' /> </span>
          </div>
        </div>
        <div></div>
      </div>
      <span className='text-center space-y-5 ' >
        <h6 className=' mt-20 text-blue-600' >OUR SERVICES</h6>
        <h1 className='font-semibold text-2xl ' >We Are Providing Digital services</h1>
      </span>
      <div className='max-w-full py-0 px-4 sm:py-0 mt-14  '>
        <div className='max-w-[1240px] grid grid-cols-1  mx-auto   ' >
          <Moves card={<MainCard source={'/webs.jpg'} txt={'Web Development'} />}
            card2={<MainCard source={'/webs.jpg'} txt={'GraphicDesign'} />}
            card3={<MainCard source={'/webs.jpg'} txt={'Digital Marketing'} />} />
        </div>
        <Carousel source={'/bnda design .jpg'} />
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-300 bg-opacity-40   '>
        <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-3  mx-auto  py-10 ' >
          <MainCard source={'/webs.jpg'} txt={'Web Development'} />
          <MainCard source={'/webs.jpg'} txt={'GraphicDesign'} />
          <MainCard source={'/webs.jpg'} txt={'Digital Marketing'} />
        </div>
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14'>
        <div className='max-w-7xl grid grid-cols-1 space-x-32  mx-auto  py-10  ' >
          <Multiplesmoves card={<MainCard source={'/webs.jpg'} txt={'Web Development'} />}
            card1={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={500} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/1.jpg' /></Link>}
            card2={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/image (4).jpg' /></Link>}
            card3={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={500} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/3.jpg' /></Link>}
            card4={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/4.jpg' /></Link>}
            card5={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/5.jpg' /></Link>}
            card6={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/6.jpg' /></Link>}
            card7={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/7.jpg' /></Link>}
            card8={<Link href='https://nft-marketfarhan.vercel.app/' >  <Image width={400} className='mx-auto hover:scale-105 ease-in duration-300 ' height={100} src='/8.jpg' /></Link>}
          />
        </div>
      </div>
      <div className='max-w-full py-0 px-7 sm:py-0 mt-14  bg-blue-300 bg-opacity-40'>
        <span className='text-center space-y-5 ' >
          <h6 className=' pt-16 text-blue-600' >OUR SERVICES</h6>
          <h1 className='font-semibold text-2xl ' >We Are Providing Digital services</h1>
        </span>
        <div className=' max-w-7xl grid grid-cols-1 md:grid-cols-3  mx-auto py-10 ' >
          <Workerinfo source={'/dev3.jpg'} txt1={'Muzammil Husnain'} txt2={'Best Front End designer'} />
          <Workerinfo source={'/dev1.jpeg'} txt1={'Imran Khan '} txt2={'King of Urban Punjabi Music'} />
          <Workerinfo source={'/dev2.jpg'} txt1={'Muzammil Husnain'} txt2={'Best Full Web Developer'} />
        </div>
      </div>
    

        <OurPricing/>
        <br/><br/>
        <TrustedClient/>
      <Footer/>
    </div>
  )
}
