import React from 'react'
import Image from 'next/image'
import Button from '../Button/page'
export default function Carousel(props) {
  return (
    <div className='max-w-full py-10 sm:py-0 px-4 m-10 mx-auto mt-20' >
    <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2' >
                  <Image width={500} className='mx-auto hover:w-[550px] ease-in eas duration-300' height={500} src={props.source}/>
                <div className='space-y-6 mt-14' >
                  <h1 className='text-xl text-blue-500 font-semibold'>About Us</h1>
                  <h1 className='text-4xl font-semibold text-black mt-5  '>We design, build brands <br/> & digital projects.</h1>
                  <h1 className='text-base my-3 pb-6 text-black ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam qui dolore vero eveniet iusto recusandae iure nisi asperiores obcaecati? Ut, dolores harum possimus modi velit ducimus in voluptates blanditiis nulla error odio, aliquam amet esse sapiente non perspiciatis! Natus expedita aperiam, ratione ad ut deserunt distinctio voluptas, dicta earum neque modi. <br/> Ea eligendi nulla perferendis</h1>
                  <span className=' mb-28' ><Button  txt='Learn More' /> </span>
                  </div>
                  </div>    
    </div>
  )
}
