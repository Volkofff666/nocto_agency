import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
// import Image from 'next/image' // Раскомментируйте, если настроили
import { Breadcrumbs } from '../../../components/Breadcrumbs'

const contentDirectory = path.join(process.cwd(), 'content')

// 1. SSG Paths
export async function generateStaticParams() {
  if (!fs.existsSync(contentDirectory)) return []
  const files = fs.readdirSync(contentDirectory)
  return files
    .filter(file => file.endsWith('.md'))
    .map(filename => ({ slug: filename.replace('.md', '') }))
}

// 2. Get Post Data
function getPost(slug: string) {
  const filePath = path.join(contentDirectory, slug + '.md')
  if (!fs.existsSync(filePath)) return null
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return { frontmatter, content }
}

// 3. УМНАЯ ПЕРЕЛИНКОВКА (Новое)
function getRelatedPosts(currentSlug: string, currentCategory: string) {
  if (!fs.existsSync(contentDirectory)) return []
  
  const files = fs.readdirSync(contentDirectory)
  
  const allPosts = files
    .filter(file => file.endsWith('.md') && file !== `${currentSlug}.md`)
    .map(filename => {
      const content = fs.readFileSync(path.join(contentDirectory, filename), 'utf-8')
      const { data } = matter(content)
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        category: data.category || 'GENERAL',
        date: data.date // Добавили дату для блога
      }
    })

  // Ищем совпадения по категории
  const related = allPosts.filter(p => p.category === currentCategory)
  
  // Если мало релевантных, добиваем остальными
  if (related.length < 2) {
    const others = allPosts.filter(p => p.category !== currentCategory)
    return [...related, ...others].slice(0, 2)
  }

  return related.slice(0, 2)
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  const post = getPost(slug)

  if (!post) {
     return <div className="container-grid"><div className="col-right">POST NOT FOUND</div></div>
  }

  const { frontmatter, content } = post
  const relatedPosts = getRelatedPosts(slug, frontmatter.category)

  return (
    <article className="container-grid">
       <div className="col-left">
          <Breadcrumbs />
          <div style={{ marginTop: '20px' }}>
            BACK // <Link href="/blog" className="highlight interactive">DATABASE</Link>
          </div>
       </div>
       
       <div className="col-right article-content">
          <h1 className="huge-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
             {frontmatter.title}
          </h1>
          
          <div className="meta">
             <span>DATE: {frontmatter.date}</span>
             <span>CAT: <span className="highlight">{frontmatter.category}</span></span>
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
                  НУЖЕН ТАКОЙ ЖЕ РЕЗУЛЬТАТ?
              </h3>
              <p style={{ color: '#ccc', marginBottom: '30px' }}>
                  Мы не просто пишем статьи. Мы внедряем эти технологии в бизнес. 
                  Запишитесь на бесплатный разбор вашего проекта.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link href="mailto:hello@nocto.ru" className="btn-brutal interactive">
                    ОБСУДИТЬ ПРОЕКТ
                </Link>
                <Link href="/cases" className="interactive" style={{ 
                    display: 'flex', alignItems: 'center', color: '#fff', borderBottom: '1px solid #fff'
                }}>
                    СМОТРЕТЬ КЕЙСЫ →
                </Link>
              </div>
          </div>

          {/* --- RELATED POSTS (Новый блок) --- */}
          {relatedPosts.length > 0 && (
             <div style={{ marginTop: '80px' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', textTransform: 'uppercase' }}>
                   {/* Динамический заголовок */}
                   {relatedPosts[0].category === frontmatter.category ? 'RELATED ARTICLES //' : 'LATEST UPDATES //'}
                </h3>
                
                <div className="blog-list" style={{ marginTop: '0' }}>
                   {relatedPosts.map(p => (
                      <Link href={`/blog/${p.slug}`} key={p.slug} className="blog-row interactive">
                         <span className="blog-date">{p.date}</span>
                         <span className="blog-title">{p.title}</span>
                         <span className="blog-cat highlight">[{p.category}]</span>
                      </Link>
                   ))}
                </div>
             </div>
          )}
       </div>
    </article>
  )
}
