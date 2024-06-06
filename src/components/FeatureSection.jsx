import React from 'react'
import { features } from '../constants'
const FeatureSection = () => {
  return (
    <div className='relative mt-20  min-h-[800px]'>
        <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-full text-sm font-medium px-2 py-1 h-6 uppercase">
                feature
            </span>
            <h2 className="text-3xl sm:text-5xl lg:mt-20 mt-10 lg:text-6xl text-center tracking-wide">
                Easily build <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>your code</span>
            </h2>
        </div>
        <div className="flex flex-wrap lg:mt-20 mt-10">
                {features.map((item,index)=>(
                            <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                    <div className="flex mx-6">
                            <div className="flex rounded-full p-2 bg-neutral-900 mx-2 h-10 w-10 text-orange-700 justify-center items-center">
                                {item.icon}
                            </div>
                            <div>
                            <h5 className="mt-1 mb-6 text-xl">
                                {item.text}
                            </h5>
                            <p className="text-md text-neutral-500 p-2 mb-20">
                                {item.description}
                            </p>
                            </div>
                            
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FeatureSection