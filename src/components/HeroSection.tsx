import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'
import NetworkBackground from './NetworkBackground'

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      <NetworkBackground />
      {/* <video className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL} autoPlay loop muted playsInline /> */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(3,7,18,0.2) 0%, rgba(3,7,18,0.4) 60%, rgba(3,7,18,0.97) 100%)' }} />

      <div className="relative z-20 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 lg:pb-24 max-w-6xl mx-auto w-full">
        <FadeIn delay={100} duration={800}>
          <span className="tag mb-6 block w-fit">San Diego, CA · Remote</span>
        </FadeIn>

        <AnimatedHeading
          lines={['De Van Do']}
          className="text-white mb-2"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(52px, 9vw, 110px)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
          initialDelay={300}
          charDelay={40}
        />

        <FadeIn delay={900} duration={900}>
          <p className="text-xl md:text-2xl font-light mb-2" style={{ color: '#00D4FF' }}>
            Sr. Network Administrator & IT Support Manager
          </p>
        </FadeIn>

        <FadeIn delay={1100} duration={900}>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
            25 years building and running enterprise IT at a 700-user national law firm —
            network infrastructure, iManage DMS, litigation war rooms, and team leadership across 7 offices.
          </p>
        </FadeIn>

        <FadeIn delay={1400} duration={900}>
          <div className="flex flex-wrap gap-4">
            <a href="#experience"
              className="px-8 py-3 rounded-lg font-medium text-black transition-opacity hover:opacity-90"
              style={{ background: '#00D4FF' }}>
              View My Experience
            </a>
            <a href="#contact"
              className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:border-cyan-400/50 transition-colors">
              Get In Touch
            </a>
            {/* 📄 Download Resume — drop a file named "resume.pdf" into /public/ to activate */}
            <a href="/resume.pdf" download="DeVanDo-Resume.pdf"
              className="liquid-glass border border-white/10 text-gray-400 hover:text-white px-8 py-3 rounded-lg font-medium hover:border-white/30 transition-colors flex items-center gap-2">
              <span>↓</span> Resume PDF
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1700} duration={900}>
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '700', label: 'User Enterprise' },
              { value: '7', label: 'National Offices' },
              { value: '30+', label: 'War Room Deployments' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00D4FF' }}>{s.value}</p>
                <p className="text-xs text-gray-500 mt-1 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
