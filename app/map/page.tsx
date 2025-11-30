import Link from 'next/link'

export const metadata = { title: 'Карта сайта | NOCTO' }

export default function SitemapPage() {
  // В идеале список статей нужно подтягивать динамически, как в блоге
  return (
    <section className="container-grid">
       <div className="col-left">SYSTEM // MAP</div>
       <div className="col-right">
          <h1 className="huge-text">SITEMAP</h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
             <div>
                <h3 className="svc-name highlight">MAIN</h3>
                <ul className="svc-list">
                   <li><Link href="/">Главная</Link></li>
                   <li><Link href="/services">Услуги</Link></li>
                   <li><Link href="/cases">Кейсы</Link></li>
                   <li><Link href="/manifesto">Манифест</Link></li>
                   <li><Link href="/auto">Авто-дилерам</Link></li>
                </ul>
             </div>
             <div>
                <h3 className="svc-name highlight">DATABASE</h3>
                <ul className="svc-list">
                   <li><Link href="/blog">Все статьи</Link></li>
                   {/* Здесь можно вывести список последних 5 статей */}
                </ul>
             </div>
          </div>
       </div>
    </section>
  )
}
