'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumbs() {
  const pathname = usePathname()
  
  // Если мы на главной, крошки не показываем
  if (pathname === '/') return null

  // Разбиваем путь: "/blog/post-1" -> ["blog", "post-1"]
  const pathSegments = pathname.split('/').filter(segment => segment !== '')

  return (
    <div className="breadcrumbs" style={{ 
        fontFamily: 'monospace', 
        fontSize: '0.8rem', 
        color: '#666', 
        marginBottom: '20px',
        textTransform: 'uppercase'
    }}>
      <Link href="/" className="interactive" style={{ 
        textDecoration: 'none', 
        color: '#666', 
        transition: '0.2s' 
      }} 
      onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
      onMouseOut={(e) => e.currentTarget.style.color = '#666'}
      >
        HOME
      </Link>

      {pathSegments.map((segment, index) => {
        // Формируем ссылку для каждого сегмента
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`
        const isLast = index === pathSegments.length - 1
        
        // Делаем красивый заголовок из URL (post-1 -> POST 1)
        const title = segment.replace(/-/g, ' ')

        return (
          <span key={href}>
            <span style={{ margin: '0 10px', color: '#444' }}>/</span>
            {isLast ? (
              <span className="highlight" style={{ fontWeight: 800 }}>{title}</span>
            ) : (
              <Link 
                href={href} 
                className="interactive" 
                style={{ textDecoration: 'none', color: '#666', transition: '0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                onMouseOut={(e) => e.currentTarget.style.color = '#666'}
              >
                {title}
              </Link>
            )}
          </span>
        )
      })}
    </div>
  )
}
