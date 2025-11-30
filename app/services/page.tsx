import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Цены на разработку сайтов и рекламу в Екатеринбурге | Тарифы NOCTO',
  description: 'Прайс-лист 2025. Контекстная реклама от 60к, Лендинги на Next.js от 80к, E-commerce от 1 млн. Прозрачные сметы, работа по договору.',
  keywords: ['цена сайта екатеринбург', 'стоимость настройки директа', 'разработка интернет магазина цена', 'тарифы seo продвижения']
}

export default function ServicesPage() {
  return (
    <section>
       {/* --- SEO SCHEMA: PRODUCT & FAQ --- */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Настройка Контекстной Рекламы (Start)",
                "provider": { "@type": "Organization", "name": "NOCTO Digital" },
                "offers": { "@type": "Offer", "price": "60000", "priceCurrency": "RUB" }
              },
              {
                "@type": "Service",
                "name": "Разработка Лендинга (Next.js)",
                "provider": { "@type": "Organization", "name": "NOCTO Digital" },
                "offers": { "@type": "Offer", "price": "80000", "priceCurrency": "RUB" }
              },
              {
                "@type": "Service",
                "name": "Разработка E-commerce",
                "provider": { "@type": "Organization", "name": "NOCTO Digital" },
                "offers": { "@type": "Offer", "price": "1000000", "priceCurrency": "RUB" }
              }
            ]
          })
        }}
       />

       {/* HEADER */}
       <div className="container-grid">
          <div className="col-left">
             <Breadcrumbs />
             <div style={{ marginTop: '20px' }}>SYSTEM // PRICING</div>
          </div>
          <div className="col-right">
             <h1 className="huge-text">
                СТОИМОСТЬ <br/>
                <span className="highlight">РЕЗУЛЬТАТА.</span>
             </h1>
             <p className="desc">
                Мы не продаем часы. Мы продаем готовые бизнес-инструменты. 
                Ниже — детальные тарифы на трафик, SEO и разработку. Без скрытых платежей.
             </p>
             
             <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                 <Link href="/calculator" className="btn-brutal interactive">
                     РАССЧИТАТЬ ROI
                 </Link>
                 <Link href="/proposal" className="interactive" style={{ 
                     display: 'flex', alignItems: 'center', borderBottom: '1px solid #fff' 
                 }}>
                     СГЕНЕРИРОВАТЬ КП &rarr;
                 </Link>
             </div>
          </div>
       </div>

       {/* 1. КОНТЕКСТНАЯ РЕКЛАМА (PPC) */}
       <div className="container-grid">
          <div className="col-left">01 // PPC</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '20px', fontSize: '2rem' }}>КОНТЕКСТНАЯ РЕКЛАМА</h2>
             <p className="desc" style={{ marginBottom: '40px', fontSize: '0.9rem' }}>
                Настройка Яндекс.Директ под ключ. Специализация на сложных нишах (Авто, Недвижимость, B2B). 
                Борьба со скликиванием включена во все тарифы.
             </p>
             
             <div className="ads-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                
                {/* START */}
                <div className="ads-card">
                   <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>LEVEL 1</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>START</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '20px' }}>
                      60.000 ₽
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Аудит текущих кампаний</li>
                      <li>Поиск + РСЯ (до 500 ключей)</li>
                      <li>Базовая аналитика (Метрика)</li>
                      <li>Ретаргетинг (простой)</li>
                      <li><strong>Ведение:</strong> 1 месяц бесплатно</li>
                   </ul>
                </div>

                {/* PERFORMANCE */}
                <div className="ads-card" style={{ border: '1px solid var(--accent)', background: 'rgba(0,68,255,0.03)' }}>
                   <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '10px', fontWeight: 800 }}>POPULAR</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>PERFORMANCE</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      120.000 ₽
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Все из тарифа Start</li>
                      <li><strong>Anti-Fraud защита</strong> (от ботов)</li>
                      <li>Сквозная аналитика (Calltouch)</li>
                      <li>Гиперлокальный таргетинг</li>
                      <li>Еженедельные отчеты (Zoom)</li>
                   </ul>
                </div>

                {/* DEALER */}
                <div className="ads-card">
                   <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>LEVEL 3</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>DEALER / MAX</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      250.000 ₽
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Стратегия "Доминация в выдаче"</li>
                      <li>Товарные кампании (ЕПК)</li>
                      <li>Парсинг конкурентов 24/7</li>
                      <li>Интеграция с CRM / 1С</li>
                      <li>Аудит отдела продаж</li>
                   </ul>
                </div>
             </div>
          </div>
       </div>

       {/* 2. SEO ПРОДВИЖЕНИЕ */}
       <div className="container-grid">
          <div className="col-left">02 // SEO</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '20px', fontSize: '2rem' }}>SEO OPTIMIZATION</h2>
             <p className="desc" style={{ marginBottom: '40px', fontSize: '0.9rem' }}>
                Вывод сайта в ТОП-10 Google и Яндекс. Работаем с техничкой, контентом и поведенческими факторами.
                Только "белые" методы.
             </p>
             
             <div className="ads-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                
                {/* AUDIT */}
                <div className="ads-card">
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>TECH AUDIT</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '20px' }}>
                      50.000 ₽
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Разовый технический аудит</li>
                      <li>Поиск ошибок индексации</li>
                      <li>Проверка Core Web Vitals</li>
                      <li>ТЗ для программистов</li>
                   </ul>
                </div>

                {/* GROWTH */}
                <div className="ads-card">
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>GROWTH</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      80.000 ₽ <span style={{fontSize: '1rem'}}>/ мес</span>
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Сбор семантики (до 1000 ключей)</li>
                      <li>Оптимизация мета-тегов</li>
                      <li>Написание текстов (5 шт/мес)</li>
                      <li>Работа с коммерческими факторами</li>
                   </ul>
                </div>

                {/* LEADER */}
                <div className="ads-card">
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>LEADER</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      150.000 ₽ <span style={{fontSize: '1rem'}}>/ мес</span>
                   </div>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Продвижение по всей РФ</li>
                      <li>Масштабная контент-стратегия</li>
                      <li>Работа с внешними ссылками (Outreach)</li>
                      <li>Программное SEO (генерация страниц)</li>
                   </ul>
                </div>
             </div>
          </div>
       </div>

       {/* 3. РАЗРАБОТКА САЙТОВ */}
       <div className="container-grid" style={{ borderBottom: 'none' }}>
          <div className="col-left">03 // DEV</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '20px', fontSize: '2rem' }}>WEB PRODUCTION</h2>
             <p className="desc" style={{ marginBottom: '40px', fontSize: '0.9rem' }}>
                Разработка на современном стеке (Next.js, React). Без конструкторов. 
                Скорость загрузки до 0.5 сек. Гарантия Green Zone в Google Speed.
             </p>
             
             <div className="ads-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                
                {/* LANDING */}
                <div className="ads-card">
                   <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>FAST START</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>LANDING PAGE</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '20px' }}>
                      от 80.000 ₽
                   </div>
                   <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                      Для запуска продукта, услуги или модели авто. Срок: 10-14 дней.
                   </p>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Next.js (SSG)</li>
                      <li>Анимации (Framer Motion)</li>
                      <li>Адаптив под все устройства</li>
                      <li>CRM-интеграция</li>
                   </ul>
                </div>

                {/* CORPORATE */}
                <div className="ads-card">
                   <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '10px' }}>BUSINESS</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>CORPORATE</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      от 250.000 ₽
                   </div>
                   <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                      Многостраничные сайты для заводов, застройщиков, IT-компаний.
                   </p>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Удобная админка (Headless CMS)</li>
                      <li>SEO-структура (Blog, Services)</li>
                      <li>Многоязычность (i18n)</li>
                      <li>Срок: 1-2 месяца</li>
                   </ul>
                </div>

                {/* E-COMMERCE */}
                <div className="ads-card" style={{ border: '1px solid #fff' }}>
                   <div style={{ fontSize: '0.8rem', color: '#fff', marginBottom: '10px' }}>ENTERPRISE</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>E-COMMERCE</h3>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                      от 1.000.000 ₽
                   </div>
                   <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                      Масштабируемые магазины и маркетплейсы. Высокая нагрузка.
                   </p>
                   <ul className="svc-list" style={{ fontSize: '0.9rem' }}>
                      <li>Микросервисная архитектура</li>
                      <li>Интеграция с 1С / МойСклад / ERP</li>
                      <li>ElasticSearch (Умный поиск)</li>
                      <li>Личные кабинеты, PWA</li>
                      <li>Срок: от 3 месяцев</li>
                   </ul>
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}
