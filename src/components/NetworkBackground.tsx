import { useEffect, useRef } from 'react'

// NetworkBackground — Rotating globe with real country outlines from GeoJSON.
// The country dataset is loaded on demand (desktop only) via a dynamic import(),
// which Vite splits into its own hashed chunk. That means: it's build-managed so
// it can't 404 like a hand-written /continents.json path, there's no separate
// public fetch to fail, AND phones (which hide the globe) never download it.
//
// Two deliberate behaviors:
//  1. It only runs on tablet/desktop (>= 768px). On phones the globe sat directly
//     behind the hero text and collided with it, so we skip it entirely there —
//     this also avoids running an animation loop on mobile (battery friendly).
//  2. City markers are drawn as subtle dots only — no text labels — so the globe
//     reads as background texture instead of competing place-names over the copy.

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId = 0
    let angle = Math.PI  // start with Americas facing viewer
    let W = 0, H = 0, CX = 0, CY = 0, R = 0
    // Country outline rings — populated on demand (desktop only) by applyMode().
    let countryRings: number[][][] = []
    let cancelled = false  // guards the async import against a mid-load unmount

    // Only animate from md up. matchMedia lets us react if the user rotates the
    // phone or resizes across the breakpoint without reloading.
    const desktop = window.matchMedia('(min-width: 768px)')

    const cities = [
      { lat: 47.6,  lng: -122.3 },  // Seattle
      { lat: 37.7,  lng: -122.4 },  // San Francisco
      { lat: 34.0,  lng: -118.2 },  // Los Angeles
      { lat: 32.7,  lng: -117.1 },  // San Diego
      { lat: 40.7,  lng:  -74.0 },  // New York
    ]

    const arcPairs: [number, number][] = [
      [0,1],[0,3],[1,2],[1,3],[2,3],[2,4],[3,4],[0,4],[1,4]
    ]
    const arcs = arcPairs.map(([f, t]) => ({
      from: f, to: t,
      progress: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      active: Math.random() > 0.3
    }))

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      W = canvas!.width = rect.width * devicePixelRatio
      H = canvas!.height = rect.height * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      W /= devicePixelRatio; H /= devicePixelRatio
      CX = W / 2; CY = H / 2
      R = Math.min(W, H) * 0.42
    }

    function project(lat: number, lng: number, rotDeg: number) {
      const phi = (90 - lat) * Math.PI / 180
      const theta = (lng + rotDeg) * Math.PI / 180
      const x = R * Math.sin(phi) * Math.cos(theta)
      const y = R * Math.cos(phi)
      const z = R * Math.sin(phi) * Math.sin(theta)
      return { x: CX - x, y: CY - y, z, visible: z > 0 }  // negated x fixes east/west mirroring
    }

    function drawGlobe(rotDeg: number) {
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath(); let first = true
        for (let lng = -180; lng <= 180; lng += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.1)'; ctx.lineWidth = 0.4; ctx.stroke()
      }
      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath(); let first = true
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.1)'; ctx.lineWidth = 0.4; ctx.stroke()
      }
    }

    function drawCountries(rotDeg: number) {
      countryRings.forEach(ring => {
        ctx.beginPath()
        let first = true
        let prevVisible = false

        ring.forEach(([lat, lng]) => {
          const p = project(lat, lng, rotDeg)
          if (p.visible) {
            if (first || !prevVisible) {
              ctx.moveTo(p.x, p.y)
            } else {
              ctx.lineTo(p.x, p.y)
            }
            first = false
            prevVisible = true
          } else {
            if (prevVisible) {
              ctx.stroke()
              ctx.beginPath()
            }
            prevVisible = false
          }
        })
        ctx.strokeStyle = 'rgba(0,212,255,0.6)'
        ctx.lineWidth = 1.0
        ctx.stroke()
      })
    }

    function drawArc(
      p1: {x:number;y:number;z:number;visible:boolean},
      p2: {x:number;y:number;z:number;visible:boolean},
      progress: number
    ) {
      if (!p1.visible || !p2.visible) return
      const alpha = Math.min((p1.z+R)/(R*1.2), (p2.z+R)/(R*1.2), 0.9)
      if (alpha <= 0) return
      const mx = (p1.x+p2.x)/2
      const my = (p1.y+p2.y)/2 - Math.hypot(p2.x-p1.x, p2.y-p1.y)*0.38

      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.quadraticCurveTo(mx, my, p2.x, p2.y)
      ctx.strokeStyle = `rgba(0,212,255,${alpha*0.15})`
      ctx.lineWidth = 0.8; ctx.stroke()

      const t = progress, t2 = Math.max(0, t-0.1)
      const px  = (1-t)*(1-t)*p1.x  + 2*(1-t)*t*mx  + t*t*p2.x
      const py  = (1-t)*(1-t)*p1.y  + 2*(1-t)*t*my  + t*t*p2.y
      const px2 = (1-t2)*(1-t2)*p1.x + 2*(1-t2)*t2*mx + t2*t2*p2.x
      const py2 = (1-t2)*(1-t2)*p1.y + 2*(1-t2)*t2*my + t2*t2*p2.y

      const grad = ctx.createLinearGradient(px2,py2,px,py)
      grad.addColorStop(0,'rgba(0,212,255,0)')
      grad.addColorStop(1,`rgba(0,212,255,${alpha*0.9})`)
      ctx.beginPath(); ctx.moveTo(px2,py2); ctx.lineTo(px,py)
      ctx.strokeStyle = grad; ctx.lineWidth = 1.8; ctx.stroke()

      ctx.beginPath(); ctx.arc(px,py,2.5,0,Math.PI*2)
      ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill()
    }

    // City marker: glow + dot only. Text labels were removed because they
    // overlapped the hero headline and description.
    function drawCity(p: {x:number;y:number;z:number;visible:boolean}) {
      if (!p.visible) return
      const alpha = Math.min(1, (p.z+R)/(R*1.2))
      ctx.beginPath(); ctx.arc(p.x,p.y,9,0,Math.PI*2)
      ctx.fillStyle = `rgba(0,212,255,${alpha*0.07})`; ctx.fill()
      ctx.beginPath(); ctx.arc(p.x,p.y,3.5,0,Math.PI*2)
      ctx.fillStyle = `rgba(0,212,255,${alpha})`; ctx.fill()
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2)
      ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill()
    }

    function draw() {
      ctx.clearRect(0,0,W,H)
      ctx.fillStyle = '#030712'; ctx.fillRect(0,0,W,H)

      const grd = ctx.createRadialGradient(CX,CY,0,CX,CY,R*1.3)
      grd.addColorStop(0,'rgba(0,212,255,0.06)')
      grd.addColorStop(1,'rgba(0,212,255,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(CX,CY,R*1.3,0,Math.PI*2); ctx.fill()

      angle += 0.003
      const rotDeg = angle * 180 / Math.PI

      drawGlobe(rotDeg)
      drawCountries(rotDeg)

      // Globe edge
      ctx.beginPath()
      ctx.arc(CX, CY, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,212,255,0.25)'
      ctx.lineWidth = 0.8
      ctx.stroke()

      const pts = cities.map(city => project(city.lat, city.lng, rotDeg))

      arcs.forEach(arc => {
        if (!arc.active) { if (Math.random()<0.004) arc.active=true; return }
        arc.progress += arc.speed
        if (arc.progress > 1) { arc.progress=0; arc.active=Math.random()>0.15 }
        drawArc(pts[arc.from], pts[arc.to], arc.progress)
      })

      pts.forEach((p) => drawCity(p))
      animId = requestAnimationFrame(draw)
    }

    // Start or stop the animation based on the current viewport width.
    function start() { resize(); draw() }
    function stop() { cancelAnimationFrame(animId); ctx.clearRect(0, 0, W, H) }

    async function applyMode() {
      stop()
      if (!desktop.matches) return  // phones: globe stays hidden, nothing loads
      // Load the ~250 KB country-outline dataset only the first time we go desktop.
      // import() returns a Promise and produces a separate Vite chunk (see header).
      if (countryRings.length === 0) {
        const mod = await import('../data/continents.json')
        if (cancelled) return
        countryRings = mod.default as number[][][]
      }
      start()
    }

    applyMode()

    // Only respond to resizes while the globe is actually running.
    const onResize = () => { if (!desktop.matches) return; cancelAnimationFrame(animId); resize(); draw() }
    window.addEventListener('resize', onResize)
    desktop.addEventListener('change', applyMode)

    return () => {
      cancelled = true
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      desktop.removeEventListener('change', applyMode)
    }
  }, [])

  // hidden md:block — the canvas isn't even in the layout on phones.
  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block absolute inset-0 w-full h-full z-0"
      style={{ background: '#030712' }}
    />
  )
}
