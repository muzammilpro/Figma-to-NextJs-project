import 'src/app/(components)/workersinfo/style.css'
import React from 'react'
import Image from 'next/image'

import Link from 'next/link'
export default function Workerinfo(props) {
  return (
    <div  className='flex' >

      <div className='w-[400px] h-[382px] border-4 overflow-hidden rounded-lg border-white  relative hover-effect' >
      <Image width={450} height={100} src={props.source} className='w-full  h-full object-cover '  />
      <div className='w-full h-full top-0 right-[-100%] absolute bg-slate-700 bg-opacity-60 backdrop-blur-sm rounded-lg space-y-4  text-white p-12  my-auto flex flex-col justify-center  hover-target' >
        <h1 className='text-3xl font-semibold' >{props.txt1}</h1>
        <h2  className='text-xl   font-semibold'  >{props.txt2}</h2>
        <p className='  leading-6  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus cumque sequi corrupti perspiciatis blanditiis natus laudantium, qui .</p>
        <button className='p-1 rounded-full object-fill bg-blue-300 text-blue-600 font-semibold cursor-pointer w-32' ><Link href='./' >Contact him</Link></button>
      </div>
      </div>
    </div>
  )
}
