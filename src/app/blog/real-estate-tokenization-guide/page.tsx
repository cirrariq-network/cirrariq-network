import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Tokenize a Building? Complete Guide | RWA Labs',
  description: 'Comprehensive guide to real estate tokenization: practical steps, laws, costs, and successful examples. Free consultation with RWA Labs experts.',
  keywords: 'real estate tokenization,building tokenization,real estate tokenization guide,property token,digital real estate',
  openGraph: {
    title: 'How to Tokenize a Building? Complete Guide',
    description: 'Comprehensive guide to real estate tokenization: practical steps, laws, costs, and successful examples.',
    type: 'article',
    locale: 'en_US',
    siteName: 'RWA Labs',
    authors: ['RWA Labs'],
    publishedTime: '2024-01-12T10:00:00Z',
    modifiedTime: '2024-01-12T10:00:00Z',
  },
}

const steps = [
  {
    step: '1',
    title: 'Assessment & Appraisal Property',
    description: 'Detailed property assessment by certified experts and determination of its real value.',
    details: [
      'Location and accessibility review',
      'Construction quality assessment',
      'Review of legal records and ownership',
      'Estimate value based on local market'
    ]
  },
  {
    step: '2',
    title: 'Smart Contract Preparation',
    description: 'Appropriate smart contract creation based on the ERC-20 standard',
    details: [
      'Contract design based on specific needs',
      'Implementation Capability Fractional Ownership',
      'Adding management capabilities',
      'Testing and security review of the contract'
    ]
  },
  {
    step: '3',
    title: 'Fractional Ownership via Tokens',
    description: 'Dividing property into tradeable tokens',
    details: [
      'Determining token count (typically 1,000–10,000)',
      'Calculating the value of each token',
      'Token creation on the blockchain',
      'Allocating tokens to the main owner'
    ]
  },
  {
    step: '4',
    title: 'Launching the trading market.',
    description: 'Creating a secondary market for token trading',
    details: [
      'Connecting to DEX exchanges',
      'Setting up a dedicated trading platform',
      'Creating initial liquidity',
      'Setup System pricing'
    ]
  },
  {
    step: '5',
    title: 'Continuous management and monitoring.',
    description: 'Continuous property management and monitoring of token performance',
    details: [
      'Rental and income management',
      'Distributing profit among token holders',
      'Reporting regular',
      'Updating property status'
    ]
  }
]

const benefits = [
  {
    title: 'Fractional Ownership',
    description: 'Enabling fractional ownership of high-value properties among multiple investors',
    icon: '👥'
  },
  {
    title: 'High Liquidity',
    description: 'Converting illiquid assets into tradeable assets.',
    icon: '💰'
  },
  {
    title: 'Global Access',
    description: 'Investors from around the world can participate',
    icon: '🌍'
  },
  {
    title: 'Full Transparency',
    description: 'All transactions and ownership records are stored on the blockchain',
    icon: '🔍'
  }
]

const costs = [
  { item: 'Property Assessment', cost: '0.5–1% of property value', description: 'Expert appraisal and assessment' },
  { item: 'Smart Contract', cost: '$2,000–5,000', description: 'Contract design and implementation' },
  { item: 'Testing & Audit', cost: '$1,000–3,000', description: 'Security testing and code audit' },
  { item: 'Market Launch', cost: '$3,000–7,000', description: 'Trading platform creation' },
  { item: 'Ongoing Management', cost: '0.1–0.3% annually', description: 'Management and monitoring costs' }
]

export default function RealEstateTokenizationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/real-estate-guide.svg"
            alt="Real Estate Tokenization Guide"
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
              <span>Real Estate</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How to Tokenize a Building? Complete Guide
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive guide to real estate tokenization: practical steps, laws, costs, and successful examples.
            </p>

            <div className="flex items-center space-x-6 text-blue-100">
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
                12 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Real estate tokenization is one of the most important use cases of blockchain technology in the real estate world. 
                This process enables fractional ownership of high-value buildings among multiple investors 
                and creates high liquidity for illiquid assets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In this comprehensive guide, we review all real estate tokenization steps from start to finish 
                and also address important notes and potential financial challenges.
              </p>
            </section>

            {/* Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Tokenization Steps</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Real Estate Tokenization</h2>
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

            {/* Costs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Tokenization Costs</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Item</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cost</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {costs.map((cost, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-900">{cost.item}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-blue-600">{cost.cost}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{cost.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Real estate tokenization is a unique opportunity to democratize investment in real estate. 
                This technology not only opens up high-value investments to the general public, 
                but also creates high liquidity for illiquid assets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you have a property you want to tokenize, or as an investor are looking for 
                new opportunities in the real estate market, contact our expert team at RWA Labs.
              </p>
            </section>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Tokenize Your Real Estate?</h3>
            <p className="text-blue-100 mb-6">With our free consultation, find the best solution for your property.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/services/real-estate"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
