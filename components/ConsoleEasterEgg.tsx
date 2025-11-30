'use client'
import { useEffect } from 'react'

export function ConsoleEasterEgg() {
  useEffect(() => {
    // Стиль для заголовка
    const titleStyle = [
      'font-size: 60px',
      'font-weight: 800',
      'font-family: monospace',
      'color: #0044FF', // Electric Blue
      'text-shadow: 2px 2px 0px #000, -1px -1px 0 #fff',
      'line-height: 1',
      'margin-bottom: 20px'
    ].join(';')

    // Стиль для основного текста
    const bodyStyle = [
      'font-size: 14px',
      'font-family: monospace',
      'color: #cccccc',
      'background: #111',
      'padding: 10px',
      'border-left: 3px solid #0044FF',
      'line-height: 1.5'
    ].join(';')

    // Стиль для ссылки/почты
    const linkStyle = [
      'font-size: 16px',
      'font-family: monospace',
      'color: #fff',
      'background: #0044FF',
      'padding: 8px 15px',
      'border-radius: 4px',
      'font-weight: bold',
      'display: block',
      'margin-top: 10px'
    ].join(';')

    // ASCII Арт
    const art = `
    _   _  ____   _____ _______ ____  
   | \\ | |/ __ \\ / ____|__   __/ __ \\ 
   |  \\| | |  | | |       | | | |  | |
   | . \` | |  | | |       | | | |  | |
   | |\\  | |__| | |____   | | | |__| |
   |_| \\_|\\____/ \\_____|  |_|  \\____/ 
    `

    // Вывод в консоль
    console.log(`%c${art}`, 'color: #333; font-family: monospace;')
    console.log('%cSYSTEM BREACH DETECTED', titleStyle)
    
    console.log(
      '%cТы открыл консоль. Значит, ты понимаешь, как это работает.\n\n' +
      'Мы ищем инженеров, а не "формошлепов".\n' +
      'Если ты знаешь React глубже, чем `useEffect`, и понимаешь, как работает Event Loop — нам есть о чем поговорить.\n\n' +
      'Никаких HR. Пиши напрямую CTO.',
      bodyStyle
    )

    console.log('%c✉️ code@nocto.ru', linkStyle)
    
    console.log(
      '%cP.S. В теме письма укажи: "Console_User found" (чтобы пройти спам-фильтр)',
      'color: #666; font-family: monospace; margin-top: 10px; font-size: 12px;'
    )

  }, [])

  return null
}
