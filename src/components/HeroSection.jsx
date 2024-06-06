import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-6xl text-center">VirtualR build tools <span className=" bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            for<br/>developers</span>
            </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your VR app ideas to life with our 
        intuivitive development tools. Get started today and turn your imagination 
        into immersive reality!
        </p>
        <div className="flex space-x-6 justify-center mt-10">
        <a href="#" className="text-white border border-white px-2 py-3 rounded-md">Start for Free</a>
            <a href="#" className="text-white px-2 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Documentation</a>
        </div>
        <div className="flex space-x-6 items-center justify-center mt-20">
            <video loop autoPlay muted src={video1} className="w-1/3 rounded-md border border-orange-700 shadow-orange-400 mx-2 my-4"></video>
            <video loop autoPlay muted src={video2} className="w-1/3 rounded-md border border-orange-700 shadow-orange-400 mx-2 my-4"></video>
        </div>
    </div>
  )
}

export default HeroSection