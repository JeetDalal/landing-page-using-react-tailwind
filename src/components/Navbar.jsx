import {Menu,X} from "lucide-react"
import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
function Navbar() {
const [navState,setNavState] = useState(false)
const toggleNavBar = ()=>{
    setNavState(!navState)
}
  return (
    <nav className="sticky top-0 border-b border-neutral-700/90 backdrop-blur z-50 py-3">
        <div className="flex relative items-center justify-between container text-sm px-4 mx-auto">
        <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2"/>
            <span className="tracking-tight text-xl">VirtualR</span>
        </div>
        <div>
            <ul className="hidden lg:flex items-center space-x-12 ml-14">
                    {navItems.map((item,index)=>(
                        <li key={index} >
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
            </ul>
        </div>
        <div className="hidden lg:flex space-x-12">
            <a href="#" className="text-white border border-white px-2 py-3 rounded-md">Sign in</a>
            <a href="#" className="text-white px-2 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
        </div>
        <div className="div lg:hidden md:flex-col justify-end">
            <button onClick={toggleNavBar}>
            {navState?<X/>:<Menu/>}
            </button>
        </div>
        </div>
        {
            navState && <div className="fixed p-12 right-0 w-full flex flex-col items-center bg-neutral-900 z-20 lg:hidden">
             <ul>
                    {navItems.map((item,index)=>(
                        <li key={index} className="py-4" >
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
            </ul>
            <div className="flex lg:hidden space-x-6">
            <a href="#" className="text-white border border-white px-2 py-3 rounded-md">Sign in</a>
            <a href="#" className="text-white px-2 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
            </div>
            </div>
        }
    </nav>
  )
}

export default Navbar