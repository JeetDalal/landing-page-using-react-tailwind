import React from 'react'
import { resourcesLinks, platformLinks, communityLinks} from '../constants'
const Footer = () => {
  return (
    <div className='my-20'>
        <div className="w-full mx-5 border border-neutral-800 mb-10"></div>
        <div className="flex ml-5 max-sm:flex-col ">
            <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
                <h5 className="text-lg my-4">Resources</h5>
                {resourcesLinks.map((item,index)=>(
                    <a href={item.href} key={index} className="py-2 text-neutral-500 hover:text-neutral-300">{item.text}</a>
                ))}
            </div>
            <div className='flex flex-col w-full sm:w-1/3 lg:w-1/3'>
                <h5 className="text-lg my-4">Platforms</h5>
                {platformLinks.map((item,index)=>(
                    <a href={item.href} key={index} className="py-2 text-neutral-500 hover:text-neutral-300">{item.text}</a>
                ))}
            </div>
            <div className='flex flex-col w-full sm:w-1/2 lg:w-1/3'>
                <h5 className="text-lg my-4">Community</h5>
                {communityLinks.map((item,index)=>(
                    <a href={item.href} key={index} className="py-2 text-neutral-500 hover:text-neutral-300">{item.text}</a>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer