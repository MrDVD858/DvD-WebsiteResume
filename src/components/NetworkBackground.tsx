import { useEffect, useRef } from 'react'

// NetworkBackground — animated floating nodes with data packets traveling between them.
// Replaces the video background in HeroSection.
// To revert to the video, swap <NetworkBackground /> back to <video ...> in HeroSection.tsx
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    type Node = {
      x: number; y: number
      vx: number; vy: number
      r: number; pulse: number; pulseSpeed: number
    }
    type Packet = {
      sx: number; sy: number
      dx: number; dy: number
      t: number; speed: number
    }

    const nodes: Node[] = []
    const packets: Packet[] = []
    let W = 0, H = 0, animId = 0

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      W = canvas!.width = rect.width * devicePixelRatio
      H = canvas!.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      W /= devicePixelRatio
      H /= devicePixelRatio
    }

    function initNodes() {
      nodes.length = 0
      const count = Math.max(Math.floor((W * H) / 8000), 35)
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 2 + 1.5,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.018 + Math.random() * 0.022,
        })
      }
    }

    function spawnPacket() {
      if (nodes.length < 2) return
      const a = Math.floor(Math.random() * nodes.length)
      let b = Math.floor(Math.random() * nodes.length)
      while (b === a) b = Math.floor(Math.random() * nodes.length)
      const src = nodes[a], dst = nodes[b]
      const dist = Math.hypot(dst.x - src.x, dst.y - src.y)
      if (dist > 280 || dist < 60) return
      packets.push({
        sx: src.x, sy: src.y,
        dx: dst.x, dy: dst.y,
        t: 0, speed: 0.005 + Math.random() * 0.008,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Draw edges between nearby nodes
      const maxDist = 190
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x
          const dy = nodes[j].y - nodes[i].y
          const d = Math.hypot(dx, dy)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.2
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        n.pulse += n.pulseSpeed
        const glow = 0.5 + Math.sin(n.pulse) * 0.5

        // Outer glow ring
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${glow * 0.07})`
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${0.45 + glow * 0.55})`
        ctx.fill()

        // Move
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
      }

      // Draw packets (data traveling along edges)
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        p.t += p.speed
        if (p.t >= 1) { packets.splice(i, 1); continue }

        const x = p.sx + (p.dx - p.sx) * p.t
        const y = p.sy + (p.dy - p.sy) * p.t
        const trailT = Math.max(0, p.t - 0.14)
        const tx = p.sx + (p.dx - p.sx) * trailT
        const ty = p.sy + (p.dy - p.sy) * trailT

        // Trailing gradient line
        const grad = ctx.createLinearGradient(tx, ty, x, y)
        grad.addColorStop(0, 'rgba(0,212,255,0)')
        grad.addColorStop(1, 'rgba(0,212,255,0.85)')
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Packet head dot
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#00D4FF'
        ctx.fill()
      }

      // Randomly spawn new packets
      if (Math.random() < 0.045) spawnPacket()

      animId = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    const onResize = () => {
      cancelAnimationFrame(animId)
      resize()
      initNodes()
      draw()
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: '#030712' }}
    />
  )
}
