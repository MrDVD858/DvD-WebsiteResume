import { useState } from 'react'

// Nav items live in one array so the desktop bar and the mobile menu
// stay in sync — edit here once and both render the same links.
const NAV_ITEMS = [
  { label: 'About',          id: 'about' },
  { label: 'Expertise',      id: 'expertise' },
  { label: 'Experience',     id: 'experience' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact',        id: 'contact' },
]

export default function Navbar() {
  // Tracks whether the mobile dropdown menu is open.
  const [open, setOpen] = useState(false)

  // Smooth-scroll to a section. We use scrollIntoView (not window.scrollTo)
  // because the page content lives inside a <main> wrapper, and scrollIntoView
  // is what reliably lands on the section here.
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // When a mobile link is tapped: scroll to it, then close the menu.
  function handleMobileNav(id: string) {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 pt-4">
      {/* Wrapper centers both the bar and the mobile menu together */}
      <div className="max-w-6xl mx-auto">

        {/* ---- Top bar ---- */}
        <div className="liquid-glass rounded-xl px-5 py-3 flex items-center justify-between">
          <span
            className="font-bold text-lg tracking-tight cursor-pointer"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00D4FF' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            DVD
          </span>

          {/* Desktop links — hidden on phones, shown from md up */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* LinkedIn CTA — hidden on phones (it moves into the mobile menu) */}
            <a
              href="https://linkedin.com/in/de-van-do-68a89825b/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-block text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200"
              style={{ background: '#00D4FF', color: '#000' }}
            >
              Connect on LinkedIn
            </a>

            {/* Hamburger button — only on phones (md:hidden) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden p-2 -mr-1 text-gray-200 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {/* Swap between an "X" (when open) and the hamburger icon (when closed).
                  Inline SVG keeps this dependency-free — no icon library needed yet. */}
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ---- Mobile dropdown menu ---- */}
        {/* Only rendered when open, and only ever visible on phones (md:hidden). */}
        {open && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 liquid-glass rounded-xl p-2 flex flex-col"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMobileNav(item.id)}
                className="text-left text-base text-gray-200 hover:text-white transition-colors py-3 px-3 rounded-lg bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://linkedin.com/in/de-van-do-68a89825b/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 text-center text-sm font-medium py-3 px-3 rounded-lg transition-colors"
              style={{ background: '#00D4FF', color: '#000' }}
            >
              Connect on LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
