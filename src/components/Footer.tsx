export default function Footer() {
  const year = new Date().getFullYear()
  const month = new Date().toLocaleString('default', { month: 'long' })

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#00D4FF' }}>
          DVD
        </span>
        <p className="text-gray-600 text-sm text-center">
          © {year} De Van Do · San Diego, CA
          <span className="mx-2 text-gray-800">·</span>
          <span className="text-gray-700">Updated {month} {year}</span>
        </p>
        <a href="https://linkedin.com/in/de-van-do-68a89825b/" target="_blank" rel="noreferrer"
          className="text-sm text-gray-500 hover:text-white transition-colors">
          LinkedIn ↗
        </a>
      </div>
    </footer>
  )
}
