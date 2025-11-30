'use client'
import { useEffect, useState } from 'react'

export function SystemBar() {
  const [time, setTime] = useState('00:00:00')
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [status, setStatus] = useState('SYSTEM: ONLINE')

  useEffect(() => {
    // Обновление времени
    const timer = setInterval(() => {
      const now = new Date()
      const t = now.toLocaleTimeString('ru-RU', { hour12: false })
      const ms = String(now.getMilliseconds()).padStart(3, '0')
      setTime(`T: ${t}:${ms}`)
    }, 50)

    // Обновление координат
    const handleMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)

    // Ротация статусов
    const messages = ["SYSTEM: ONLINE", "ENCRYPTION: AES-256", "MEMORY: OPTIMIZED", "RENDER: CPU-MODE"]
    const statusTimer = setInterval(() => {
       const msg = messages[Math.floor(Math.random() * messages.length)]
       setStatus(msg)
    }, 4000)

    return () => {
      clearInterval(timer)
      clearInterval(statusTimer)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div className="system-bar">
       <div className="sys-left">
          <div className="blink-dot"></div>
          <span>X: {coords.x} Y: {coords.y}</span>
       </div>
       <div className="sys-center">{status}</div>
       <div className="sys-right">{time}</div>
    </div>
  )
}
