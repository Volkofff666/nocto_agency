'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CalculatorPage() {
  // Начальные значения (средние по рынку)
  const [budget, setBudget] = useState(100000)
  const [cpc, setCpc] = useState(45)
  const [siteConv, setSiteConv] = useState(3.5) // %
  const [salesConv, setSalesConv] = useState(20) // %
  const [avgCheck, setAvgCheck] = useState(15000)

  // Результаты (вычисляемые)
  const [clicks, setClicks] = useState(0)
  const [leads, setLeads] = useState(0)
  const [cpl, setCpl] = useState(0) // Цена лида
  const [sales, setSales] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [profit, setProfit] = useState(0)
  const [romi, setRomi] = useState(0)

  // Формула расчета
  useEffect(() => {
    const calcClicks = Math.floor(budget / cpc)
    const calcLeads = Math.floor(calcClicks * (siteConv / 100))
    const calcCpl = calcLeads > 0 ? Math.round(budget / calcLeads) : 0
    const calcSales = Math.floor(calcLeads * (salesConv / 100))
    const calcRevenue = calcSales * avgCheck
    const calcProfit = calcRevenue - budget
    const calcRomi = budget > 0 ? Math.round((calcProfit / budget) * 100) : 0

    setClicks(calcClicks)
    setLeads(calcLeads)
    setCpl(calcCpl)
    setSales(calcSales)
    setRevenue(calcRevenue)
    setProfit(calcProfit)
    setRomi(calcRomi)
  }, [budget, cpc, siteConv, salesConv, avgCheck])

  // Форматтер денег (100 000 ₽)
  const fmt = (num: number) => new Intl.NumberFormat('ru-RU').format(num)

  return (
    <section className="container-grid">
       <div className="col-left">
          SYSTEM // CALC
       </div>
       <div className="col-right">
          <h1 className="huge-text">FORECAST</h1>
          <p className="desc" style={{ marginBottom: '60px' }}>
             Рассчитайте окупаемость контекстной рекламы. Узнайте, сколько вы заработаете, 
             зная лишь свой средний чек и конверсию сайта.
          </p>

          <div className="calc-wrapper">
             {/* INPUTS BLOCK */}
             <div className="calc-inputs">
                
                {/* 1. Бюджет */}
                <div className="input-group">
                   <label>Рекламный бюджет: <span className="val">{fmt(budget)} ₽</span></label>
                   <input 
                      type="range" min="30000" max="1000000" step="5000" 
                      value={budget} onChange={e => setBudget(Number(e.target.value))} 
                   />
                </div>

                {/* 2. Цена клика (CPC) */}
                <div className="input-group">
                   <label>Цена клика (CPC): <span className="val">{cpc} ₽</span></label>
                   <input 
                      type="range" min="10" max="500" step="5" 
                      value={cpc} onChange={e => setCpc(Number(e.target.value))} 
                   />
                </div>

                {/* 3. Конверсия сайта */}
                <div className="input-group">
                   <label>Конверсия сайта: <span className="val highlight">{siteConv}%</span></label>
                   <input 
                      type="range" min="0.5" max="15" step="0.1" 
                      value={siteConv} onChange={e => setSiteConv(Number(e.target.value))} 
                   />
                </div>

                {/* 4. Конверсия отдела продаж */}
                <div className="input-group">
                   <label>Конверсия в продажу: <span className="val">{salesConv}%</span></label>
                   <input 
                      type="range" min="1" max="80" step="1" 
                      value={salesConv} onChange={e => setSalesConv(Number(e.target.value))} 
                   />
                </div>

                {/* 5. Средний чек */}
                <div className="input-group">
                   <label>Средний чек: <span className="val">{fmt(avgCheck)} ₽</span></label>
                   <input 
                      type="range" min="1000" max="500000" step="1000" 
                      value={avgCheck} onChange={e => setAvgCheck(Number(e.target.value))} 
                   />
                </div>

             </div>

             {/* OUTPUTS BLOCK */}
             <div className="calc-results">
                <div className="res-row">
                   <span>Трафик (клики):</span>
                   <strong>{fmt(clicks)}</strong>
                </div>
                <div className="res-row">
                   <span>Заявки (Leads):</span>
                   <strong className="highlight">{leads}</strong>
                </div>
                <div className="res-row">
                   <span>Стоимость лида (CPL):</span>
                   <strong>{fmt(cpl)} ₽</strong>
                </div>
                <div className="res-row sales">
                   <span>Продажи:</span>
                   <strong>{sales} сделок</strong>
                </div>
                
                <div className="total-block">
                   <div className="total-label">ЧИСТАЯ ПРИБЫЛЬ:</div>
                   <div className={`total-val ${profit > 0 ? 'pos' : 'neg'}`}>
                      {profit > 0 ? '+' : ''}{fmt(profit)} ₽
                   </div>
                   <div className="romi">ROMI: {romi}%</div>
                </div>

                <Link href="/auto" className="btn-brutal interactive" style={{ marginTop: '30px', width: '100%', textAlign: 'center', display: 'block' }}>
                   ХОЧУ ТАКИЕ ЦИФРЫ
                </Link>
             </div>
          </div>
          
          {/* SEO TEXT BLOCK */}
          <div className="markdown-body" style={{ marginTop: '80px' }}>
              <h3>Как это работает?</h3>
              <p>
                  Многие агентства продают "клики" или "показы". Мы продаем математику. 
                  Этот калькулятор показывает вашу <strong>Юнит-экономику</strong>. 
                  Если ваш ROMI положительный — рекламу можно масштабировать бесконечно.
              </p>
              <p>
                  Если вы видите убыток — значит, у вас либо низкая конверсия сайта, 
                  либо отдел продаж теряет заявки. Мы умеем лечить и то, и другое.
              </p>
          </div>

       </div>
    </section>
  )
}
