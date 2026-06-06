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

    // Simplified continent outlines as lat/lng polylines
    // North America
    const northAmerica = [
      [71,-141],[70,-130],[60,-140],[55,-130],[50,-125],[48,-124],[45,-124],
      [40,-124],[35,-120],[32,-117],[28,-110],[22,-105],[18,-100],[15,-90],
      [10,-83],[8,-77],[9,-77],[8,-78],[8,-80],[10,-83],[12,-85],[14,-87],
      [15,-88],[18,-90],[20,-87],[22,-90],[18,-92],[18,-95],[20,-97],[22,-97],
      [25,-97],[26,-98],[28,-97],[30,-96],[30,-94],[29,-90],[30,-89],[28,-88],
      [30,-85],[29,-81],[25,-80],[24,-81],[25,-77],[27,-80],[33,-79],[35,-76],
      [37,-76],[39,-75],[41,-74],[42,-70],[44,-66],[47,-64],[50,-56],[52,-55],
      [55,-60],[58,-62],[60,-64],[62,-68],[63,-70],[60,-72],[57,-76],[55,-79],
      [52,-80],[50,-78],[48,-84],[46,-84],[44,-83],[42,-83],[43,-79],[44,-77],
      [45,-76],[47,-75],[46,-72],[45,-73],[44,-76],[43,-79],[42,-80],[42,-82],
      [43,-83],[44,-82],[45,-84],[46,-84],[48,-88],[48,-91],[50,-94],[52,-94],
      [55,-97],[58,-94],[60,-94],[62,-92],[62,-82],[63,-85],[62,-90],[60,-95],
      [58,-98],[58,-103],[60,-111],[60,-117],[62,-117],[64,-112],[66,-110],
      [68,-110],[70,-112],[70,-120],[71,-130],[71,-141]
    ]

    // South America
    const southAmerica = [
      [12,-72],[10,-62],[11,-64],[13,-62],[13,-60],[10,-61],[8,-60],[6,-61],
      [4,-52],[2,-50],[0,-50],[-2,-44],[-5,-35],[-8,-35],[-10,-37],[-12,-38],
      [-15,-39],[-18,-38],[-20,-40],[-22,-41],[-23,-43],[-26,-48],[-28,-49],
      [-30,-50],[-32,-52],[-34,-53],[-36,-57],[-38,-57],[-40,-62],[-42,-63],
      [-44,-65],[-46,-65],[-48,-65],[-50,-69],[-52,-69],[-54,-68],[-55,-67],
      [-54,-65],[-53,-63],[-52,-58],[-50,-55],[-48,-55],[-46,-52],[-44,-50],
      [-42,-48],[-40,-48],[-38,-48],[-36,-50],[-32,-52],[-28,-50],[-24,-46],
      [-20,-40],[-15,-40],[-10,-38],[-8,-35],[-4,-38],[-2,-40],[0,-44],
      [2,-50],[4,-52],[6,-55],[6,-58],[4,-60],[2,-60],[0,-64],[-2,-66],
      [-4,-70],[-6,-72],[-8,-74],[-10,-76],[-12,-76],[-14,-76],[-16,-75],
      [-18,-70],[-18,-68],[-16,-68],[-14,-70],[-12,-72],[-10,-72],[-8,-70],
      [-4,-68],[0,-66],[2,-66],[4,-64],[6,-62],[8,-62],[10,-62],[12,-72]
    ]

    // Europe
    const europe = [
      [71,28],[70,20],[68,14],[65,14],[62,5],[58,5],[55,8],[54,10],[54,14],
      [52,14],[50,14],[48,17],[46,16],[44,14],[42,18],[40,18],[38,15],[38,12],
      [40,9],[44,8],[44,6],[46,7],[48,7],[50,2],[52,2],[51,1],[51,4],
      [52,5],[54,8],[55,10],[56,10],[58,11],[60,5],[58,6],[56,8],[54,8],
      [56,10],[58,12],[60,12],[62,6],[64,14],[66,14],[68,20],[70,20],[71,28]
    ]

    // Africa
    const africa = [
      [37,10],[34,10],[30,32],[22,38],[12,44],[8,44],[4,42],[2,42],[0,42],
      [-4,40],[-10,40],[-12,38],[-14,40],[-18,36],[-20,35],[-22,34],
      [-26,33],[-28,32],[-30,30],[-32,28],[-34,26],[-34,18],[-30,16],
      [-26,15],[-22,14],[-18,12],[-14,12],[-10,14],[-6,10],[-4,8],
      [0,8],[4,2],[4,-2],[6,-1],[6,2],[8,2],[8,5],[4,7],[2,9],[0,9],
      [-2,9],[-4,9],[-6,10],[-6,12],[-4,14],[-2,14],[0,14],[4,14],
      [8,14],[12,14],[14,20],[16,24],[20,26],[22,28],[24,32],[28,34],
      [30,32],[32,24],[34,22],[36,14],[37,10]
    ]

    // Asia (simplified)
    const asia = [
      [70,30],[72,40],[70,50],[68,60],[68,70],[66,80],[64,90],[60,100],
      [55,100],[50,104],[48,108],[44,110],[40,120],[36,120],[32,120],
      [28,120],[24,120],[20,110],[16,108],[12,104],[8,98],[4,100],[0,104],
      [-4,104],[-8,114],[-8,120],[-8,130],[-6,134],[-4,138],[-2,140],
      [0,140],[4,140],[6,134],[8,130],[10,124],[14,120],[18,110],[22,114],
      [24,120],[26,120],[28,116],[30,110],[32,100],[34,90],[36,74],
      [38,68],[40,56],[42,50],[44,42],[44,36],[42,28],[40,28],[38,28],
      [36,28],[36,36],[38,40],[40,44],[42,50],[44,56],[46,62],[48,68],
      [50,72],[52,76],[54,82],[56,88],[58,92],[60,100],[62,100],[64,90],
      [66,80],[68,70],[70,50],[70,30]
    ]

    // Australia
    const australia = [
      [-14,136],[-14,130],[-16,124],[-18,122],[-20,116],[-22,114],
      [-24,114],[-26,114],[-28,114],[-30,115],[-32,116],[-34,119],
      [-36,136],[-38,140],[-38,146],[-36,150],[-34,151],[-32,152],
      [-28,153],[-24,152],[-20,148],[-18,146],[-16,140],[-14,136]
    ]

    const continents = [northAmerica, southAmerica, europe, africa, asia, australia]

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
      return { x: CX + x, y: CY - y, z, visible: z > 0 }
    }

    function drawGlobe(rotDeg: number) {
      // Latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath(); let first = true
        for (let lng = -180; lng <= 180; lng += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.15)'; ctx.lineWidth = 0.5; ctx.stroke()
      }
      // Longitude lines
      for (let lng = -180; lng < 180; lng += 20) {
        ctx.beginPath(); let first = true
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false }
          else { first = true }
        }
        ctx.strokeStyle = 'rgba(0,212,255,0.15)'; ctx.lineWidth = 0.5; ctx.stroke()
      }
    }

    function drawContinents(rotDeg: number) {
      continents.forEach(continent => {
        ctx.beginPath()
        let first = true
        continent.forEach(([lat, lng]) => {
          const p = project(lat, lng, rotDeg)
          if (p.z > 0) {
            first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)
            first = false
          } else {
            // Close and reopen if going around back
            if (!first) ctx.stroke()
            ctx.beginPath()
            first = true
          }
        })
        ctx.strokeStyle = 'rgba(0,212,255,0.55)'
        ctx.lineWidth = 1.2
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

      // Radial glow
      const grd = ctx.createRadialGradient(CX,CY,0,CX,CY,R*1.3)
      grd.addColorStop(0,'rgba(0,212,255,0.06)')
      grd.addColorStop(1,'rgba(0,212,255,0)')
      ctx.fillStyle = grd
      ctx.beginPath(); ctx.arc(CX,CY,R*1.3,0,Math.PI*2); ctx.fill()

      angle += 0.003
      const rotDeg = angle * 180 / Math.PI

      // Globe grid
      drawGlobe(rotDeg)

      // Continent outlines
      drawContinents(rotDeg)

      // Globe edge circle
      ctx.beginPath()
      ctx.arc(CX, CY, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0,212,255,0.25)'
      ctx.lineWidth = 0.8
      ctx.stroke()

      const pts = cities.map(city => ({ ...project(city.lat, city.lng, rotDeg), name: city.name }))

      // Arcs
      arcs.forEach(arc => {
        if (!arc.active) { if (Math.random()<0.004) arc.active=true; return }
        arc.progress += arc.speed
        if (arc.progress > 1) { arc.progress=0; arc.active=Math.random()>0.15 }
        drawArc(pts[arc.from], pts[arc.to], arc.progress)
      })

      // City dots
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
