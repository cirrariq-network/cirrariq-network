import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Cirrariq Blog | Specialized Articles on Real-World Asset Tokenization',
  description: 'Specialized articles and comprehensive guides on real-world asset tokenization, smart contracts and blockchain technologies.',
  keywords: 'RWA blog,tokenization articles,tokenization guide,blockchain articles,tokenization education',
  openGraph: {
    title: 'Cirrariq Blog | Specialized Tokenization Articles',
    description: 'Specialized articles and comprehensive guides on real-world asset tokenization.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cirrariq',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
