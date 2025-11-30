import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="hero-brutal" style={{ height: '80vh', border: 'none' }}>
       <div className="container-grid" style={{ border: 'none', alignItems: 'center' }}>
          <div className="col-left" style={{ border: 'none' }}>
             ERROR // 404
          </div>
          <div className="col-right">
             <h1 className="huge-text">PAGE NOT FOUND</h1>
             <p className="desc" style={{ marginBottom: '40px' }}>
                Похоже, этой страницы больше нет. Или ее украли конкуренты.
             </p>
             <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/" className="btn-brutal interactive">
                   НА ГЛАВНУЮ
                </Link>
                <Link href="/blog" className="btn-brutal interactive" style={{ background: 'transparent', border: '1px solid #fff' }}>
                   ЧИТАТЬ БЛОГ
                </Link>
             </div>
          </div>
       </div>
    </div>
  )
}
