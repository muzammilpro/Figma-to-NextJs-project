import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

export default function MainCard(props) {
  return (
    <div  className={`border-2 border-white bg-blue-300 bg-opacity-40  hover:border-blue-700  hover:bg-white ease-in duration-300 py-4 pb-10 ${props.hid} ` } >
         <div className={`space-y-3  ` }> 
                  <Link href="/about" >
                <Image width={70} height={10} className=' mx-auto rounded-full object-cover mt-3' src={props.source} alt=""/>
                <h3 className='text-center  font-semibold text-xl' >{props.txt}</h3>
                <p className='mx-auto text-center  px-10 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo totam est, eaque provident eum veritatis magnam illum. Eius, quaerat!</p>
                </Link>
                {/* <span className='  absolute bottom-0  translate-x-40 sm:translate-x-44  translate-y-[87vh] sm:translate-y-8 z-10 '>
                <AiOutlineArrowRight size={35} className='bg-blue-700 text-white p-2 rounded-full cursor-pointer ' />
                </span> */}
          </div>
    </div>
  )
}
