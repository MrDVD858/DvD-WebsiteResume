const activeCerts = [
  {
    name: 'CompTIA Security+ ce',
    issuer: 'CompTIA',
    date: 'Expires Jun 4, 2028',
    logo: 'https://images.credly.com/size/340x340/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png',
    credlyUrl: 'https://www.credly.com/org/comptia/badge/comptia-security-ce-certification',
    color: '#CC0000',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Issued Sep 7, 2022',
    logo: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
    credlyUrl: 'https://www.credly.com/org/microsoft-certification/badge/microsoft-certified-azure-fundamentals',
    color: '#0078D4',
  },
  {
    name: 'Explore Identity Foundations',
    issuer: 'Okta',
    date: 'Issued Aug 9, 2025',
    logo: 'https://images.credly.com/size/340x340/images/a5a5f3c7-c044-4587-be32-c4b5c7f19498/image.png',
    credlyUrl: 'https://www.credly.com/org/okta/badge/okta-certified-professional',
    color: '#00D4FF',
  },
  {
    name: 'Google AI Essentials V1',
    issuer: 'Coursera / Google',
    date: 'Issued Sep 1, 2024',
    logo: 'https://images.credly.com/size/340x340/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/image.png',
    credlyUrl: null,
    color: '#4285F4',
  },
]

const additionalCerts = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Expired Aug 26, 2025',
    logo: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credlyUrl: null,
    color: '#FF9900',
  },
  {
    name: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Expired Aug 26, 2025',
    logo: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    credlyUrl: null,
    color: '#FF9900',
  },
  {
    name: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    date: 'Expired Oct 31, 2025',
    logo: 'https://images.credly.com/size/340x340/images/2030e43f-8003-4d4b-9630-847add403c87/image.png',
    credlyUrl: null,
    color: '#00A850',
  },
  {
    name: 'CCT Routing and Switching',
    issuer: 'Cisco',
    date: 'Expired Oct 12, 2025',
    logo: 'https://images.credly.com/size/340x340/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/image.png',
    credlyUrl: null,
    color: '#1BA0D7',
  },
]

const inProgressCerts = [
  {
    name: 'Microsoft AZ-104: Azure Administrator',
    issuer: 'Microsoft',
    color: '#0078D4',
    logo: 'https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png',
  },
  {
    name: 'Cisco CCNA',
    issuer: 'Cisco',
    color: '#1BA0D7',
    logo: 'https://images.credly.com/size/340x340/images/683783d8-eaac-4cf3-a14d-11bd8a36321d/ccna_600.png',
  },
]

function CertCard({ cert, status }: { cert: any, status: 'active' | 'expired' }) {
  const isActive = status === 'active'
  return (
    <div
      className={'skill-card reveal flex flex-col' + (cert.credlyUrl ? ' cursor-pointer' : '')}
      onClick={() => cert.credlyUrl && window.open(cert.credlyUrl, '_blank')}
      title={cert.credlyUrl ? 'Verify on Credly ↗' : ''}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            opacity: isActive ? 1 : 0.7 }}>
          <img src={cert.logo} alt={cert.name}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement
              t.style.display = 'none'
              t.parentElement!.innerHTML = `<span style="font-size:16px;font-weight:700;color:${cert.color}">${cert.issuer.slice(0,2).toUpperCase()}</span>`
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-sm leading-snug mb-0.5"
            style={{ fontFamily: 'Space Grotesk, sans-serif', opacity: isActive ? 1 : 0.8 }}>
            {cert.name}
          </h3>
          <p className="text-xs" style={{ color: cert.color }}>{cert.issuer}</p>
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
        <span className="text-xs px-2.5 py-1 rounded-full"
          style={isActive ? {
            background: 'rgba(0,212,255,0.08)', color: '#00D4FF',
            border: '1px solid rgba(0,212,255,0.25)',
          } : {
            background: 'rgba(255,160,0,0.07)', color: '#F59E0B',
            border: '1px solid rgba(255,160,0,0.2)',
          }}>
          {isActive ? '✅ Active' : '⚠️ Expired'}
        </span>
        {cert.credlyUrl
          ? <span className="text-xs text-gray-600 hover:text-cyan-400 transition-colors">Verify ↗</span>
          : <span className="text-xs text-gray-700">{cert.date}</span>
        }
      </div>
    </div>
  )
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'rgba(0,212,255,0.02)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal mb-12">
          <span className="tag mb-4 block w-fit">Certifications</span>
          <h2 className="section-heading text-white">Verified &amp;<br />credentialed.</h2>
        </div>

        {/* ── Active ── */}
        <p className="text-xs text-gray-500 tracking-widest uppercase mb-4 reveal">Active Certifications</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {activeCerts.map((c) => (
            <CertCard key={c.name} cert={c} status="active" />
          ))}
        </div>

        {/* ── Additional / Expired ── */}
        <div className="reveal mb-2">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">Additional Credentials</p>
          <p className="text-xs text-gray-700 mb-4">Knowledge verified · Renewal planned</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {additionalCerts.map((c) => (
            <CertCard key={c.name} cert={c} status="expired" />
          ))}
        </div>

        {/* ── In Progress ── */}
        <div className="reveal skill-card" style={{ borderColor: 'rgba(255,200,0,0.25)', background: 'rgba(255,200,0,0.03)' }}>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              {inProgressCerts.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <img src={c.logo} alt={c.name} className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement
                        t.style.display = 'none'
                        t.parentElement!.innerHTML = `<span style="font-size:13px;font-weight:700;color:${c.color}">${c.issuer.slice(0,2)}</span>`
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{c.name}</p>
                    <p className="text-xs" style={{ color: c.color }}>{c.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-sm">Currently pursuing AZ-104 &amp; CCNA — deepening cloud and networking credentials to complement 25 years of enterprise infrastructure expertise.</p>
            </div>
            <span className="text-xs px-4 py-2 rounded-full flex-shrink-0"
              style={{ background: 'rgba(255,200,0,0.08)', color: '#FFC800', border: '1px solid rgba(255,200,0,0.25)' }}>
              🔄 In Progress
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
