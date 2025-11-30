'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function LiveCaseWidget() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Таймер: показываем виджет через 8 секунд после загрузки страницы
    const timer = setTimeout(() => setIsVisible(true), 8000)
    
    // Очистка таймера при уходе со страницы
    return () => clearTimeout(timer)
  }, [])

  // Если виджет скрыт или закрыт — не рендерим ничего
  if (!isVisible) return null

  return (
    <div className="live-widget">
       {/* Кнопка закрытия (крестик) */}
       <button 
         className="close-btn interactive" 
         onClick={() => setIsVisible(false)}
         aria-label="Close widget"
       >
         ×
       </button>
       
       <div className="widget-content">
          <div className="widget-label">⚡️ FRESH CASE</div>
          
          <div className="widget-title">
             Chery: CPL <span className="highlight">-59%</span>
          </div>
          
          <p className="widget-desc">
             Как мы снизили стоимость лида с 24к до 10к за месяц.
          </p>
          
          <Link href="/cases/chery-case" className="widget-link interactive">
             ЧИТАТЬ РАЗБОР →
          </Link>
       </div>
    </div>
  )
}
