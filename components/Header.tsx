'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useModal } from '../context/ModalContext'

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => pathname === path ? 'highlight' : ''

  return (
    <header className="brutal-header">
      <Link href="/" className="logo interactive" onClick={() => setIsMobileMenuOpen(false)}>
         <span>NOCTO</span>
         <span>CODE</span>
      </Link>

      {/* МЕНЮ (Новый порядок) */}
      <nav className={`header-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
         <Link href="/services" className={`menu-link interactive ${isActive('/services')}`}>
            Услуги
         </Link>
         <Link href="/cases" className={`menu-link interactive ${isActive('/cases')}`}>
            Кейсы
         </Link>
         <Link href="/blog" className={`menu-link interactive ${isActive('/blog')}`}>
            Блог
         </Link>
         <Link href="/manifesto" className={`menu-link interactive ${isActive('/manifesto')}`}>
            Манифест
         </Link>
         <Link href="/auto" className={`menu-link highlight interactive ${isActive('/auto')}`}>
            [Авто-Дилерам]
         </Link>
         <Link href="/calculator" className={`menu-link interactive ${isActive('/calculator')}`} style={{ color: 'var(--accent)' }}>
            [ROI Calc]
         </Link>
      </nav>

      <div className="header-right">
         <span className="est">EST. 2025</span>
         
         <Link href="/proposal" className="interactive" style={{ 
             marginRight: '15px', 
             fontWeight: 800, 
             color: 'var(--accent)', 
             borderBottom: '1px solid var(--accent)',
             fontSize: '0.8rem'
         }}>
            [КП GEN]
         </Link>

         <button className="btn-brutal interactive" onClick={openModal}>
            Обсудить проект
         </button>
         
         <button 
            className="mobile-burger interactive" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
         >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
         </button>
      </div>
    </header>
  )
}
