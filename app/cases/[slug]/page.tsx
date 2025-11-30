import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { Breadcrumbs } from '../../../components/Breadcrumbs'

const casesDirectory = path.join(process.cwd(), 'content/cases')

// 1. SSG Paths
export async function generateStaticParams() {
  if (!fs.existsSync(casesDirectory)) return []
  const files = fs.readdirSync(casesDirectory)
  return files
    .filter(file => file.endsWith('.md'))
    .map(filename => ({ slug: filename.replace('.md', '') }))
}

// 2. Get Data
function getCase(slug: string) {
  const filePath = path.join(casesDirectory, slug + '.md')
  if (!fs.existsSync(filePath)) return null
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return { frontmatter, content }
}

// 3. УМНАЯ ФУНКЦИЯ ПЕРЕЛИНКОВКИ
function getRelatedCases(currentSlug: string, currentCategory: string) {
  if (!fs.existsSync(casesDirectory)) return []
  
  const files = fs.readdirSync(casesDirectory)
  
  // Считываем все кейсы
  const allCases = files
    .filter(file => file.endsWith('.md') && file !== `${currentSlug}.md`)
    .map(filename => {
      const content = fs.readFileSync(path.join(casesDirectory, filename), 'utf-8')
      const { data } = matter(content)
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        category: data.category || 'GENERAL', // Если категории нет, ставим заглушку
        description: data.description
      }
    })

  // Шаг 1: Ищем совпадения по категории (самые релевантные)
  const related = allCases.filter(c => c.category === currentCategory)
  
  // Шаг 2: Если релевантных меньше 2, добавляем остальные (чтобы блок не был пустым)
  if (related.length < 2) {
    const others = allCases.filter(c => c.category !== currentCategory)
    // Добавляем недостающие из "других", пока не станет 2
    return [...related, ...others].slice(0, 2)
  }

  // Возвращаем только релевантные (максимум 2)
  return related.slice(0, 2)
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = getCase(slug)

  if (!post) {
     return <div className="container-grid"><div className="col-right">CASE NOT FOUND</div></div>
  }

  const { frontmatter, content } = post
  
  // Вызываем умную функцию поиска похожих
  const relatedCases = getRelatedCases(slug, frontmatter.category)

  return (
    <article className="container-grid">
       <div className="col-left">
          <Breadcrumbs />
          <div style={{ marginTop: '20px' }}>
            BACK // <Link href="/cases" className="highlight interactive">ALL CASES</Link>
          </div>
       </div>
       
       <div className="col-right article-content">
          <h1 className="huge-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
             {frontmatter.title}
          </h1>
          
          <div className="meta">
             <span>PROJECT: <span className="highlight">{frontmatter.category}</span></span>
             <span>DATE: {frontmatter.date}</span>
          </div>
          
          <div className="markdown-body desc">
             <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* CTA BLOCK */}
          <div style={{ 
              marginTop: '80px', padding: '40px', border: '1px solid var(--accent)', 
              background: 'rgba(0, 68, 255, 0.05)' 
          }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                  ХОТИТЕ ПОВТОРИТЬ ЭТОТ РЕЗУЛЬТАТ?
              </h3>
              <p style={{ color: '#ccc', marginBottom: '30px' }}>
                  Мы готовы проанализировать ваш проект и составить план действий.
              </p>
              <Link href="/calculator" className="btn-brutal interactive">
                  РАССЧИТАТЬ ROI ПРОЕКТА
              </Link>
          </div>

          {/* --- БЛОК "ПОХОЖИЕ КЕЙСЫ" --- */}
          {relatedCases.length > 0 && (
             <div style={{ marginTop: '80px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', textTransform: 'uppercase' }}>
                   {/* Если нашли похожие по категории, пишем RELATED, иначе NEXT */}
                   {relatedCases[0].category === frontmatter.category ? 'RELATED PROJECTS //' : 'NEXT PROJECTS //'}
                </h3>
                
                <div className="ads-grid" style={{ marginTop: '0' }}>
                   {relatedCases.map(c => (
                      <Link href={`/cases/${c.slug}`} key={c.slug} className="ads-card interactive" style={{ textDecoration: 'none' }}>
                         <div className="ads-icon">[{c.category}]</div>
                         <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px' }}>{c.title}</h3>
                         {/* Добавил краткое описание для наглядности */}
                         {c.description && (
                             <p style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1.4' }}>
                                 {c.description.slice(0, 80)}...
                             </p>
                         )}
                      </Link>
                   ))}
                </div>
             </div>
          )}
       </div>
    </article>
  )
}
