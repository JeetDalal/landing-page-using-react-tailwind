import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const PricingSection = () => {
  return (
    <div className='mt-20'>
        <h1 className="lg:text-6xl sm:text-5xl tex-3xl text-center my-8">
            Pricing
        </h1>
        <div className="flex flex-wrap justify-center">
        {pricingOptions.map((item,index)=>(
            <div className="p-2 mx-2 w-full sm:w-1/3 lg:w-1/4 max-sm:mx-20">
            <div className="rounded-xl border border-neutral-700">
               <h2 className="text-3xl p-4">{item.title}{" "}{item.title === "Pro"?<span className='text-orange-400 text-sm'>
                (Most popular)
               </span>:<></>}</h2>
               <p className="text-4xl pb-4 pl-4">{item.price}{" "}<span className='text-neutral-500 text-sm'>/month</span></p>
               {item.features.map((element,index)=>(
                <div key={index} className="flex items-center mt-4">
                    <div className="mx-4 my-2">
                        <CheckCircle2/>
                    </div>
                    <div className="">{element}</div>
                </div>
            ))}
            <div className="mt-16 my-4 mx-4 border border-orange-900 px-2 py-3 hover:bg-orange-900 rounded-xl text-center text-xl">
                Subscribe
            </div>
            </div>
            
           </div> 
        ))}
        </div>
    </div>
  )
}

export default PricingSection