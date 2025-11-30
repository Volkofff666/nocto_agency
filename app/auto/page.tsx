'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Suspense } from 'react'

const REPLACEMENTS: Record<string, string> = {
  haval: 'HAVAL',
  chery: 'CHERY',
  exeed: 'EXEED',
  geely: 'GEELY',
  omoda: 'OMODA',
  tank: 'TANK',
  jetour: 'JETOUR'
}

// Компонент с динамическим контентом (зависит от URL)
function AutoHero() {
  const searchParams = useSearchParams()
  const brandParam = searchParams.get('brand') || searchParams.get('utm_term') || ''
  
  const brand = Object.keys(REPLACEMENTS).find(key => brandParam.toLowerCase().includes(key))
  const displayBrand = brand ? REPLACEMENTS[brand] : 'АВТОДИЛЕРОВ'

  return (
      <div className="container-grid">
          <div className="col-left">
             <Breadcrumbs />
             <div style={{ marginTop: '20px' }}>INDUSTRY // AUTO</div>
          </div>
          <div className="col-right">
             <h1 className="huge-text">
                ПРОДАВАЙТЕ <br/>
                <span className="highlight">{displayBrand}.</span> А НЕ КЛИКИ.
             </h1>
             <p className="desc">
                {brand 
                  ? `Специализированное решение для дилеров ${displayBrand}. Мы знаем боли именно этой марки. Скликивание, низкая маржа, долгий цикл сделки.` 
                  : 'Специализированное решение для дилеров Chery, Haval, Exeed, Omoda. Мы знаем, что такое "Кумулятивная маржа" и почему вам не нужны лиды по 3000 рублей.'
                }
             </p>
             <div style={{ marginTop: '40px' }}>
                <Link href="/calculator" className="btn-brutal interactive">
                   ПОСЧИТАТЬ ПОТЕРИ БЮДЖЕТА
                </Link>
             </div>
          </div>
       </div>
  )
}

export default function AutoPage() {
  return (
    <section>
       {/* Оборачиваем динамическую часть в Suspense */}
       <Suspense fallback={
           <div className="container-grid">
               <div className="col-right">LOADING DATA...</div>
           </div>
       }>
          <AutoHero />
       </Suspense>

       {/* PAIN POINTS (Боли) */}
       <div className="container-grid">
          <div className="col-left">01 // ПРОБЛЕМЫ</div>
          <div className="col-right">
             <div className="ads-grid" style={{ marginTop: '0' }}>
                <div className="ads-card">
                   <div className="ads-icon" style={{ color: 'red' }}>[FRAUD]</div>
                   <h3>СКЛИКИВАНИЕ (РСЯ)</h3>
                   <p style={{ color: '#888', marginTop: '10px' }}>
                      40% вашего бюджета в РСЯ уходит на мобильные приложения, где дети случайно кликают на баннеры ради бонусов в играх.
                   </p>
                </div>
                <div className="ads-card">
                   <div className="ads-icon" style={{ color: 'red' }}>[MISSED]</div>
                   <h3>ПРОПУЩЕННЫЕ</h3>
                   <p style={{ color: '#888', marginTop: '10px' }}>
                      Колл-центр не берет трубку 40 секунд. Клиент уходит к конкуренту. Вы заплатили за звонок 2500₽, а его просто слили.
                   </p>
                </div>
                <div className="ads-card">
                   <div className="ads-icon" style={{ color: 'red' }}>[SLOW]</div>
                   <h3>МЕДЛЕННЫЕ САЙТЫ</h3>
                   <p style={{ color: '#888', marginTop: '10px' }}>
                      Типовой лендинг на Тильде или Битриксе грузится 4 секунды с мобильного интернета. Конверсия падает в 2 раза.
                   </p>
                </div>
             </div>
          </div>
       </div>

       {/* SOLUTION (Решение) */}
       <div className="container-grid">
          <div className="col-left">02 // РЕШЕНИЕ</div>
          <div className="col-right">
             <h2 className="huge-text" style={{ fontSize: '2rem' }}>SYSTEM NOCTO.AUTO</h2>
             
             <div className="service-row">
                <div className="svc-head-row">
                   <div className="svc-name">1. ANTI-FRAUD DEFENSE</div>
                </div>
                <p className="svc-desc">
                   Собственная база из 15 000 "мусорных" площадок. Мы блокируем показы в мобильных играх и на сайтах с роботностью {'>'} 20%.
                </p>
             </div>

             <div className="service-row">
                <div className="svc-head-row">
                   <div className="svc-name">2. MODEL LANDING PAGE</div>
                </div>
                <p className="svc-desc">
                   Мы не ведем трафик на "Главную". Под каждую модель (Tiggo 4, Jolion) мы делаем отдельный быстрый лендинг. Конверсия выше на 3-5%.
                </p>
             </div>

             <div className="service-row">
                <div className="svc-head-row">
                   <div className="svc-name">3. SALES CONTROL</div>
                </div>
                <p className="svc-desc">
                   Интеграция Calltouch + AmoCRM. Если звонок пропущен — РОП получает SMS через 15 секунд.
                </p>
             </div>
          </div>
       </div>

       {/* CTA */}
       <div className="container-grid" style={{ borderBottom: 'none' }}>
          <div className="col-left">03 // START</div>
          <div className="col-right">
             <div style={{ background: '#111', padding: '40px', border: '1px solid var(--accent)' }}>
                <h2 style={{ color: '#fff', marginBottom: '20px' }}>БЕСПЛАТНЫЙ АУДИТ</h2>
                <p style={{ color: '#ccc', marginBottom: '30px', maxWidth: '600px' }}>
                   Дайте нам гостевой доступ к Метрике и Директу. 
                   Мы найдем, где вы теряете деньги, и пришлем PDF-отчет через 24 часа.
                   Это бесплатно.
                </p>
                <Link href="https://t.me/nocto_agency" className="btn-brutal interactive">
                   ЗАКАЗАТЬ АУДИТ В TELEGRAM
                </Link>
             </div>
          </div>
       </div>
    </section>
  )
}
