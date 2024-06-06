import './App.css'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import TestimonialSection from './components/TestimonialSection'
import WorkflowSection from './components/WorkflowSection'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <WorkflowSection/>
    <PricingSection/>
    <TestimonialSection/>
    <Footer/>
    </>
  )
}

export default App
