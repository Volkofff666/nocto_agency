'use client'
import { useEffect } from 'react'

export function ConsoleEasterEgg() {
  useEffect(() => {
    const titleStyle = [
      'font-size: 60px', 'font-weight: 800', 'font-family: monospace',
      'color: #0044FF', 'text-shadow: 2px 2px 0px #000, -1px -1px 0 #fff',
      'line-height: 1', 'margin-bottom: 20px'
    ].join(';')

    const bodyStyle = [
      'font-size: 14px', 'font-family: monospace', 'color: #cccccc',
      'background: #111', 'padding: 10px', 'border-left: 3px solid #0044FF',
      'line-height: 1.5'
    ].join(';')

    const linkStyle = [
      'font-size: 16px', 'font-family: monospace', 'color: #fff',
      'background: #0044FF', 'padding: 8px 15px', 'border-radius: 4px',
      'font-weight: bold', 'display: block', 'margin-top: 10px'
    ].join(';')

    const art = `
    _   _  ____   _____ _______ ____  
   | \\ | |/ __ \\ / ____|__   __/ __ \\ 
   |  \\| | |  | | |       | | | |  | |
   | . \` | |  | | |       | | | |  | |
   | |\\  | |__| | |____   | | | |__| |
   |_| \\_|\\____/ \\_____|  |_|  \\____/ 
    `

    console.log(`%c${art}`, 'color: #333; font-family: monospace;')
    console.log('%cSYSTEM BREACH DETECTED', titleStyle)
    
    console.log(
      '%cТы открыл консоль. Значит, ты понимаешь, как это работает.\n\n' +
      'Мы ищем инженеров, а не "формошлепов".\n' +
      'Никаких HR. Пиши напрямую CTO.',
      bodyStyle
    )

    console.log('%c✉️ code@noctocode.ru', linkStyle) // <-- ОБНОВЛЕНО

    console.log(
      '%cP.S. В теме письма укажи: "Console_User found"',
      'color: #666; font-family: monospace; margin-top: 10px; font-size: 12px;'
    )
  }, [])

  return null
}
