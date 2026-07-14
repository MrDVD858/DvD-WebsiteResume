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

  return (
    <main style={{ background: '#0C1526' }}>
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
