'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useModal } from '../context/ModalContext'

export function ContactModal() {
  const { isOpen, closeModal } = useModal()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(true) // Чекбокс нажат по умолчанию (это законно, если есть возможность отжать)
  const [isSent, setIsSent] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return alert('Нужно согласие на обработку данных')
    
    // Тут логика отправки в Telegram / CRM
    console.log('Send:', { name, phone })
    
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      closeModal()
    }, 3000)
  }

  return (
    <div className="modal-overlay active" onClick={closeModal}>
       <div className="modal-window" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>×</button>
          
          {!isSent ? (
            <>
              <div className="modal-header">
                 START PROJECT //
              </div>
              <h2 className="huge-text" style={{ fontSize: '2rem', marginBottom: '30px' }}>
                 ОБСУДИТЬ ЗАДАЧУ
              </h2>
              
              <form className="brutal-form" onSubmit={handleSubmit}>
                 <div className="form-group">
                    <label>ВАШЕ ИМЯ</label>
                    <input 
                       type="text" placeholder="ИВАН" required 
                       value={name} onChange={e => setName(e.target.value)}
                    />
                 </div>
                 <div className="form-group">
                    <label>ТЕЛЕФОН / TELEGRAM</label>
                    <input 
                       type="text" placeholder="+7 999 ..." required 
                       value={phone} onChange={e => setPhone(e.target.value)}
                    />
                 </div>

                 {/* 152-ФЗ ЧЕКБОКС */}
                 <div className="checkbox-group" style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <input 
                        type="checkbox" 
                        id="policy" 
                        checked={agreed} 
                        onChange={e => setAgreed(e.target.checked)}
                        style={{ width: '20px', height: '20px', marginTop: '3px', accentColor: 'var(--accent)', cursor: 'pointer' }}
                    />
                    <label htmlFor="policy" style={{ fontSize: '0.75rem', color: '#666', lineHeight: '1.4', cursor: 'pointer' }}>
                        Нажимая кнопку, я даю согласие на обработку персональных данных 
                        и принимаю условия <Link href="/privacy" className="highlight" style={{ textDecoration: 'underline' }}>Политики конфиденциальности</Link>.
                    </label>
                 </div>

                 <button type="submit" className="btn-submit interactive">
                    ОТПРАВИТЬ ЗАЯВКУ
                 </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
               <div style={{ fontSize: '4rem', color: 'var(--accent)', marginBottom: '20px' }}>✓</div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>ЗАЯВКА ПРИНЯТА</h3>
               <p style={{ color: '#888' }}>Мы свяжемся с вами в течение 15 минут.</p>
            </div>
          )}
       </div>
    </div>
  )
}
