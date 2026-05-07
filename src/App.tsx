import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import ExperienceSection from './components/ExperienceSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    // Debug: log all section ids found in the DOM after render
    const sections = document.querySelectorAll('section[id]')
    console.log('Sections found:', Array.from(sections).map(s => s.id))
  }, [])

  return (
    <main style={{ background: '#030712' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
