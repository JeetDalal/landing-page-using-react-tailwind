import React from 'react'
import {testimonials} from "../constants"
const TestimonialSection = () => {
  return (
    <div className='mt-20'>
        <h1 className="lg:text-6xl sm:text-5xl text-3xl  text-center">What people are saying</h1>
        <div className="lg:mt-20 sm:mt-10 flex flex-wrap justify-center">
        {testimonials.map((item,index)=>(
                    <div className="lg:w-1/3 w-full sm:w-1/2 shrink px-4 py-2">
                    <div className="rounded-md bg-neutral p-6 border border-neutral-800">
                        <p className="font-thin text-md text-neutral-500 mb-8">{item.text}</p>
                        <div className="flex items-center">
                            <div>
                                <img src={item.image} alt={item.user} className='rounded-full h-12 w-12 mr-2 border border-neutral-500'/>                                
                            </div>
                            <div>
                                <p className="text-lg ">{item.user}</p>
                                <p className="text-sm text-neutral-500">{item.company}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            
        </div>
    </div>
  )
}

export default TestimonialSection