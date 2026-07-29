import { MapPin, Briefcase, GraduationCap, Scale, Laptop } from 'lucide-react'

// Knobbe brand blue: #1B5EA6 (matched from their site)
const KNOBBE_BLUE = '#1B5EA6'

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div className="reveal">
          <div className="flex items-center gap-5 mb-8">
            <div className="relative flex-shrink-0">
              <img
                src="/avatar.jpg"
                alt="De Van Do"
                className="w-20 h-20 rounded-full object-cover"
                style={{ border: '2px solid rgba(0,212,255,0.4)' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.parentElement!.parentElement!.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 rounded-full" style={{ boxShadow: '0 0 20px rgba(0,212,255,0.25)' }} />
            </div>
            <div>
              <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>De Van Do</p>
              <p className="text-sm" style={{ color: '#00D4FF' }}>Sr. Network Admin & IT Support Manager</p>
            </div>
          </div>

          <span className="tag mb-4 block w-fit">About Me</span>
          <h2 className="section-heading text-white mb-6">
            25 years.<br />Every layer of IT.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I own enterprise infrastructure and service delivery for a 700-user national IP law
            firm across 7 U.S. offices — network, identity, cloud, virtualization, and security —
            while leading the 5-person team that supports it. I started as a Systems Support
            Technician in 2001 and moved through four roles to get here, taking on more scope at
            each step rather than more of the same work.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Working the full stack at one organization means I've owned systems end to end rather
            than inheriting them mid-life — I built the document management platform through four
            migrations, stood up the cloud identity and endpoint security programs, and absorbed a
            departing administrator's entire portfolio without a service interruption. I'm now
            looking to bring that ownership to a broader IT leadership role.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '150ms' }}>
          {[
            { icon: null, label: 'Current Employer', value: 'Knobbe Martens', sub: 'IP + Technology Law', url: 'https://www.knobbe.com/' },
            { icon: MapPin, label: 'Location', value: 'San Diego, CA' },
            { icon: Briefcase, label: 'Work Type', value: 'Remote · Full-time' },
            { icon: GraduationCap, label: 'Education', value: 'BS Info Decision Systems', sub: 'SDSU · 2000' },
            { icon: Scale, label: 'Industry', value: 'Legal Tech · Law Firm IT' },
            { icon: Laptop, label: 'Work Style', value: 'Remote · Hybrid Considered' },
          ].map((item) => {
            const Icon = item.icon
            // Shared card contents. We build them once, then wrap in either an
            // <a> (when the card links somewhere) or a plain <div> (when it doesn't).
            // Using a real <a> makes the link keyboard-focusable, screen-reader
            // friendly, and right-clickable — none of which a div+onClick gives you.
            const inner = (
              <>
                {/* Knobbe card — uses their actual brand blue */}
                {Icon === null ? (
                  <div className="mb-3 flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded text-xs font-bold tracking-tight"
                      style={{ background: KNOBBE_BLUE, color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>
                      KM
                    </div>
                    <span className="text-xs text-gray-400">knobbe.com ↗</span>
                  </div>
                ) : (
                  <Icon size={22} strokeWidth={1.5} className="mb-3" style={{ color: '#00D4FF' }} />
                )}
                <p className="text-xs text-gray-500 mb-1 tracking-wide uppercase">{item.label}</p>
                {item.url
                  ? <p className="font-semibold text-sm" style={{ color: KNOBBE_BLUE }}>{item.value}</p>
                  : <p className="text-white font-medium text-sm">{item.value}</p>
                }
                {item.sub && <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>}
              </>
            )

            // `no-underline` keeps the anchor visually identical to the old div.
            const cardClass = 'skill-card flex flex-col no-underline' + (item.url ? ' cursor-pointer' : '')

            return item.url ? (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={cardClass}
                style={{ borderColor: `${KNOBBE_BLUE}55` }}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className={cardClass}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
