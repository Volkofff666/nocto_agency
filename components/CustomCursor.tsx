'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
         dotRef.current.style.left = `${e.clientX}px`
         dotRef.current.style.top = `${e.clientY}px`
      }
      if (outlineRef.current && !outlineRef.current.classList.contains('locked')) {
         outlineRef.current.style.left = `${e.clientX}px`
         outlineRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', onMove)

    // Ховер эффекты
    const handleEnter = (e: any) => {
       const rect = e.target.getBoundingClientRect()
       if (outlineRef.current) {
          outlineRef.current.classList.add('locked')
          outlineRef.current.style.left = `${rect.left + rect.width/2}px`
          outlineRef.current.style.top = `${rect.top + rect.height/2}px`
          outlineRef.current.style.width = `${rect.width + 20}px`
          outlineRef.current.style.height = `${rect.height + 15}px`
       }
    }
    const handleLeave = () => {
       if (outlineRef.current) {
          outlineRef.current.classList.remove('locked')
          outlineRef.current.style.width = ''
          outlineRef.current.style.height = ''
       }
    }

    // Вешаем слушатели на интерактивные элементы
    // В React это лучше делать иначе, но для быстрого переноса можно так:
    const links = document.querySelectorAll('a, button, .interactive')
    links.forEach(el => {
       el.addEventListener('mouseenter', handleEnter)
       el.addEventListener('mouseleave', handleLeave)
    })

    return () => window.removeEventListener('mousemove', onMove)
  }, []) // Пустой массив = запуск 1 раз при загрузке

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  )
}
