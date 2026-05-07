const skills = [
  {
    icon: '🌐',
    title: 'Network Infrastructure',
    desc: 'Cisco switching & routing, VLANs, VPN, Palo Alto NGFW, WAN/LAN architecture across 7 national offices.',
    tags: ['Cisco', 'Palo Alto NGFW', 'VPN', 'WAN/LAN'],
  },
  {
    icon: '☁️',
    title: 'Microsoft Stack',
    desc: 'Active Directory, Azure AD (Entra ID), Microsoft 365, Windows Server 2008–2022, Intune, and PowerShell automation.',
    tags: ['Azure AD', 'M365', 'Windows Server', 'Intune'],
  },
  {
    icon: '📁',
    title: 'iManage DMS',
    desc: 'Sole iManage administrator for 700 users — document restores, workspace lifecycle, Security Policy Management, and Cloud v2 migration lead.',
    tags: ['iManage Cloud v2', 'SPM', 'DMS', 'Legal Tech'],
  },
  {
    icon: '⚖️',
    title: 'Litigation Support',
    desc: 'Trial war room deployment across 6+ U.S. cities — AV/network config, on-site and remote support for active trial teams.',
    tags: ['War Room', 'Trial Support', 'AV/Network', 'Multi-city'],
  },
  {
    icon: '🛡️',
    title: 'Security & Compliance',
    desc: 'Mimecast, Darktrace Antigena Email, Identity & Access Management, endpoint security via Intune, CompTIA Security+ certified.',
    tags: ['Mimecast', 'Darktrace', 'IAM', 'CompTIA Sec+'],
  },
  {
    icon: '👥',
    title: 'Team & IT Leadership',
    desc: 'Managing and mentoring a 5-person Systems Support team — restructured ticket ownership, eliminated chronic ticket-passing, bridging helpdesk to firm strategy.',
    tags: ['Team Management', 'FreshService', 'ITSM', 'Workflow Optimization'],
  },
]

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-28 px-6 md:px-12 lg:px-20" style={{ background: 'rgba(0,212,255,0.02)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <span className="tag mb-4 block w-fit">Core Expertise</span>
          <h2 className="section-heading text-white">
            What I bring<br />to the table.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <div key={s.title} className="skill-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md"
                    style={{ background: 'rgba(0,212,255,0.08)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
