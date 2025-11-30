import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Партнерская программа White Label: Разработка и Реклама | NOCTO',
  description: 'Аутсорс веб-разработки (Next.js) и контекстной рекламы (Яндекс.Директ). Агентские выплаты до 20%. White Label для маркетинговых агентств.',
  keywords: [
      'партнерская программа веб студии', 
      'white label маркетинг', 
      'аутсорс контекстной рекламы', 
      'агентское вознаграждение яндекс директ',
      'разработка сайтов на субподряд'
  ]
}

export default function PartnersPage() {
  return (
    <section>
       {/* SEO SCHEMA (JSON-LD) */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NOCTO Partner Network",
            "description": "Партнерская программа для агентств и фрилансеров. White Label разработка и реклама.",
            "url": "https://nocto.ru/partners",
            "offers": {
                "@type": "Offer",
                "name": "Referral Commission",
                "price": "15",
                "priceCurrency": "PERCENT"
            }
          })
        }}
       />

       {/* HERO SECTION */}
       <div className="container-grid">
          <div className="col-left">
             <Breadcrumbs />
             <div style={{ marginTop: '20px' }}>NETWORK // PARTNERS</div>
          </div>
          <div className="col-right">
             <h1 className="huge-text">
                SCALE YOUR REVENUE. <br/>
                <span className="highlight">SYNC WITH NOCTO.</span>
             </h1>
             <p className="desc" style={{ marginTop: '30px', fontSize: '1.1rem', maxWidth: '800px' }}>
                Мы строим экосистему для агентств и фрилансеров. 
                Передавайте нам сложные проекты по **Web-разработке** и **Контекстной рекламе**.
                Мы закрываем техническую часть (производство), вы получаете процент или перепродаете наши услуги со своей наценкой.
             </p>
             
             <div style={{ marginTop: '40px' }}>
                <Link href="https://t.me/nocto_agency" target="_blank" className="btn-brutal interactive">
                   СТАТЬ ПАРТНЕРОМ (TELEGRAM)
                </Link>
             </div>
          </div>
       </div>

       {/* ЦИФРЫ */}
       <div className="container-grid">
          <div className="col-left">01 // PROFIT</div>
          <div className="col-right">
             <div className="stats-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                <div>
                   <div className="stat-val highlight">15-20%</div>
                   <div className="stat-label">КОМИССИЯ (LTV)</div>
                </div>
                <div>
                   <div className="stat-val">WHITE LABEL</div>
                   <div className="stat-label">ПОД ВАШИМ БРЕНДОМ</div>
                </div>
                <div>
                   <div className="stat-val">NDA</div>
                   <div className="stat-label">ПОЛНАЯ АНОНИМНОСТЬ</div>
                </div>
             </div>
          </div>
       </div>

       {/* ЧТО ПЕРЕПРОДАВАТЬ (Updated for Context) */}
       <div className="container-grid">
          <div className="col-left">02 // SERVICES</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '40px', fontSize: '2rem' }}>ЧТО ВЫ МОЖЕТЕ ДЕЛЕГИРОВАТЬ</h2>
             
             <div className="ads-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                 
                 {/* Блок 1: Реклама */}
                 <div className="ads-card" style={{ border: '1px solid var(--accent)', background: 'rgba(0, 68, 255, 0.03)' }}>
                     <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '15px' }}>TRAFFIC / ADS</h3>
                     <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                        У вас нет своего директолога или он перегружен? Мы возьмем настройку и ведение на себя.
                     </p>
                     <ul className="svc-list">
                        <li><strong>Яндекс.Директ:</strong> Поиск, РСЯ, Ретаргетинг.</li>
                        <li><strong>Аналитика:</strong> Настройка Метрики, Calltouch.</li>
                        <li><strong>Отчетность:</strong> Делаем отчеты с <u>вашим логотипом</u>. Клиент думает, что работаете вы.</li>
                     </ul>
                 </div>

                 {/* Блок 2: Разработка */}
                 <div className="ads-card">
                     <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '15px' }}>WEB / DEV</h3>
                     <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                        Сложные проекты, где Tilda не справляется. Высоконагруженные системы и сервисы.
                     </p>
                     <ul className="svc-list">
                        <li><strong>Next.js / React:</strong> Скоростные сайты.</li>
                        <li><strong>Backend:</strong> Python, интеграции с 1С/CRM.</li>
                        <li><strong>SEO-Ready:</strong> Сдаем проекты с идеальной техничкой.</li>
                     </ul>
                 </div>
             </div>
          </div>
       </div>

       {/* МОДЕЛИ СОТРУДНИЧЕСТВА */}
       <div className="container-grid">
          <div className="col-left">03 // MODELS</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '40px', fontSize: '2rem' }}>ФОРМАТЫ РАБОТЫ</h2>
             
             <div className="ads-grid" style={{ marginTop: '0', gridTemplateColumns: '1fr 1fr' }}>
                
                {/* REFERRAL */}
                <div className="ads-card">
                   <div className="ads-icon" style={{ color: 'var(--accent)' }}>[REFERRAL]</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '15px' }}>ПЕРЕДАЧА ЛИДА</h3>
                   <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                      Идеально для: CRM-интеграторов, Бизнес-консультантов, SMM-щиков.
                   </p>
                   <ul className="svc-list">
                      <li>Вы просто передаете контакт клиента.</li>
                      <li>Мы сами продаем и ведем проект.</li>
                      <li>Вы получаете <strong>15%</strong> от чека (в том числе с ежемесячных оплат рекламы).</li>
                   </ul>
                </div>

                {/* WHITE LABEL */}
                <div className="ads-card" style={{ background: '#0a0a0a', border: '1px solid #333' }}>
                   <div className="ads-icon" style={{ color: '#fff' }}>[WHITE LABEL]</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '15px' }}>СКРЫТЫЙ ПОДРЯД</h3>
                   <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                      Идеально для: Дизайн-студий и Full-cycle агентств.
                   </p>
                   <ul className="svc-list">
                      <li>Мы работаем как <strong>ваш отдел продакшена</strong>.</li>
                      <li>Подписываем жесткий NDA.</li>
                      <li>Даем оптовые цены (-30% от рынка).</li>
                      <li>Вы продаете наши услуги со своей наценкой x2-x3.</li>
                   </ul>
                </div>

             </div>
          </div>
       </div>

       {/* CTA */}
       <div className="container-grid" style={{ borderBottom: 'none' }}>
          <div className="col-left">04 // JOIN</div>
          <div className="col-right">
             <div style={{ border: '1px solid var(--accent)', padding: '40px', background: 'rgba(0, 68, 255, 0.05)' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px' }}>ЗАПРОСИТЬ АГЕНТСКИЙ ПРАЙС</h3>
                <p style={{ color: '#ccc', marginBottom: '30px' }}>
                   Напишите нам в Telegram слово "ПАРТНЕР". 
                   Мы пришлем презентацию для партнеров и пример договора White Label.
                </p>
                <Link href="https://t.me/nocto_agency" target="_blank" className="btn-brutal interactive">
                    ОТКРЫТЬ TELEGRAM →
                </Link>
             </div>
          </div>
       </div>
    </section>
  )
}
