'use client' // Это ОБЯЗАТЕЛЬНО клиентский компонент
import dynamic from 'next/dynamic'
import { ModalProvider } from '../context/ModalContext'

// Ленивые импорты (как и хотели)
const LiveCaseWidget = dynamic(
  () => import('./LiveCaseWidget').then((mod) => mod.LiveCaseWidget),
  { ssr: false }
)
const ContactModal = dynamic(
  () => import('./ContactModal').then((mod) => mod.ContactModal),
  { ssr: false }
)
const ConsoleEasterEgg = dynamic(
  () => import('./ConsoleEasterEgg').then((mod) => mod.ConsoleEasterEgg),
  { ssr: false }
)

export function WidgetsLayer({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {/* Сначала рендерим детей (страницу), а потом грузим виджеты */}
      {children}
      
      <ConsoleEasterEgg />
      <LiveCaseWidget />
      <ContactModal />
    </ModalProvider>
  )
}
