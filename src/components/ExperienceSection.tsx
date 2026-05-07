const experience = [
  {
    role: 'Sr. Network Administrator & IT Support Manager',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: 'Jan 2026 – Present',
    type: 'Dual Role · Remote · Full-time',
    desc: 'Promoted to dual senior leadership role overseeing both enterprise network infrastructure and a 5-person Systems Support team. Serves as sole iManage DMS administrator for all 700 firm users, and as senior IT liaison bridging helpdesk operations, infrastructure, and firm-level technology strategy.',
    bullets: [
      'Manage and mentor 5-person Systems Support team — restructured ticket ownership workflows, eliminating chronic ticket-passing',
      'Sole iManage Cloud v2 DMS administrator: document restores, workspace creation/maintenance, Security Policy Management (SPM) for 700 users',
      'Maintain enterprise network, Active Directory, Azure AD, and M365 across HQ and all 7 remote offices',
      'Senior IT liaison between helpdesk operations, infrastructure, and firm leadership',
    ],
    tags: ['Team Leadership', 'iManage Cloud v2', 'SPM', 'Active Directory', 'Azure AD', 'M365', 'Cisco Networking', 'PowerShell'],
  },
  {
    role: 'Sr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '~2009 – Dec 2025',
    type: 'Remote · Full-time',
    desc: 'Primary iManage DMS administrator and senior network engineer for a 700-user national law firm. Led major infrastructure initiatives including a multi-phase iManage cloud migration, firm-wide network refresh, and 30+ trial war room deployments across the U.S. over 15 years',
    bullets: [
      'Led multi-phase iManage migration: file shares → on-premise → iManage Cloud → Cloud v2',
      'Coordinated firm-wide network refresh — core switches, routers, and Palo Alto NGFW firewalls',
      'Deployed trial war room technology across 30+ trial venues across the U.S. — hotel conference rooms transformed into full litigation command centers over 2–3 day setups, with ongoing on-site and remote support throughout active trials in cities including Seattle, SF, LA, San Diego, and NY',
      'Coordinated IT for multiple national office relocations',
    ],
    tags: ['iManage', 'SPM', 'Palo Alto Firewall', 'Cisco', 'Windows Server', 'Active Directory', 'VPN', 'Litigation Support'],
  },
  {
    role: 'Jr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '~2005 – ~2009',
    type: 'Promoted from Systems Support',
    desc: 'Primary on-site IT resource for the San Diego office with remote support responsibilities across SF, LA, Seattle, NY, and Washington D.C. Began supporting litigation teams with trial preparation and on-site technical logistics.',
    bullets: [
      'Owned all network infrastructure and desktop support for San Diego office',
      'Provided remote IT coverage for 5 additional national offices',
      'Began litigation and trial support responsibilities',
    ],
    tags: ['Network Administration', 'End-user Support', 'Remote Office Support', 'Windows Server', 'Litigation Support'],
  },
  {
    role: 'Systems Support Technician',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: 'Jul 2001 – ~2005',
    type: 'Full-time · Entry Level',
    desc: 'Started IT career providing desktop, hardware, and software support in a fully on-premise Windows environment. Promoted to Jr. Network Administrator within 4 years, advancing ahead of a more tenured peer.',
    bullets: [
      'Desktop, hardware, and software support across Windows XP/2000 environment',
      'Promoted to Jr. Network Admin within 4 years, advancing ahead of a more tenured peer',
    ],
    tags: ['Desktop Support', 'Windows XP/2000', 'Hardware Troubleshooting', 'Legal IT'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <span className="tag mb-4 block w-fit">Experience</span>
        <h2 className="section-heading text-white">
          25 years at one firm.<br />Every role earned.
        </h2>
      </div>

      {/* iManage callout banner */}
      <div className="reveal mb-12 skill-card" style={{ borderColor: 'rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.04)' }}>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-3xl">📁</div>
          <div className="flex-1">
            <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Sole iManage DMS Administrator — 700 Users
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              One of the rarest skill sets in legal IT. Full lifecycle ownership of iManage Cloud v2 across the entire firm —
              Security Policy Management, document restores, workspace governance, and a multi-phase cloud migration from on-premise to Cloud v2.
              When iManage goes down, I'm the call.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="tag">iManage Cloud v2</span>
          </div>
        </div>
      </div>

      {/* War room callout banner */}
      <div className="reveal mb-12 skill-card" style={{ borderColor: 'rgba(255,180,0,0.3)', background: 'rgba(255,180,0,0.03)' }}>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-3xl">⚖️</div>
          <div className="flex-1">
            <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Trial War Room Specialist — 30+ Deployments Over 15 Years
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformed hotel conference rooms into fully operational litigation command centers — network, AV, secure access —
              in 2–3 day deployments ahead of active trials. On-site and remote support throughout proceedings in Seattle, SF, LA, San Diego, NY, and beyond.
              High-stakes, zero-margin-for-error work.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,180,0,0.1)', color: '#FFB400', border: '1px solid rgba(255,180,0,0.3)' }}>
              Litigation Support
            </span>
          </div>
        </div>
      </div>

      <div className="relative pl-12">
        <div className="timeline-line" />

        {experience.map((job, i) => (
          <div key={i} className="reveal relative mb-10 last:mb-0" style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="absolute -left-12 top-2 flex items-center justify-center" style={{ width: 40 }}>
              <div className="timeline-dot" />
            </div>

            <div className="skill-card">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {job.role}
                  </h3>
                  <a href={job.companyUrl} target="_blank" rel="noreferrer"
                    className="text-sm font-medium mt-0.5 hover:underline inline-block"
                    style={{ color: '#00D4FF' }}>
                    {job.company} ↗
                  </a>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-400 text-sm">{job.period}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{job.type}</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">{job.desc}</p>

              <ul className="mb-4 space-y-1.5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="text-gray-500 text-sm flex gap-2">
                    <span style={{ color: '#00D4FF', flexShrink: 0 }}>›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tags.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
