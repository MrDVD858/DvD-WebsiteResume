export default function Navbar() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-4">
      <div className="liquid-glass rounded-xl px-5 py-3 flex items-center justify-between max-w-6xl mx-auto">
        <span
          className="font-bold text-lg tracking-tight cursor-pointer"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00D4FF' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          DVD
        </span>

        <div className="hidden md:flex gap-8">
          {[
            { label: 'About',          id: 'about' },
            { label: 'Expertise',      id: 'expertise' },
            { label: 'Experience',     id: 'experience' },
            { label: 'Certifications', id: 'certifications' },
            { label: 'Contact',        id: 'contact' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="https://linkedin.com/in/de-van-do-68a89825b/"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
          style={{ background: '#00D4FF', color: '#000' }}
        >
          Connect on LinkedIn
        </a>
      </div>
    </nav>
  )
}
