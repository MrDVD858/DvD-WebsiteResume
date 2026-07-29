import { FolderLock, Layers } from 'lucide-react'

// Knobbe brand blue: #1B5EA6
const KNOBBE_BLUE = '#1B5EA6'

const experience = [
  {
    role: 'Sr. Network Administrator & IT Support Manager',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: 'Jan 2026 \u2013 Present',
    type: 'Dual Role \u00b7 Remote \u00b7 Full-time',
    desc: 'Promoted to a dual role holding accountability for enterprise network, identity, cloud, and security infrastructure alongside leadership of the firm\u2019s 5-person Systems Support organization. Sole enterprise administrator for iManage Cloud v2, including ethical wall governance. Final escalation authority for the support team.',
    bullets: [
      'Lead and develop a 5-person Systems Support team; serve as final escalation authority and technical liaison between support operations, infrastructure, and firm leadership',
      'Own FreshService ITSM as platform administrator \u2014 led selection and implementation to replace the firm\u2019s legacy ticketing platform, and configured role-based technician permissions and rotation-based ticket assignment to distribute workload equitably',
      'Assumed the full infrastructure and application portfolio of a departing systems administrator with no service interruption and no added headcount \u2014 S2D cluster, Relativity, and the endpoint security stack',
      'Sole enterprise administrator for iManage Cloud v2 \u2014 workspace governance, Security Policy Manager, and ethical wall administration enforcing client-matter confidentiality screens firm-wide',
      'Leading the transition from a domain-joined estate to Entra ID device management, spearheading a partner laptop pilot that removes personally-owned machines from the network',
      'Leading consolidation of remote access from dual VPN clients to a single Palo Alto GlobalProtect platform, timed to the Cisco AnyConnect renewal',
      'Own identity lifecycle firm-wide \u2014 AD security and distribution groups, Exchange Online across 795 mailboxes, and multi-platform deprovisioning across AD, iManage, and Adobe',
      'Administer Mimecast, Darktrace, and SysxSense; perform endpoint privilege administration within CyberArk EPM across 738 managed endpoints',
      'Authored infrastructure runbooks and operations documentation, enabling team-wide support of systems previously dependent on a single administrator',
    ],
    tags: ['Team Leadership', 'ITSM Implementation', 'iManage Cloud v2', 'Ethical Walls', 'Entra ID', 'GlobalProtect', 'Identity Lifecycle'],
  },
  {
    role: 'Sr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '2009 \u2013 Dec 2025',
    type: 'Remote \u00b7 Full-time',
    desc: 'Senior infrastructure owner for a 700-user national law firm. Led the multi-year document management modernization, the network refresh cycle, the move to Microsoft cloud identity, and the automation program \u2014 while delivering trial and relocation infrastructure nationwide.',
    bullets: [
      'Led a four-phase document management modernization \u2014 file shares \u2192 on-premise iManage \u2192 iManage Cloud \u2192 Cloud v2 \u2014 executing each cutover Friday to Sunday with users operational Monday morning',
      'Automated iManage workspace administration via PowerShell and REST API, replacing a five-year manual process \u2014 bulk restructuring of hundreds of documents per request went from days to minutes',
      'Extended automation across AD user and group administration, network share permissions, and Exchange Online mailbox delegation',
      'Own a recurring four-to-five-year network refresh cycle across seven offices; standardized firewall policy and remote access through Palo Alto NGFW, Panorama, and GlobalProtect',
      'Deployed and administered Entra ID, Microsoft 365, Exchange Online, and Intune in a hybrid domain-joined posture',
      'Maintain a five-node Hyper-V and Storage Spaces Direct cluster \u2014 25 production VMs across a 422 TB pool, including the Relativity estate on a dedicated 105 TB CSV, litigation NAS, and on-premises SQL',
      'Maintain Relativity and RelativityOne infrastructure \u2014 SQL Server, ARM archival, and storage capacity \u2014 through platform migration',
      'Executed 15 office relocations across all seven firm locations in Friday-to-Sunday windows with zero business-day interruption',
      'Delivered 30+ trial war room deployments over 15 years across Seattle, SF, LA, San Diego, and New York',
    ],
    tags: ['iManage', 'PowerShell', 'REST API', 'Palo Alto NGFW', 'Hyper-V', 'S2D', '422 TB', 'RelativityOne', 'Intune'],
  },
  {
    role: 'Jr. Network Administrator',
    company: 'Knobbe Martens',
    companyUrl: 'https://www.knobbe.com/',
    period: '2005 \u2013 2009',
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
    period: 'Jul 2001 \u2013 2005',
    type: 'Full-time \u00b7 Entry Level',
    desc: 'Began IT career delivering Tier 1 and Tier 2 support across the firm\u2019s Windows desktop, application, and network environment, including iManage client support and off-site trial and hearing setups.',
    bullets: [
      'Tier 1 and Tier 2 support across desktop, hardware, software, and network',
      'Supported iManage DeskSite/FileSite clients and off-site trial and hearing setups',
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
