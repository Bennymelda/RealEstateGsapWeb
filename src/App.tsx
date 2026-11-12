
import './App.css'
import Hero from './Component/Hero'
import Navbar from './Component/Nav'
import   HowWeHelpSection from './Component/Buying'
import ChevronRow from './Component/Chevron'
import TestimonialSection from './Component/Testimonal'
import ServicesSection from './Component/Sevice'
import Footer from './Component/Fotter'
import HeroSection from './Component/BottomFotter'
import CareerSection from './Component/Carrer'
import Video from './Component/Video'
import StepsSection from './Component/Rewired'

function App() {
 
  return (
    <>
    <Navbar />
<Hero />
<Video />
<ChevronRow />
<StepsSection />
<CareerSection />
<TestimonialSection />
<HowWeHelpSection />
<ServicesSection />


<HeroSection />
<Footer />

    </>
  )
}

export default App
