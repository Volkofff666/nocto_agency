import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'

export const metadata = { title: 'Кейсы | NOCTO', description: 'Реальные цифры.' }

function getCases() {
  const casesDir = path.join(process.cwd(), 'content/cases')
  if (!fs.existsSync(casesDir)) return []
  
  const files = fs.readdirSync(casesDir)
  return files.filter(file => file.endsWith('.md')).map(file => {
    const content = fs.readFileSync(path.join(casesDir, file), 'utf-8')
    const { data } = matter(content)
    return {
      slug: file.replace('.md', ''),
      ...data
    }
  })
}

export default function CasesPage() {
  const cases = getCases()

  return (
    <section className="container-grid">
       <div className="col-left">
          <Breadcrumbs />
          <div style={{ marginTop: '20px' }}>04 // CASE STUDY</div>
       </div>
       <div className="col-right">
          <h1 className="huge-text">REAL DATA</h1>
          
          <div className="ads-grid">
             {cases.map((item: any) => (
                <Link href={`/cases/${item.slug}`} key={item.slug} className="ads-card interactive">
                    <div className="ads-icon" style={{ color: 'var(--accent)' }}>[{item.category}]</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>
                        {item.title}
                    </h3>
                    <p className="desc" style={{ fontSize: '0.9rem' }}>
                        {item.description}
                    </p>
                    <div className="tech-item" style={{ 
                        marginTop: '20px', borderTop: '1px solid #333', paddingTop: '10px', 
                        background: 'transparent', minHeight: 'auto', padding: 0 
                    }}>
                        <span style={{ fontSize: '0.7rem', color: '#666' }}>READ CASE &rarr;</span>
                    </div>
                </Link>
             ))}
          </div>
       </div>
    </section>
  )
}
