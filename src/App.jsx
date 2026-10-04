import Nav from './components/Nav'
import Hero from './components/Hero'
import Academy from './components/Academy'
import FirstClass from './components/FirstClass'
import Pillars from './components/Pillars'
import Professor from './components/Professor'
import Schedule from './components/Schedule'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Academy />
        <FirstClass />
        <Pillars />
        <Professor />
        <Schedule />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
