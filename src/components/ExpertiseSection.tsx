import { Network, Cloud, FolderLock, Scale, ShieldCheck, Users, Server, Terminal, Search } from 'lucide-react'

const skills = [
  {
    icon: Network,
    title: 'Network Infrastructure',
    desc: 'Cisco switching & routing, VLANs, VPN, Palo Alto NGFW, WAN/LAN architecture across 7 national offices.',
    tags: ['Cisco', 'Palo Alto NGFW', 'VPN', 'WAN/LAN'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Identity',
    desc: 'Microsoft Entra ID, Azure, Microsoft 365, Exchange Online, Intune, Conditional Access and MFA, Active Directory, Group Policy, and Windows Server.',
    tags: ['Entra ID', 'M365', 'Exchange Online', 'Intune', 'Windows Server'],
  },
  {
    icon: FolderLock,
    title: 'iManage DMS',
    desc: 'Sole iManage administrator for 700 users — document restores, workspace lifecycle, Security Policy Management, and Cloud v2 migration lead.',
    tags: ['iManage Cloud v2', 'SPM', 'DMS', 'Legal Tech'],
  },
  {
    icon: Scale,
    title: 'Litigation Support',
    desc: '30+ trial war room deployments over 15 years — full litigation command centers built in 2–3 days under zero-fail conditions across Seattle, SF, LA, San Diego, and NY.',
    tags: ['War Room', 'Trial Support', 'Multi-city', 'Zero-fail Delivery'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'CyberArk Endpoint Privilege Management, Darktrace, Mimecast, SysxSense, identity & access governance, permission auditing. CompTIA Security+ certified.',
    tags: ['CyberArk EPM', 'Darktrace', 'Mimecast', 'SysxSense', 'IAM'],
  },
  {
    icon: Users,
    title: 'Team & IT Leadership',
    desc: 'Lead and develop a 5-person Systems Support team — ticket ownership redesign, SLA and escalation management, vendor relationships, and technology planning with firm leadership.',
    tags: ['Team Leadership', 'ITSM', 'FreshService', 'Vendor Management', 'Escalation'],
  },
  {
    icon: Server,
    title: 'Virtualization & Storage',
    desc: 'Hyper-V and Storage Spaces Direct cluster infrastructure, failover clustering, Cluster Shared Volumes, enterprise file services, capacity planning, and backup/restore verification.',
    tags: ['Hyper-V', 'Storage Spaces Direct', 'Failover Clustering', 'Backup/Restore'],
  },
  {
    icon: Search,
    title: 'eDiscovery Infrastructure',
    desc: 'Maintain Relativity and RelativityOne infrastructure — SQL Server, ARM archival, and storage capacity — sustaining integration continuity for litigation and eDiscovery teams.',
    tags: ['Relativity', 'RelativityOne', 'ARM', 'SQL Server'],
  },
  {
    icon: Terminal,
    title: 'Automation & Scripting',
    desc: 'PowerShell, Microsoft Graph API, and REST-driven bulk administration — workspace and folder migrations, account provisioning, and permission audits at firm scale.',
    tags: ['PowerShell', 'Microsoft Graph', 'REST API', 'Bulk Administration'],
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
          {skills.map((s, i) => {
            // s.icon is a lucide component; assign to a capitalized local so JSX
            // treats it as a component rather than an HTML tag.
            const Icon = s.icon
            return (
              <div key={s.title} className="skill-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <Icon size={30} strokeWidth={1.5} className="mb-4" style={{ color: '#00D4FF' }} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
