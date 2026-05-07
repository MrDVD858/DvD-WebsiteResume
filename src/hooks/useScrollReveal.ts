import { useEffect } from 'react'

// Watches for .reveal elements entering the viewport and adds 'visible' class.
// Re-observes on route changes by watching for DOM mutations.
export function useScrollReveal() {
  useEffect(() => {
    function observe() {
      const els = document.querySelectorAll('.reveal:not(.visible)')
      els.forEach((el) => observer.observe(el))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    observe()

    // Also observe any elements added later (e.g. lazy sections)
    const mutationObs = new MutationObserver(observe)
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObs.disconnect()
    }
  }, [])
}
