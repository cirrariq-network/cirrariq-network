import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'RWA Labs Blog | Specialized Articles on Real-World Asset Tokenization',
  description: 'Specialized articles and comprehensive guides on real-world asset tokenization, smart contracts and blockchain technologies.',
  keywords: 'RWA blog,tokenization articles,tokenization guide,blockchain articles,tokenization education',
  openGraph: {
    title: 'RWA Labs Blog | Specialized Tokenization Articles',
    description: 'Specialized articles and comprehensive guides on real-world asset tokenization.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RWA Labs',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
