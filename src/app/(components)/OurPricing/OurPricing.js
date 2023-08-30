import React from 'react'
import PricingCard from '../PricingCard/PricingCard'

export default function OurPricing() {
  return (
    <div>
      <p className="text-[#2370C8]">Our Pricing</p>
      <h1 className='font-bold text-xl mb-2'>Choose A Plan That's Right For You</h1>
      <div className=' flex justify-items-center'>
        <PricingCard/>
        <PricingCard/>
        <PricingCard/>
      </div>
    </div>
  )
}
