import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const metadata = {
  title: 'Манифест и Принципы | NOCTO',
  description: 'Почему мы стоим дороже фрилансеров. Наша философия: Отказ от Junior-разработчиков, работа по SLA, прозрачность.',
}

export default function ManifestoPage() {
  return (
    <section>
       {/* HERO: DIGITAL DARWINISM */}
       <div className="container-grid">
          <div className="col-left">
             <Breadcrumbs />
             <div style={{ marginTop: '20px' }}>CULT // DNA</div>
          </div>
          <div className="col-right">
             <h1 className="huge-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
                ЦИФРОВОЙ ДАРВИНИЗМ: <br/>
                ВЫЖИВАЕТ <span className="highlight">БЫСТРЕЙШИЙ.</span>
             </h1>
             <p className="desc" style={{ marginTop: '30px', fontSize: '1.1rem', maxWidth: '800px' }}>
                Рынок переполнен одинаковыми веб-студиями, которые продают "креатив" и "воздух". 
                Мы — антитеза. Мы инженерная компания, которая решает бизнес-задачи через код и математику.
             </p>
          </div>
       </div>

       {/* 1. PROTOCOLS (Наши догмы) */}
       <div className="container-grid">
          <div className="col-left">01 // DOGMAS</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '40px', fontSize: '2rem' }}>НАШИ ПРОТОКОЛЫ</h2>
             
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                
                {/* DOGMA 1 */}
                <div style={{ borderTop: '2px solid var(--accent)', paddingTop: '20px' }}>
                   <div style={{ fontSize: '3rem', fontWeight: 800, color: '#222', lineHeight: 1 }}>01</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: '15px 0' }}>NO JUNIOR POLICY</h3>
                   <p style={{ color: '#888' }}>
                      Мы не обучаем стажеров за ваши деньги. 
                      Над вашим проектом работают только Middle+ и Senior специалисты. 
                      Это дорого, но это исключает "детские" ошибки в коде.
                   </p>
                </div>

                {/* DOGMA 2 */}
                <div style={{ borderTop: '2px solid var(--accent)', paddingTop: '20px' }}>
                   <div style={{ fontSize: '3rem', fontWeight: 800, color: '#222', lineHeight: 1 }}>02</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: '15px 0' }}>RADICAL TRUTH</h3>
                   <p style={{ color: '#888' }}>
                      Мы не скрываем доступы. Вы получаете доступы к репозиторию (Git), 
                      рекламным кабинетам и серверам с первого дня. 
                      Мы работаем так, будто нас аудируют каждый день.
                   </p>
                </div>

                {/* DOGMA 3 */}
                <div style={{ borderTop: '2px solid var(--accent)', paddingTop: '20px' }}>
                   <div style={{ fontSize: '3rem', fontWeight: 800, color: '#222', lineHeight: 1 }}>03</div>
                   <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: '15px 0' }}>SPEED IS RELIGION</h3>
                   <p style={{ color: '#888' }}>
                      Мы одержимы скоростью. Если сайт грузится дольше 1 секунды — мы считаем это багом. 
                      В мире TikTok у вас есть 0.5 сек, чтобы захватить внимание.
                   </p>
                </div>
             </div>
          </div>
       </div>

       {/* 2. PROCESS (Как мы работаем) */}
       <div className="container-grid">
          <div className="col-left">02 // PIPELINE</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '40px', fontSize: '2rem' }}>ПРОЦЕСС РАБОТЫ</h2>
             
             <div className="process-list">
                <div className="process-item" style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                   <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)', minWidth: '30px' }}>01</div>
                   <div>
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px' }}>ДЕКОМПОЗИЦИЯ (DISCOVERY)</h3>
                      <p style={{ color: '#666' }}>
                         Мы не начинаем "делать сайт". Мы начинаем с цифр. Кто ЦА? Какой LTV? Какая маржа? 
                         Мы строим финансовую модель проекта еще до первой строчки кода.
                      </p>
                   </div>
                </div>

                <div className="process-item" style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                   <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)', minWidth: '30px' }}>02</div>
                   <div>
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px' }}>SPRINT DEVELOPMENT</h3>
                      <p style={{ color: '#666' }}>
                         Работаем по Agile/Scrum. Каждую пятницу — демо. Вы видите прогресс не в конце месяца, а каждую неделю. 
                         Никаких "черных ящиков".
                      </p>
                   </div>
                </div>

                <div className="process-item" style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
                   <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)', minWidth: '30px' }}>03</div>
                   <div>
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px' }}>QUALITY ASSURANCE (QA)</h3>
                      <p style={{ color: '#666' }}>
                         Наш код проходит 3 этапа проверки: Линтеры (авто-проверка), Code Review (старший разработчик) и Нагрузочное тестирование (выдержит ли 10к пользователей).
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* 3. KILLER FAQ (Закрытие возражений) */}
       <div className="container-grid">
          <div className="col-left">03 // Q&A</div>
          <div className="col-right">
             <h2 className="svc-name" style={{ marginBottom: '40px', fontSize: '2rem' }}>НЕУДОБНЫЕ ВОПРОСЫ</h2>
             
             <details className="faq-item">
                <summary style={{color: '#fff'}}>ПОЧЕМУ ТАК ДОРОГО? ФРИЛАНСЕРЫ ДЕЛАЮТ ЗА 30К.</summary>
                <p>
                   Фрилансер продает вам "картинку". Мы продаем бизнес-систему. 
                   В нашу цену заложены: защита от взлома, SEO-архитектура, аналитика, мобильная адаптация и серверная оптимизация. 
                   Исправлять сайт за фрилансером обычно стоит дороже, чем сделать сразу нормально.
                </p>
             </details>

             <details className="faq-item">
                <summary style={{color: '#fff'}}>ВЫ НЕ ПРОПАДЕТЕ ПОСЛЕ ЗАПУСКА?</summary>
                <p>
                   Мы заинтересованы в LTV (долгом сотрудничестве). 90% наших клиентов остаются на техподдержку и маркетинг. 
                   Мы юридическое лицо, работаем по договору с жесткими SLA (гарантиями доступности).
                </p>
             </details>

             <details className="faq-item">
                <summary style={{color: '#fff'}}>А ЕСЛИ НЕ ПОЛУЧИТСЯ (НЕ БУДЕТ ЛИДОВ)?</summary>
                <p>
                   В маркетинге мы прописываем KPI. Если мы не выполняем план по лидам из-за нашей ошибки настройки — мы работаем следующий месяц бесплатно, пока не исправим ситуацию. 
                   Это честно.
                </p>
             </details>

             <details className="faq-item">
                <summary style={{color: '#fff'}}>ВЫ РАБОТАЕТЕ С ШАБЛОНАМИ?</summary>
                <p>
                   Нет. Каждый проект — это кастомная разработка под ваши задачи. 
                   Шаблоны медленные, уязвимые и не гибкие. Мы строим архитектуру, которая прослужит 5-7 лет, а не устареет через полгода.
                </p>
             </details>
          </div>
       </div>

       {/* 4. CTA */}
       <div className="container-grid" style={{ borderBottom: 'none' }}>
          <div className="col-left">04 // START</div>
          <div className="col-right">
             <div style={{ background: '#111', padding: '50px', border: '1px solid #333' }}>
                <h2 style={{ color: '#fff', marginBottom: '20px' }}>ГОТОВЫ РАБОТАТЬ СО ВЗРОСЛЫМИ?</h2>
                <p style={{ color: '#ccc', marginBottom: '30px', maxWidth: '600px' }}>
                   Если вы устали от подрядчиков, которые срывают сроки и кормят "завтраками", давайте обсудим ваш проект. 
                   Мы скажем правду: сколько это стоит и когда окупится.
                </p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                   <Link href="/proposal" className="btn-brutal interactive">
                      СГЕНЕРИРОВАТЬ СТРАТЕГИЮ
                   </Link>
                   <Link href="https://t.me/nocto_agency" className="interactive" style={{ 
                       display: 'flex', alignItems: 'center', color: '#fff', borderBottom: '1px solid #fff' 
                   }}>
                       НАПИСАТЬ CEO В TELEGRAM &rarr;
                   </Link>
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}
