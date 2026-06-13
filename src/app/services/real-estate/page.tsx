import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle, Shield, Zap, Globe, Users, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real Estate Tokenization | Convert Buildings to Digital Tokens | Cirrariq',
  description: 'Convert residential, commercial buildings and construction projects into digital tokens. Fractional ownership, rental income, secondary market, and automated reporting.',
  keywords: 'real estate tokenization,building token,property token,real estate tokenization,digital real estate,fractional ownership property',
}

const features = [
  {
    icon: Building2,
    title: 'ERC-20 Smart Contract',
    description: 'International standard for fungible tokens',
    details: ['ERC-20 Standard', 'Smart Contract Security', 'Gas Optimization']
  },
  {
    icon: Users,
    title: 'Fractional Ownership Up to 1,000 Shares',
    description: 'Enabling fractional ownership of property among multiple investors',
    details: ['Fractional Ownership', 'Flexible Shares', 'Voting Rights']
  },
  {
    icon: BarChart3,
    title: 'Monthly Rental Income',
    description: 'Automatic distribution of rental income among shareholders',
    details: ['Automatic Distribution', 'Monthly Payouts', 'Transparent Records']
  },
  {
    icon: Globe,
    title: 'AMM Secondary Market',
    description: 'Trading property tokens on decentralized exchanges',
    details: ['DEX Integration', '24/7 Trading', 'Liquidity Pools']
  },
  {
    icon: Shield,
    title: 'Automated Reporting',
    description: 'Full and transparent reports on property status',
    details: ['Automated Reports', 'Financial Transparency', 'Legal Compliance']
  },
  {
    icon: Zap,
    title: 'Expert Assessment',
    description: 'Detailed and professional property valuation',
    details: ['Professional Appraisal', 'Market Analysis', 'Value Assessment']
  }
]

const process = [
  {
    step: '1',
    title: 'Assessment & Appraisal',
    description: 'Detailed property assessment by certified experts.'
  },
  {
    step: '2',
    title: 'Document Preparation',
    description: 'Preparation and review of legal and technical documents.'
  },
  {
    step: '3',
    title: 'Fractional Ownership',
    description: 'Dividing the property into tradeable shares.'
  },
  {
    step: '4',
    title: 'Smart Contract Creation',
    description: 'Development and testing of a secure smart contract.'
  },
  {
    step: '5',
    title: 'Market Launch',
    description: 'Launching the secondary market and trading.'
  }
]

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#03050f] via-blue-950 to-cyan-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Real Estate Tokenization
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Convert residential, commercial buildings and construction projects into digital tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced Capabilities for Real Estate Tokenization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Estate Tokenization Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steps to Convert Real Estate into Digital Tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Tokenize Real Estate?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High Liquidity</h3>
                    <p className="text-gray-600">Converting illiquid assets into tradeable assets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fractional Ownership</h3>
                    <p className="text-gray-600">Enabling investment in high-value real estate.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Transparency</h3>
                    <p className="text-gray-600">All transactions are recorded on the blockchain.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
                    <p className="text-gray-600">Investors from around the world.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$2.5M</div>
                  <div className="text-blue-100">Tokenized Real Estate Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">47</div>
                  <div className="text-blue-100">Total Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">18.5%</div>
                  <div className="text-blue-100">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1,200+</div>
                  <div className="text-blue-100">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Tokenize Your Real Estate?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best tokenization solution for your real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
