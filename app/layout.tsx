import './globals.css'
import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { Manrope } from 'next/font/google'
import { Header } from '../components/Header'
import { SystemBar } from '../components/SystemBar'
import { CustomCursor } from '../components/CustomCursor'
import { Metrika } from '../components/Metrika'
import { WidgetsLayer } from '../components/WidgetsLayer' // <-- НОВЫЙ КОМПОНЕНТ

const manrope = Manrope({ 
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-manrope'
})

const BASE_URL = 'https://nocto.ru'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#050505',
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'NOCTO | Разработка сайтов и Автомаркетинг Екатеринбург',
    template: '%s | NOCTO Digital'
  },
  description: 'Техническое диджитал-агентство. Продвижение автодилеров (Haval, Chery), разработка на Next.js, сквозная аналитика.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={manrope.className} suppressHydrationWarning>
        
        {/* Оборачиваем всё в наш клиентский слой виджетов */}
        <WidgetsLayer>
          
          <Metrika />
          
          <div className="noise-overlay" />
          <div className="grid-lines">
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
             <div className="line"></div>
          </div>

          <CustomCursor />
          <Header />

          <main className="main-content">
              {children}
          </main>

          {/* ФУТЕР */}
          <footer style={{ 
              padding: '80px 40px 60px', 
              borderTop: '1px solid var(--line)', 
              background: '#050505',
              position: 'relative',
              zIndex: 2
          }}>
             <div className="footer-grid" style={{ 
                 display: 'grid', 
                 gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                 gap: '60px', 
                 maxWidth: '1400px', 
                 margin: '0 auto' 
             }}>
                <div className="footer-col">
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>
                       READY TO DEPLOY?
                    </h2>
                    <a href="mailto:hello@nocto.ru" className="interactive" style={{ 
                       fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', textDecoration: 'none' 
                    }}>
                       HELLO@NOCTO.RU
                    </a>
                    <p style={{ marginTop: '20px', color: '#666', fontSize: '0.9rem' }}>
                       Екатеринбург, ул. Малышева 51 <br/>
                       Пн-Пт: 10:00 — 19:00
                    </p>
                </div>

                <div className="footer-col">
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#666', marginBottom: '20px' }}>
                        NAVIGATION
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '10px' }}><Link href="/services" className="interactive hover:text-white">Услуги</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/cases" className="interactive hover:text-white">Кейсы</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/calculator" className="interactive highlight">[ ROI Калькулятор ]</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/blog" className="interactive hover:text-white">Database (Блог)</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/proposal" className="interactive hover:text-white">Генератор КП</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/partners" className="interactive highlight">Партнерам</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#666', marginBottom: '20px' }}>
                        LEGAL
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#888' }}>
                        <li style={{ marginBottom: '10px' }}><Link href="/privacy" className="interactive hover:text-white">Политика конфиденциальности</Link></li>
                        <li style={{ marginBottom: '10px' }}><Link href="/offer" className="interactive hover:text-white">Публичная оферта</Link></li>
                        <li style={{ marginBottom: '20px' }}><Link href="/personal-data" className="interactive hover:text-white">Обработка перс. данных</Link></li>
                        <li style={{ fontSize: '0.8rem', color: '#444' }}>ИП Иванов И.И. / ИНН 660000000000</li>
                    </ul>
                </div>
             </div>

             <div className="footer-bottom" style={{ 
                 marginTop: '80px', paddingTop: '20px', borderTop: '1px solid #222', 
                 display: 'flex', justifyContent: 'space-between', color: '#444', 
                 fontSize: '0.8rem', fontFamily: 'monospace' 
             }}>
                 <span>© 2025-2026 NOCTO DIGITAL AGENCY</span>
                 <span>MADE IN URAL</span>
             </div>
          </footer>

          <SystemBar />
          
        </WidgetsLayer>

      </body>
    </html>
  )
}
