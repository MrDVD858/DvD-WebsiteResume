export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-3xl mx-auto text-center reveal">
        <span className="tag mb-6 block w-fit mx-auto">Get In Touch</span>
        <h2 className="section-heading text-white mb-6">
          Let's connect.
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Whether you're looking for an experienced IT leader with deep legal-sector expertise,
          want to discuss enterprise infrastructure, or just want to connect — I'm happy to talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="https://linkedin.com/in/de-van-do-68a89825b/" target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-xl font-medium text-black transition-opacity hover:opacity-90 text-center"
            style={{ background: '#00D4FF', fontFamily: 'Space Grotesk, sans-serif' }}>
            Connect on LinkedIn →
          </a>
          <a href="mailto:dvando@gmail.com"
            className="liquid-glass border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:border-cyan-400/50 transition-colors text-center">
            dvando@gmail.com →
          </a>
        </div>

        <div className="border-t border-white/10 pt-12">
          <p className="text-xs text-gray-600 tracking-widest uppercase mb-6">Top Skills</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Network Administration', 'iManage DMS', 'Palo Alto Firewall',
              'Active Directory', 'Azure AD (Entra ID)', 'Microsoft 365',
              'PowerShell', 'Cisco Networking', 'Security Policy Management',
              'Litigation Support', 'IT Team Management', 'Windows Server',
              'CompTIA Security+', 'Cloud Migration', 'Legal Tech',
            ].map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
