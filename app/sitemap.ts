import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

// Ваш домен (поменяйте на реальный, когда купите)
const BASE_URL = 'https://noctocode.ru' 

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Статические страницы
  const routes = [
    '',
    '/services',
    '/cases',
    '/auto',
    '/manifesto',
    '/blog',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Динамические статьи блога (читаем из папки content)
  const contentDirectory = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDirectory)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map((file) => ({
      url: `${BASE_URL}/blog/${file.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // Статьи важны для SEO
    }))

  return [...routes, ...posts]
}
