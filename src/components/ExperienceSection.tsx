import { FolderLock, Layers } from 'lucide-react'

// Knobbe brand blue: #1B5EA6
const KNOBBE_BLUE = '#1B5EA6'

const experience = [
  {
    role: 'Sr. Network Administrator & IT Support Manager',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: 'Jan 2026 – Present',
    type: 'Dual Role · Remote · Full-time',
    desc: 'Promoted to a dual role holding accountability for enterprise network, identity, cloud, and security infrastructure alongside leadership of the firm\u2019s 5-person Systems Support organization. Sole enterprise administrator for iManage Cloud v2 across all 700 users, and final escalation authority for the support team.',
    bullets: [
      'Lead and develop a 5-person Systems Support team — redesigned the ticket ownership model to eliminate chronic cross-team handoffs',
      'Assumed the full infrastructure and application portfolio of a departing systems administrator with no service interruption and no added headcount',
      'Own enterprise network, Active Directory, Entra ID, and Microsoft 365 operations supporting 700 users across 7 offices',
      'Sole enterprise administrator for iManage Cloud v2 — Security Policy Manager governance, workspace lifecycle, and document recovery',
      'Manage vendor relationships, renewals, and technical evaluations across the firm\u2019s platform and security stack',
    ],
    tags: ['Team Leadership', 'ITSM', 'iManage Cloud v2', 'SPM', 'Entra ID', 'M365', 'Vendor Management'],
  },
  {
    role: 'Sr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '2009 – Dec 2025',
    type: 'Remote · Full-time',
    desc: 'Senior infrastructure owner for a 700-user national law firm. Led the firm\u2019s multi-year document management modernization, a firm-wide network refresh, the move to Microsoft cloud identity, and the endpoint security program — while delivering trial infrastructure for active litigation nationwide.',
    bullets: [
      'Led a four-phase document management modernization — network file shares → on-premise iManage → iManage Cloud → Cloud v2 — for all 700 users',
      'Directed a firm-wide network refresh spanning core switching, routing, and Palo Alto next-generation firewalls',
      'Standardized firewall policy and remote access through Panorama and GlobalProtect, scaling secure connectivity through the shift to remote and hybrid work',
      'Deployed and administered Entra ID, Microsoft 365, Exchange Online, and Intune under centralized policy',
      'Implemented the firm\u2019s endpoint and email security stack — CyberArk Endpoint Privilege Management, Darktrace, Mimecast, and SysxSense',
      'Maintained Hyper-V and Storage Spaces Direct cluster infrastructure, including capacity planning and backup/restore verification',
      'Maintained Relativity and RelativityOne infrastructure — SQL Server, ARM archival, and storage — sustaining integration continuity for eDiscovery teams',
      'Automated bulk administration with PowerShell, Microsoft Graph, and REST APIs — workspace migrations, provisioning, and permission audits',
      'Delivered 30+ trial war room deployments over 15 years across Seattle, SF, LA, San Diego, and NY',
    ],
    tags: ['iManage', 'Palo Alto NGFW', 'Panorama', 'GlobalProtect', 'Entra ID', 'Intune', 'Hyper-V', 'S2D', 'RelativityOne', 'PowerShell', 'CyberArk'],
  },
  {
    role: 'Jr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '2005 – 2009',
    type: 'Promoted from Systems Support',
    desc: 'Primary on-site IT resource for the San Diego office with remote support responsibility across five additional national offices. Established the on-site litigation deployment practice later scaled firm-wide.',
    bullets: [
      'Owned network infrastructure and desktop support for the San Diego office',
      'Provided remote IT coverage for 5 additional national offices',
      'Assumed first litigation and trial support responsibilities',
    ],
    tags: ['Network Administration', 'Remote Office Support', 'Windows Server', 'Litigation Support'],
  },
  {
    role: 'Systems Support Technician',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: 'Jul 2001 – 2005',
    type: 'Full-time · Entry Level',
    desc: 'Began IT career delivering Tier 1 and Tier 2 support across the firm\u2019s Windows desktop, application, and network environment, including iManage client support and off-site trial and hearing setups.',
    bullets: [
      'Tier 1 and Tier 2 support across desktop, hardware, software, and network',
      'Supported iManage DeskSite/FileSite clients and off-site trial and hearing setups',
      'Promoted to Jr. Network Administrator within 4 years',
    ],
    tags: ['Desktop Support', 'iManage DeskSite/FileSite', 'Hardware Troubleshooting', 'Legal IT'],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <span className="tag mb-4 block w-fit">Experience</span>
        <h2 className="section-heading text-white">
          Four roles.<br />Increasing scope at every step.
        </h2>
      </div>

      {/* iManage callout banner */}
      <div className="reveal mb-12 skill-card" style={{ borderColor: 'rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.04)' }}>
        <div className="flex flex-wrap items-center gap-6">
          <FolderLock size={30} strokeWidth={1.5} style={{ color: '#00D4FF' }} className="flex-shrink-0" />
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

      {/* Scope-expansion callout — the strongest leadership signal on the page */}
      <div className="reveal mb-12 skill-card" style={{ borderColor: 'rgba(255,180,0,0.3)', background: 'rgba(255,180,0,0.03)' }}>
        <div className="flex flex-wrap items-center gap-6">
          <Layers size={30} strokeWidth={1.5} style={{ color: '#F59E0B' }} className="flex-shrink-0" />
          <div className="flex-1">
            <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Absorbed a Full Systems Administrator Portfolio — No Service Interruption
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              When a systems administrator departed, the firm consolidated their infrastructure and application
              responsibilities into my role rather than backfilling. Virtualization and storage, eDiscovery infrastructure,
              and the endpoint security stack — absorbed without added headcount and without a service interruption.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,180,0,0.1)', color: '#FFB400', border: '1px solid rgba(255,180,0,0.3)' }}>
              Expanded Scope
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
                  {/* Knobbe Martens company link uses their brand blue */}
                  <a href={job.companyUrl} target="_blank" rel="noreferrer"
                    className="text-sm font-medium mt-0.5 hover:underline inline-block"
                    style={{ color: KNOBBE_BLUE }}>
                    {job.company} ↗
                  </a>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-gray-400 text-sm">{job.period}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{job.type}</p>
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
