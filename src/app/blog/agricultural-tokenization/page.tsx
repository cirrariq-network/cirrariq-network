import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agricultural Product Tokenization: Opportunities and Challenges | RWA Labs',
  description: 'Complete guide to agricultural product tokenization. How to tokenize saffron, pistachio, rice, and livestock using blockchain technology.',
  keywords: 'agricultural tokenization,saffron token,pistachio token,rice token,sheep token,digital agriculture',
  openGraph: {
    title: 'ERC-20 vs ERC-3643: Which Standard Is Best for RWA?',
    description: 'A complete comparison of ERC-20 and ERC-3643 standards for real-world asset tokenization.',
    type: 'article',
    locale: 'en_US',
    siteName: 'RWA Labs',
    authors: ['RWA Labs'],
    publishedTime: '2024-01-10T10:00:00Z',
  },
}

export default function ERC20vsERC3643Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/agriculture-token.svg"
            alt="ERC-20 vs ERC-3643 Comparison"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-purple-100">
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span>Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Agricultural Product Tokenization: Opportunities and Challenges
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Complete comparison of token standards and choosing the best option for real-world asset tokenization
            </p>

            <div className="flex items-center space-x-6 text-purple-100">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                RWA Labs
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Jan 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                10 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Choosing the right standard for real-world asset tokenization is one of the most important decisions in the development process. 
                In this article, we compare the two main standards ERC-20 and ERC-3643.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-20: Fungible Token Standards</h2>
              <div className="bg-blue-50 border-r-4 border-blue-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features ERC-20:</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Simplicity of implementation</li>
                  <li>• High compatibility with exchanges</li>
                  <li>• Low development cost</li>
                  <li>• Suitable for general-purpose tokens</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ERC-3643: Standard Securities Standard</h2>
              <div className="bg-green-50 border-r-4 border-green-500 p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">Key Features ERC-3643:</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• Compliance with financial regulations</li>
                  <li>• Built-in KYC/AML capability</li>
                  <li>• License management</li>
                  <li>• Suitable for security tokens</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The choice between ERC-20 and ERC-3643 depends on the asset type and regulatory requirements. 
                For general assets, ERC-20 is more suitable, but for security tokens, ERC-3643 is the better choice.
              </p>
            </section>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Need Specialized Consultation?</h3>
            <p className="text-purple-100 mb-6">Get in touch with our experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/technology"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
