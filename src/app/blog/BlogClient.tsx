'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { useState } from 'react'

const articles = [
  {
    id: 'what-is-rwa-tokenization',
    title: 'What Is Real-World Asset Tokenization? A Complete Guide for Beginners',
    excerpt: 'A full introduction to the concept of real-world asset tokenization and how it works in the blockchain world.',
    category: 'Educational',
    author: 'Cirrariq',
    readTime: '8 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/rwa-intro.jpg',
    featured: true
  },
  {
    id: 'real-estate-tokenization-guide',
    title: 'The Complete Guide to Real Estate Tokenization',
    excerpt: 'The full steps of real estate tokenization from selecting the asset to listing on the secondary market.',
    category: 'Guide',
    author: 'Cirrariq',
    readTime: '12 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/real-estate-guide.jpg',
    featured: true
  },
  {
    id: 'erc-20-vs-erc-3643',
    title: 'Comparing ERC-20 and ERC-3643 Standards for Tokenization',
    excerpt: 'Key differences between various token standards and how to choose the best option.',
    category: 'Technical',
    author: 'Cirrariq',
    readTime: '10 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/erc-standards.jpg',
    featured: false
  },
  {
    id: 'smart-contract-security',
    title: 'Smart Contract Security in Real-World Asset Tokenization',
    excerpt: 'Security solutions and best practices for developing secure smart contracts.',
    category: 'Security',
    author: 'Cirrariq',
    readTime: '15 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/smart-contract-security.jpg',
    featured: false
  },
  {
    id: 'agricultural-tokenization',
    title: 'Agricultural Product Tokenization: Opportunities and Challenges',
    excerpt: 'How to tokenize agricultural products and the benefits for farmers and investors.',
    category: 'Applied',
    author: 'Cirrariq',
    readTime: '9 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/agriculture-token.jpg',
    featured: false
  },
  {
    id: 'legal-framework-rwa',
    title: 'Legal Framework for Real-World Asset Tokenization',
    excerpt: 'Laws and regulations governing real-world asset tokenization.',
    category: 'Legal',
    author: 'Cirrariq',
    readTime: '11 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/legal-framework.jpg',
    featured: false
  },
  {
    id: 'oracle-pricing-rwa',
    title: 'The Role of Oracles in Pricing Tokenized Assets',
    excerpt: 'How oracles are used for accurate and up-to-date asset pricing.',
    category: 'Technical',
    author: 'Cirrariq',
    readTime: '7 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/oracle-pricing.jpg',
    featured: false
  },
  {
    id: 'defi-integration-rwa',
    title: 'Integrating Real-World Assets with the DeFi Ecosystem',
    excerpt: 'How to integrate tokenized assets with DeFi protocols.',
    category: 'DeFi',
    author: 'Cirrariq',
    readTime: '13 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/defi-rwa.jpg',
    featured: false
  },
  {
    id: 'sukuk-digital-future',
    title: 'The Future of Digital Sukuk and Islamic Securities',
    excerpt: 'Future trends in digital sukuk and their impact on financial markets.',
    category: 'Finance',
    author: 'Cirrariq',
    readTime: '10 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/sukuk-future.jpg',
    featured: false
  },
  {
    id: 'rwa-market-trends-2024',
    title: 'Real-World Asset Tokenization Market Trends in 2024',
    excerpt: 'A review of key trends and market forecasts for RWA this year.',
    category: 'Market',
    author: 'Cirrariq',
    readTime: '14 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/rwa-trends-2024.jpg',
    featured: false
  },
  {
    id: 'solidity-complete-guide',
    title: 'The Complete Solidity Programming Guide for Beginners',
    excerpt: 'A comprehensive tutorial on Solidity programming language from basics to advanced.',
    category: 'Technical',
    author: 'Cirrariq',
    readTime: '20 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/solidity-guide.jpg',
    featured: false
  },
  {
    id: 'ipfs-storage',
    title: 'IPFS Decentralized Storage in RWA Projects',
    excerpt: 'How IPFS is used for secure and permanent storage of tokenized asset data.',
    category: 'Technical',
    author: 'Cirrariq',
    readTime: '8 min',
    publishDate: 'Oct 2024',
    image: '/images/blog/ipfs-storage.jpg',
    featured: false
  }
]

const categories = ['All', 'Educational', 'Guide', 'Technical', 'Security', 'Applied', 'Legal', 'DeFi', 'Finance', 'Market']

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(a => a.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03050f] via-blue-950 to-cyan-950">
      {/* Hero */}
      <div className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Cirrariq Blog</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Specialized articles and comprehensive guides on real-world asset tokenization.
          </p>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Featured Articles */}
        {!searchQuery && selectedCategory === 'All' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="relative h-56">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-blue-300 text-sm font-medium">{article.category}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${article.id}`}>{article.title}</Link>
                    </h3>
                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" />{article.author}</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</span>
                      </div>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{article.publishDate}</span>
                    </div>
                    <Link href={`/blog/${article.id}`} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="relative h-48">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" />{article.author}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{article.readTime}</span>
                    </div>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{article.publishDate}</span>
                  </div>
                  <Link href={`/blog/${article.id}`} className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Tokenize Your Assets?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact our expert team and get a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
              Contact Us
            </Link>
            <Link href="/services" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
