import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Если будут закрытые разделы
    },
    sitemap: 'https://nocto.ru/sitemap.xml',
  }
}
