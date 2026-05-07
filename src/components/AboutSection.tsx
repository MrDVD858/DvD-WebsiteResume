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
            25 years. One firm.<br />Every layer of IT.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            My entire 25-year IT career has been built at Knobbe Martens — a 700-user national
            law firm with 7 offices across the U.S. I started as a Systems Support Technician
            in 2001 and earned my way up to a dual senior leadership role, advancing ahead of
            more tenured peers at every step.
          </p>
          <p className="text-gray-400 leading-relaxed">
            That depth of tenure isn't just loyalty — it's institutional knowledge that can't
            be hired off a job board. I know the infrastructure, the people, the legal workflows,
            and the high-stakes moments that matter most: trial week, system migrations, and
            keeping 700 users running without interruption.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '150ms' }}>
          {[
            { icon: null, label: 'Current Employer', value: 'Knobbe Martens', sub: 'IP + Technology Law', url: 'https://www.knobbe.com/' },
            { icon: '📍', label: 'Location', value: 'San Diego, CA' },
            { icon: '💼', label: 'Work Type', value: 'Remote · Full-time' },
            { icon: '🎓', label: 'Education', value: 'BS Info Decision Systems', sub: 'SDSU · 2000' },
            { icon: '⚖️', label: 'Industry', value: 'Legal Tech · Law Firm IT' },
            { icon: '🤝', label: 'Open To', value: 'Remote · Hybrid Roles' },
          ].map((item) => (
            <div
              key={item.label}
              className={'skill-card flex flex-col' + (item.url ? ' cursor-pointer' : '')}
              style={item.url ? { borderColor: 'rgba(0,212,255,0.2)' } : {}}
              onClick={() => item.url && window.open(item.url, '_blank')}
            >
              {/* Knobbe card gets a styled logo treatment instead of emoji */}
              {item.icon === null ? (
                <div className="mb-3 flex items-center gap-2">
                  <div className="px-2 py-0.5 rounded text-xs font-bold tracking-tight"
                    style={{ background: '#1B3A6B', color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>
                    KM
                  </div>
                  <span className="text-xs text-gray-600">knobbe.com ↗</span>
                </div>
              ) : (
                <span className="text-2xl mb-3 block">{item.icon}</span>
              )}
              <p className="text-xs text-gray-500 mb-1 tracking-wide uppercase">{item.label}</p>
              {item.url
                ? <p className="font-semibold text-sm" style={{ color: '#00D4FF' }}>{item.value}</p>
                : <p className="text-white font-medium text-sm">{item.value}</p>
              }
              {item.sub && <p className="text-xs text-gray-600 mt-0.5">{item.sub}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
