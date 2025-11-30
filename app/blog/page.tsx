import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Breadcrumbs } from '../../components/Breadcrumbs'

function getPosts() {
  const contentDirectory = path.join(process.cwd(), 'content')
  if (!fs.existsSync(contentDirectory)) return []

  const files = fs.readdirSync(contentDirectory)
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    const filePath = path.join(contentDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    
    return {
      slug: filename.replace('.md', ''),
      frontmatter: data
    }
  })
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <section className="container-grid">
      <div className="col-left">
         <Breadcrumbs />
         <div style={{ marginTop: '20px' }}>DATABASE // INDEX</div>
      </div>
      <div className="col-right">
        <h1 className="huge-text">DATABASE</h1>
        
        <div className="blog-list">
          {posts.length === 0 ? (
             <p className="desc">NO DATA FOUND.</p>
          ) : (
             posts.map((post: any) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-row interactive">
                   <span className="blog-date">
                      {post.frontmatter.date}
                   </span>
                   <span className="blog-title">
                      {post.frontmatter.title}
                   </span>
                   <span className="blog-cat highlight">
                      [{post.frontmatter.category}]
                   </span>
                </Link>
             ))
          )}
        </div>
      </div>
    </section>
  )
}
