import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* 1. SEO: JSON-LD SCHEME */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NOCTO Digital",
            "image": "https://nocto.ru/og-image.jpg",
            "url": "https://nocto.ru",
            "telephone": "+79990000000",
            "email": "hello@nocto.ru",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Екатеринбург",
              "addressCountry": "RU"
            },
            "priceRange": "$$$",
            "sameAs": ["https://t.me/nocto_agency"]
          })
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Сколько стоит сайт?",
                "acceptedAnswer": { "@type": "Answer", "text": "Лендинг от 60к. Корпоративный от 150к." }
              },
              {
                "@type": "Question",
                "name": "Гарантии есть?",
                "acceptedAnswer": { "@type": "Answer", "text": "Да. Прописываем KPI в договоре." }
              }
            ]
          })
        }}
      />

      {/* 2. HERO SECTION (Обновленный) */}
      <section className="hero-brutal">
        <div className="hero-text-wrapper">
           <div className="scrolling-text">
              NOCTO DIGITAL <span className="outline">SYSTEMS</span> — WEB PERFORMANCE —
           </div>
        </div>
        
        {/* Правый нижний угол */}
        <div className="hero-subtext" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-end', 
            gap: '20px' 
        }}>
           <div style={{ opacity: 0.7, textAlign: 'right' }}>
               [ULTRFAST WEB] <br/> [SEO ARCHITECTURE] <br/> [URAL REGION]
           </div>

           {/* НОВАЯ ЗАМЕТНАЯ КНОПКА КП */}
           <Link href="/proposal" className="interactive" style={{
               background: 'var(--accent)', // Синий фон
               color: '#fff',
               padding: '15px 30px',
               fontWeight: '800',
               fontSize: '1rem',
               letterSpacing: '1px',
               border: '1px solid #fff',
               display: 'inline-flex',
               alignItems: 'center',
               gap: '12px',
               boxShadow: '10px 10px 0px rgba(255,255,255,0.1)', // Жесткая тень
               textDecoration: 'none'
           }}>
               {/* Мигающая точка */}
               <span style={{ 
                   width: '10px', height: '10px', background: '#fff', 
                   borderRadius: '50%', animation: 'blink 1s infinite' 
               }}></span>
               СГЕНЕРИРОВАТЬ КП
           </Link>
        </div>
      </section>

      {/* 3. CLIENTS MARQUEE (Бегущая строка брендов) */}
      <div style={{ 
          borderBottom: '1px solid var(--line)', 
          padding: '25px 0', 
          overflow: 'hidden', 
          background: '#0a0a0a',
          whiteSpace: 'nowrap',
          userSelect: 'none'
      }}>
         <div style={{ 
             display: 'inline-block', 
             animation: 'scrollText 40s linear infinite',
             fontFamily: 'monospace',
             fontSize: '1.1rem',
             color: '#555',
             fontWeight: 800
         }}>
            TRUSTED BY: &nbsp;&nbsp;&nbsp;
            <span className="highlight">HAVAL</span> &nbsp;/&nbsp; 
            CHERY &nbsp;/&nbsp; 
            EXEED &nbsp;/&nbsp; 
            OMODA &nbsp;/&nbsp; 
            TANK &nbsp;/&nbsp; 
            GEELY &nbsp;/&nbsp; 
            JAECOO &nbsp;/&nbsp; 
            KAIYI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* Повтор для бесконечности */}
            <span className="highlight">HAVAL</span> &nbsp;/&nbsp; 
            CHERY &nbsp;/&nbsp; 
            EXEED &nbsp;/&nbsp; 
            OMODA &nbsp;/&nbsp; 
            TANK &nbsp;/&nbsp; 
            GEELY &nbsp;/&nbsp; 
            JAECOO &nbsp;/&nbsp; 
            KAIYI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span className="highlight">HAVAL</span> &nbsp;/&nbsp; 
            CHERY &nbsp;/&nbsp; 
            EXEED &nbsp;/&nbsp; 
            OMODA &nbsp;/&nbsp; 
            TANK &nbsp;/&nbsp; 
            GEELY &nbsp;/&nbsp; 
            JAECOO &nbsp;/&nbsp; 
            KAIYI
         </div>
      </div>

      {/* 4. PHILOSOPHY */}
      <section className="container-grid">
         <div className="col-left">
            01 // ФИЛОСОФИЯ
         </div>
         <div className="col-right">
            <h2 className="huge-text">
               МЫ НЕ "КРЕАТИВНОЕ АГЕНТСТВО". <br/>
               <span className="highlight">МЫ ТЕХНО-КУЛЬТ.</span>
            </h2>
            <p className="desc">
               Каждая секунда загрузки сайта убивает конверсию на 7%. 
               Если ваш сайт грузится 3 секунды — вы сжигаете бюджет рекламы впустую. 
               Мы лечим это хирургически.
            </p>
            
            <div className="stats-grid">
               <div>
                  <div className="stat-val highlight">0.4s</div>
                  <div className="stat-label">SPEED INDEX</div>
               </div>
               <div>
                  <div className="stat-val">98/100</div>
                  <div className="stat-label">GOOGLE SCORE</div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. STANDARDS */}
      <section className="container-grid">
         <div className="col-left">
            02 // СТАНДАРТЫ
         </div>
         <div className="col-right">
            <div className="standards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                   <h3 className="svc-name">ЧИСТЫЙ КОД</h3>
                   <p className="desc" style={{ marginTop: '20px', fontSize: '1rem' }}>
                      Мы не используем конструкторы. Только чистый код. 
                      React, Next.js, FastAPI. Ваши конкуренты плачут в сторонке.
                   </p>
                </div>
                <div>
                   <h3 className="svc-name">SEO-ARCHITECT</h3>
                   <p className="desc" style={{ marginTop: '20px', fontSize: '1rem' }}>
                      Google любит структуру. Мы используем JSON-LD, H1-H6 иерархию и семантические теги. 
                      Топ-10 неизбежен.
                   </p>
                </div>
                <div>
                   <h3 className="svc-name">MOBILE FIRST</h3>
                   <p className="desc" style={{ marginTop: '20px', fontSize: '1rem' }}>
                      80% ваших клиентов сидят с телефона. Мы начинаем дизайн с мобильной версии, 
                      а не наоборот.
                   </p>
                </div>
                <div>
                   <h3 className="svc-name">SECURITY</h3>
                   <p className="desc" style={{ marginTop: '20px', fontSize: '1rem' }}>
                      Защита от DDoS (Cloudflare), SQL-инъекций и XSS. 
                      Мы закрываем админки и прячем IP серверов.
                   </p>
                </div>
            </div>
         </div>
      </section>

      {/* 6. TECH STACK */}
      <section className="container-grid">
         <div className="col-left">
            03 // СТЕК
         </div>
         <div className="col-right">
            <div className="tech-grid">
               {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'PYTHON', 'FASTAPI', 'DOCKER', 'POSTGRES', 'REDIS'].map((tech) => (
                  <div key={tech} className="tech-item interactive">
                     {tech} <span>[CORE]</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="container-grid">
         <div className="col-left">
            FAQ // INFO
         </div>
         <div className="col-right">
            <details className="faq-item">
               <summary>СКОЛЬКО СТОИТ САЙТ?</summary>
               <p>Лендинг от 60к. Корпоративный от 150к. E-commerce от 300к. Мы не делаем дешево, мы делаем окупаемо.</p>
            </details>
            <details className="faq-item">
               <summary>ВЫ РАБОТАЕТЕ С BITRIX?</summary>
               <p>Только в режиме Headless (как backend). Фронтенд мы пишем на React. Это единственный способ сделать Битрикс быстрым.</p>
            </details>
            <details className="faq-item">
               <summary>ГАРАНТИИ ЕСТЬ?</summary>
               <p>Да. Мы прописываем KPI в договоре. Если сайт не проходит Green Zone в Google Speed — мы возвращаем деньги.</p>
            </details>
         </div>
      </section>
    </>
  )
}
