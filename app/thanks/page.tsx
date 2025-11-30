import Link from 'next/link'

export const metadata = { 
    title: 'Заявка принята | NOCTO',
    robots: { index: false } // Страницу "Спасибо" тоже не индексируем
}

export default function ThanksPage() {
  return (
    <section className="hero-brutal" style={{ height: '85vh', border: 'none', minHeight: '600px' }}>
       <div className="container-grid" style={{ border: 'none', alignItems: 'center', height: '100%' }}>
          
          <div className="col-left" style={{ border: 'none', alignSelf: 'center' }}>
             STATUS // SUCCESS
          </div>
          
          <div className="col-right">
             <h1 className="huge-text" style={{ color: 'var(--accent)', marginBottom: '20px' }}>
                ЗАЯВКА ПРИНЯТА.
             </h1>
             <p className="desc" style={{ marginBottom: '50px', maxWidth: '600px', fontSize: '1.1rem' }}>
                Ваши данные уже улетели в нашу CRM. <br/>
                В течение 15 минут (в рабочее время) с вами свяжется наш стратег, а не просто менеджер по продажам.
             </p>
             
             {/* Блок удержания внимания */}
             <div style={{ 
                 border: '1px solid #333', 
                 padding: '40px', 
                 background: '#0a0a0a',
                 maxWidth: '700px'
             }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '20px', fontWeight: 800 }}>
                    ПОКА МЫ ЗВОНИМ, ПОЛЕЗНЫЕ МАТЕРИАЛЫ:
                </h3>
                <ul className="svc-list">
                   <li style={{ marginBottom: '15px' }}>
                      <Link href="/cases/chery-case" className="interactive hover:text-white">
                         Кейс Chery: Как мы снизили цену лида на 59% →
                      </Link>
                   </li>
                   <li style={{ marginBottom: '15px' }}>
                      <Link href="/blog/bot-traffic-ads" className="interactive hover:text-white">
                         Статья: Как защитить бюджет от скликивания ботами →
                      </Link>
                   </li>
                   <li>
                      <Link href="https://t.me/nocto_agency" target="_blank" className="interactive highlight">
                         [TELEGRAM КАНАЛ] — Маркетинг без цензуры →
                      </Link>
                   </li>
                </ul>
             </div>

             <div style={{ marginTop: '50px' }}>
                <Link href="/" className="btn-brutal interactive">
                   ВЕРНУТЬСЯ НА ГЛАВНУЮ
                </Link>
             </div>
          </div>
       </div>
    </section>
  )
}
