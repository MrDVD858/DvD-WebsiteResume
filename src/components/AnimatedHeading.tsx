import { useEffect, useState, CSSProperties } from 'react'

interface Props {
  lines: string[]
  className?: string
  style?: CSSProperties
  charDelay?: number
  initialDelay?: number
}

export default function AnimatedHeading({ lines, className = '', style, charDelay = 25, initialDelay = 300 }: Props) {
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay)
    return () => clearTimeout(t)
  }, [initialDelay])

  let globalIndex = 0
  return (
    <h1 className={className} style={style}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {[...line].map((char, ci) => {
            const delay = globalIndex++ * charDelay
            return (
              <span key={ci} style={{
                display: 'inline-block',
                opacity: started ? 1 : 0,
                transform: started ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 600ms ${delay}ms, transform 600ms ${delay}ms`,
              }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
