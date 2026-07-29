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
    desc: 'Exchange Online across 795 mailboxes (560 user, 235 shared), Entra ID, Intune, and Active Directory — plus full identity lifecycle: group administration, delegation, and multi-platform deprovisioning of departing personnel.',
    tags: ['Entra ID', 'Exchange Online', 'Intune', 'Identity Lifecycle', 'Deprovisioning'],
  },
  {
    icon: FolderLock,
    title: 'iManage DMS',
    desc: 'Sole enterprise administrator for 700 users — workspace governance, Security Policy Manager, and ethical wall administration, owning technical enforcement of client-matter confidentiality screens firm-wide.',
    tags: ['iManage Cloud v2', 'SPM', 'Ethical Walls', 'Access Governance'],
  },
  {
    icon: Scale,
    title: 'Litigation Support',
    desc: '30+ trial war room deployments over 15 years, plus 15 office relocations across all seven firm locations — delivered in Friday-to-Sunday windows with users operational Monday and zero business-day interruption.',
    tags: ['War Room', '15 Relocations', 'Zero-downtime Cutover', 'Multi-city'],
  },
  {
    icon: ShieldCheck,
    title: 'Security & Compliance',
    desc: 'Administer Mimecast, Darktrace, and SysxSense across the firm; perform endpoint privilege administration within CyberArk EPM across 738 managed endpoints. CompTIA Security+ certified.',
    tags: ['Mimecast', 'Darktrace', 'SysxSense', 'CyberArk EPM', '738 Endpoints'],
  },
  {
    icon: Users,
    title: 'Team & IT Leadership',
    desc: 'Lead and develop a 5-person Systems Support team as final escalation authority. Own FreshService ITSM as platform administrator \u2014 led selection and implementation, and configured role-based technician permissions and rotation-based ticket assignment to distribute workload equitably.',
    tags: ['Team Leadership', 'ITSM Platform Owner', 'FreshService', 'Escalation Authority'],
  },
  {
    icon: Server,
    title: 'Virtualization & Storage',
    desc: 'Maintain a five-node Hyper-V and Storage Spaces Direct cluster hosting 25 production VMs across a 422 TB storage pool — capacity planning, health monitoring, and node maintenance.',
    tags: ['Hyper-V', 'Storage Spaces Direct', '5 Nodes · 25 VMs', '422 TB'],
  },
  {
    icon: Search,
    title: 'eDiscovery Infrastructure',
    desc: 'Maintain Relativity and RelativityOne infrastructure on a dedicated 105 TB Cluster Shared Volume — SQL Server, ARM archival, storage capacity — sustaining integration continuity for litigation teams.',
    tags: ['Relativity', 'RelativityOne', 'ARM', 'SQL Server', '105 TB'],
  },
  {
    icon: Terminal,
    title: 'Automation & Scripting',
    desc: 'Automated iManage workspace administration via PowerShell and REST API — bulk restructuring of hundreds of documents per request went from days of manual work to minutes. Extended to AD groups, share permissions, and mailbox delegation.',
    tags: ['PowerShell', 'iManage REST API', 'Microsoft Graph', 'Days → Minutes'],
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
