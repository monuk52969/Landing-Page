import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Solution from "./components/Solution"
import Agency from "./components/Agency"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { useLenis } from './components/UseLenis' // import the useLenis hook

const App = () => {
  useLenis() // Initialize Lenis smooth scroll

  return (
    <div className='text-white'>
      <Navbar />
      <Hero />
      <Cards />
      <Solution />
      <Agency />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
