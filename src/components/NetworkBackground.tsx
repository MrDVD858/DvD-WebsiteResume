import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId = 0
    let angle = 0
    let W = 0, H = 0, CX = 0, CY = 0, R = 0

    const cities = [
      { lat: 47.6,  lng: -122.3, name: 'Seattle' },
      { lat: 37.7,  lng: -122.4, name: 'San Francisco' },
      { lat: 34.0,  lng: -118.2, name: 'Los Angeles' },
      { lat: 32.7,  lng: -117.1, name: 'San Diego' },
      { lat: 40.7,  lng:  -74.0, name: 'New York' },
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
      R = Math.min(W, H) * 0.38
    }

    function project(lat: number, lng: number, rotDeg: number) {
      const phi = (90 - lat) * Math.PI / 180
      const theta = (lng + rotDeg) * Math.PI / 180
      const x = R * Math.sin(phi) * Math.cos(theta)
      const y = R * Math.cos(phi)
      const z = R * Math.sin(phi) * Math.sin(theta)
      return { x: CX + x, y: CY - y, z, visible: z > -R * 0.1 }
    }

    function drawGlobe(rotDeg: number) {
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath(); let first = true
        for (let lng = -180; lng <= 180; lng += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.22)'; ctx.lineWidth = 0.5; ctx.stroke()
      }
      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath(); let first = true
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.22)'; ctx.lineWidth = 0.5; ctx.stroke()
      }
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

    function drawCity(p: {x:number;y:number;z:number;visible:boolean}, name: string) {
      if (!p.visible) return
      const alpha = Math.min(1, (p.z+R)/(R*1.2))
      ctx.beginPath(); ctx.arc(p.x,p.y,9,0,Math.PI*2)
      ctx.fillStyle = `rgba(0,212,255,${alpha*0.07})`; ctx.fill()
      ctx.beginPath(); ctx.arc(p.x,p.y,3.5,0,Math.PI*2)
      ctx.fillStyle = `rgba(0,212,255,${alpha})`; ctx.fill()
      ctx.beginPath(); ctx.arc(p.x,p.y,1.5,0,Math.PI*2)
      ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill()
      ctx.font = `500 10px Inter`
      ctx.fillStyle = `rgba(255,255,255,${alpha*0.65})`
      ctx.fillText(name, p.x+8, p.y-4)
    }

    function draw() {
      ctx.clearRect(0,0,W,H)
      ctx.fillStyle = '#030712'; ctx.fillRect(0,0,W,H)

      const grd = ctx.createRadialGradient(CX,CY,0,CX,CY,R*1.3)
      grd.addColorStop(0,'rgba(0,212,255,0.08)')
      grd.addColorStop(1,'rgba(0,212,255,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(CX,CY,R*1.3,0,Math.PI*2); ctx.fill()

      angle += 0.003
      const rotDeg = angle * 180 / Math.PI
      drawGlobe(rotDeg)

      // Globe edge outline circle
      ctx.beginPath()
      ctx.arc(CX, CY, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,212,255,0.25)'
      ctx.lineWidth = 0.8
      ctx.stroke()

      const pts = cities.map(city => ({ ...project(city.lat, city.lng, rotDeg), name: city.name }))

      arcs.forEach(arc => {
        if (!arc.active) { if (Math.random()<0.004) arc.active=true; return }
        arc.progress += arc.speed
        if (arc.progress > 1) { arc.progress=0; arc.active=Math.random()>0.15 }
        drawArc(pts[arc.from], pts[arc.to], arc.progress)
      })

      pts.forEach((p,i) => drawCity(p, cities[i].name))
      animId = requestAnimationFrame(draw)
    }

    resize(); draw()
    const onResize = () => { cancelAnimationFrame(animId); resize(); draw() }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: '#030712' }}
    />
  )
}
