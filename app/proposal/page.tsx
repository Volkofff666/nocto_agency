'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useModal } from '../../context/ModalContext'

export default function ProposalPage() {
  const { openModal } = useModal()
  const [step, setStep] = useState<'form' | 'result'>('form')
  
  // Данные формы
  const [company, setCompany] = useState('')
  const [niche, setNiche] = useState('auto')
  const [budget, setBudget] = useState('300k')

  // Логика генерации "фейковых" цифр для КП
  const getEstimate = () => {
    if (budget === '100k') return { leads: '40-60', time: '2 недели' }
    if (budget === '300k') return { leads: '120-180', time: '3 недели' }
    return { leads: '300+', time: '1 месяц' }
  }

  const estimate = getEstimate()

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!company) return alert('Введите название компании')
    // Имитация "мышления" системы
    setStep('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section style={{ minHeight: '100vh' }}>
       {/* ШАГ 1: ФОРМА ВВОДА */}
       {step === 'form' && (
         <div className="container-grid" style={{ borderBottom: 'none', alignItems: 'center', minHeight: '80vh' }}>
            <div className="col-left">SYSTEM // GENERATOR</div>
            <div className="col-right">
               <h1 className="huge-text">ГЕНЕРАТОР КП</h1>
               <p className="desc" style={{ marginBottom: '40px' }}>
                  Получите предварительную стратегию развития и медиаплан для вашего бизнеса за 1 минуту. 
                  Без менеджеров и звонков.
               </p>

               <form className="brutal-form" style={{ maxWidth: '500px' }} onSubmit={handleGenerate}>
                  <div className="form-group">
                     <label>НАЗВАНИЕ КОМПАНИИ</label>
                     <input 
                        type="text" placeholder="Например: АВТО-СИТИ" 
                        value={company} onChange={e => setCompany(e.target.value)}
                     />
                  </div>
                  
                  <div className="form-group">
                     <label>НИША / ЗАДАЧА</label>
                     <select 
                        className="interactive"
                        value={niche} onChange={e => setNiche(e.target.value)}
                        style={{ 
                            width: '100%', background: 'transparent', border: 'none', 
                            borderBottom: '2px solid #333', color: '#fff', 
                            fontFamily: 'monospace', fontSize: '1.2rem', padding: '10px 0',
                            outline: 'none', cursor: 'pointer'
                        }}
                     >
                        <option value="auto" style={{ background: '#000' }}>Автобизнес (Дилеры)</option>
                        <option value="ecom" style={{ background: '#000' }}>E-commerce (Магазин)</option>
                        <option value="b2b" style={{ background: '#000' }}>Услуги B2B / Производство</option>
                     </select>
                  </div>

                  <div className="form-group">
                     <label>ПРИМЕРНЫЙ БЮДЖЕТ</label>
                     <select 
                        className="interactive"
                        value={budget} onChange={e => setBudget(e.target.value)}
                        style={{ 
                            width: '100%', background: 'transparent', border: 'none', 
                            borderBottom: '2px solid #333', color: '#fff', 
                            fontFamily: 'monospace', fontSize: '1.2rem', padding: '10px 0',
                            outline: 'none', cursor: 'pointer'
                        }}
                     >
                        <option value="100k" style={{ background: '#000' }}>До 150 000 ₽</option>
                        <option value="300k" style={{ background: '#000' }}>150 000 - 500 000 ₽</option>
                        <option value="1m" style={{ background: '#000' }}>От 1 000 000 ₽</option>
                     </select>
                  </div>

                  <button type="submit" className="btn-submit interactive" style={{ marginTop: '20px' }}>
                     СГЕНЕРИРОВАТЬ СТРАТЕГИЮ →
                  </button>
               </form>
            </div>
         </div>
       )}

       {/* ШАГ 2: РЕЗУЛЬТАТ (КП) */}
       {step === 'result' && (
         <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Шапка КП */}
            <div style={{ background: '#080808', padding: '60px 0', borderBottom: '1px solid #333' }}>
                <div className="container-grid" style={{ border: 'none', minHeight: 'auto' }}>
                    <div className="col-left">PROPOSAL // {new Date().getFullYear()}</div>
                    <div className="col-right">
                        <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>ПОДГОТОВЛЕНО СПЕЦИАЛЬНО ДЛЯ:</div>
                        <h1 className="huge-text" style={{ color: 'var(--accent)', marginBottom: '0', wordBreak: 'break-word' }}>
                           {company.toUpperCase()}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Цифры */}
            <div className="container-grid">
                <div className="col-left">01 // FORECAST</div>
                <div className="col-right">
                    <div className="stats-grid" style={{ marginTop: '0' }}>
                        <div>
                            <div className="stat-val highlight">{estimate.leads}</div>
                            <div className="stat-label">ПРОГНОЗ ЛИДОВ / МЕС</div>
                        </div>
                        <div>
                            <div className="stat-val">{estimate.time}</div>
                            <div className="stat-label">СРОК ЗАПУСКА</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* План работ */}
            <div className="container-grid">
                <div className="col-left">02 // ROADMAP</div>
                <div className="col-right">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#fff' }}>ПЛАН ДЕЙСТВИЙ:</h3>
                    
                    <ul className="svc-list">
                        {niche === 'auto' && (
                            <>
                                <li><strong>Анализ конкурентов:</strong> Парсинг семантики дилеров-конкурентов в вашем регионе.</li>
                                <li><strong>Anti-Fraud защита:</strong> Подключение базы Blacklist (15 000 площадок) для защиты от скликивания в РСЯ.</li>
                                <li><strong>Разработка лендингов:</strong> Создание быстрых посадочных страниц под конкретные модели авто (Model-Landing).</li>
                                <li><strong>Запуск трафика:</strong> Настройка РСЯ, Поиска и Ретаргетинга по базе CRM.</li>
                            </>
                        )}
                        {niche === 'ecom' && (
                            <>
                                <li><strong>Технический аудит:</strong> Проверка Core Web Vitals и скорости загрузки каталога.</li>
                                <li><strong>SEO-структура:</strong> Кластеризация запросов и создание посадочных под НЧ-запросы ("Купить X в Екатеринбурге").</li>
                                <li><strong>Товарная реклама:</strong> Настройка фидов для ЕПК (Единая Перфоманс Кампания) и Товарной Галереи.</li>
                            </>
                        )}
                        {niche === 'b2b' && (
                            <>
                                <li><strong>Анализ ЦА:</strong> Выявление ЛПР (Лиц, принимающих решения) и их болей.</li>
                                <li><strong>Упаковка:</strong> Создание презентационного лендинга с кейсами и цифрами.</li>
                                <li><strong>Контекст:</strong> Реклама по околоцелевым запросам и конкурентам.</li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

            {/* Итоговая стоимость */}
            <div className="container-grid">
                <div className="col-left">03 // COST</div>
                <div className="col-right">
                    <div style={{ border: '1px solid var(--accent)', padding: '40px', background: 'rgba(0, 68, 255, 0.05)' }}>
                        <h3 style={{ color: '#fff', marginBottom: '20px' }}>РЕКОМЕНДУЕМЫЙ ПАКЕТ "START"</h3>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                           {budget === '100k' ? '60 000 ₽' : budget === '300k' ? '120 000 ₽' : '250 000 ₽'} 
                           <span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}> / разово (Настройка)</span>
                        </div>
                        <p style={{ color: '#888', marginBottom: '30px' }}>
                           Включает: Настройку рекламных кампаний, подключение аналитики, защиту от ботов и первый месяц ведения.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <button onClick={openModal} className="btn-brutal interactive">
                                ЗАПУСТИТЬ ЭТУ СТРАТЕГИЮ
                            </button>
                            <button onClick={() => { setStep('form'); window.scrollTo(0,0); }} className="interactive" style={{ color: '#666', borderBottom: '1px solid #666' }}>
                                ИЗМЕНИТЬ ДАННЫЕ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
       )}
    </section>
  )
}
