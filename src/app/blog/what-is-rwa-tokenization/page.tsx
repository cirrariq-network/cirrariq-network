import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What Is Real-World Asset Tokenization? A Complete Guide for Beginners | Cirrariq',
  description: 'A complete introduction to real-world asset tokenization, its benefits, challenges, and future. A comprehensive guide for beginners.',
  keywords: 'real world asset tokenization,what is tokenization,RWA tokenization,tokenization guide,tokenization education',
  openGraph: {
    title: 'What Is Real-World Asset Tokenization? A Comprehensive Guide',
    description: 'A complete introduction to real-world asset tokenization, its benefits, challenges, and future.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
    authors: ['Cirrariq'],
    publishedTime: '2024-01-15T10:00:00Z',
    modifiedTime: '2024-01-15T10:00:00Z',
  },
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-is-rwa', title: 'What Is Real-World Asset Tokenization?' },
  { id: 'how-it-works', title: 'How Does It Work?' },
  { id: 'benefits', title: 'Benefits of Tokenization' },
  { id: 'challenges', title: 'Challenges & Restrictions' },
  { id: 'use-cases', title: 'Use Cases' },
  { id: 'future', title: 'Future of RWA Tokenization' },
  { id: 'conclusion', title: 'Conclusion' }
]

const benefits = [
  {
    title: 'High Liquidity',
    description: 'Converting illiquid assets into tradeable assets',
    icon: '💰'
  },
  {
    title: 'Global Access',
    description: 'Investment from anywhere in the world',
    icon: '🌍'
  },
  {
    title: 'Full Transparency',
    description: 'All transactions are recorded on the blockchain.',
    icon: '🔍'
  },
  {
    title: 'Fractional Ownership',
    description: 'Enabling division of high-value assets',
    icon: '👥'
  },
  {
    title: 'Cost Reduction',
    description: 'Eliminating intermediaries and reducing trading costs',
    icon: '📉'
  },
  {
    title: 'High Security',
    description: 'Using secure blockchain technology',
    icon: '🔒'
  }
]

const useCases = [
  {
    category: 'Real Estate',
    examples: ['Residential buildings', 'Commercial complexes', 'Agricultural land', 'Construction projects'],
    description: 'Real estate tokenization enables fractional ownership and easy trading.'
  },
  {
    category: 'Precious Metals',
    examples: ['Gold', 'Silver', 'Platinum', 'Precious stones'],
    description: 'Converting precious metals into digital tokens with physical backing'
  },
  {
    category: 'agricultural products',
    examples: ['Saffron', 'Pistachio', 'Rice', 'Sheep'],
    description: 'Agricultural product tokenization for better management and easy trading.'
  },
  {
    category: 'Securities Standard',
    examples: ['Sukuk', 'Participation bonds', 'Debentures', 'Private shares'],
    description: 'Converting traditional securities into digital tokens'
  }
]

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/rwa-intro.svg"
            alt="Real-World Asset Tokenization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-blue-100">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span>Beginner</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Is Real-World Asset Tokenization? A Complete Guide for Beginners
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A complete introduction to real-world asset tokenization, its benefits, challenges, and future.
            </p>

            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Cirrariq
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Jan 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                8 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In today&apos;s world, blockchain technology has created new opportunities for investment and ownership of assets. 
                    One of the most important of these opportunities is Real-World Asset Tokenization (RWA), which enables 
                    the conversion of any physical asset into a tradeable digital token.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This technology has not only revolutionized how assets are owned and traded, but has also opened up access to 
                    high-value investments for the general public.
                  </p>
                </section>

                {/* What is RWA */}
                <section id="what-is-rwa" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Real-World Asset Tokenization?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Real-World Asset Tokenization is a process in which a physical asset (such as property, gold, or agricultural products)roducts) 
                    is converted into tradeable digital tokens. Each token represents a share of ownership in that asset.
                  </p>
                  
                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Practical Example</h3>
                    <p className="text-blue-800">
                      Imagine you own a building worth $10 million. With tokenization, you can divide it into 1,000 tokens, 
                      where each token represents 0.1% ownership of the building. Now anyone can purchase 
                      one or more tokens and own a portion of that building.
                    </p>
                  </div>
                </section>

                {/* How it works */}
                <section id="how-it-works" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How Does It Work?</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The tokenization process includes the following steps:
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      {
                        step: '1',
                        title: 'Assessment Assets',
                        description: 'Detailed asset evaluation by trusted experts and determination of its value'
                      },
                      {
                        step: '2',
                        title: 'Smart Contract Preparation',
                        description: 'Smart contract creation based on appropriate standards (ERC-20 or ERC-3643).'
                      },
                      {
                        step: '3',
                        title: 'Fractional Ownership',
                        description: 'Dividing assets into tradeable tokens and determining the token count'
                      },
                      {
                        step: '4',
                        title: 'Market Launch',
                        description: 'Launching the trading market and connecting to various exchanges'
                      },
                      {
                        step: '5',
                        title: 'Management Continuous',
                        description: 'Management and monitoring of token performance and backed assets'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Tokenization</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Real-World Asset Tokenization has numerous benefits for asset holders and investors:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Use Cases */}
                <section id="use-cases" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Tokenization has applications in various domains:
                  </p>
                  
                  <div className="space-y-8">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.category}</h3>
                        <p className="text-gray-700 mb-4">{useCase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.examples.map((example, exampleIndex) => (
                            <span key={exampleIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Future */}
                <section id="future" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Future of RWA Tokenization</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The future of Real-World Asset Tokenization is very bright. It is projected that by 2030, 
                    the RWA market value will exceed $10 trillion.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Future Trends:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Deeper integration with DeFi protocols</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Widespread adoption by traditional financial institutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Development of new and improved standards</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Creation of appropriate laws and regulations</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Real-World Asset Tokenization is a unique opportunity to democratize investment and create liquidity 
                    for illiquid assets. This technology, through the use of blockchain, brings transparency, security, and 
                    global access to the world.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you have assets you want to tokenize, or as an investor are looking for 
                    new opportunities, contact our expert team at Cirrariq.
                  </p>
                </section>
              </article>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tokenization Project?</h3>
                <p className="text-blue-100 mb-6">With our free consultation, find the best solution for your assets.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    Free Consultation
                  </Link>
                  <Link 
                    href="/services"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
