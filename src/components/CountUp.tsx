import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  /** The finished value as you want it displayed, e.g. "25+", "700", "5". */
  value: string
  /** How long the count animation runs, in ms. */
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * CountUp animates a number from 0 up to its final value the first time it
 * scrolls into view, then stops observing.
 *
 * It accepts the value as a *string* ("25+", "700") rather than a number so the
 * suffix stays attached — we split the digits off the front, animate those, and
 * glue the suffix back on for rendering. That means the caller never has to pass
 * the number and the "+" as two separate props.
 *
 * Respects prefers-reduced-motion: if the visitor has asked their OS to limit
 * animation, we skip straight to the final value instead of counting.
 */
export default function CountUp({ value, duration = 1400, className, style }: CountUpProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  // Split "25+" into 25 and "+". The regex captures leading digits; anything
  // left over (a "+", a "%", nothing at all) becomes the suffix.
  const target = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[\d]/g, '')

  // Start at the target when motion is reduced, so nothing ever animates.
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [display, setDisplay] = useState(prefersReducedMotion ? target : 0)

  useEffect(() => {
    if (prefersReducedMotion) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        // Stop watching immediately — this should only ever run once.
        observer.unobserve(el)

        const start = performance.now()

        function tick(now: number) {
          // progress goes 0 → 1 over `duration` ms
          const progress = Math.min((now - start) / duration, 1)

          // easeOutQuart: fast at first, slows as it approaches the target.
          // This is what makes it feel like it's "landing" on the number
          // rather than stopping abruptly.
          const eased = 1 - Math.pow(1 - progress, 4)

          setDisplay(Math.round(eased * target))

          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, prefersReducedMotion])

  return (
    <p ref={ref} className={className} style={style}>
      {display}
      {suffix}
    </p>
  )
}
