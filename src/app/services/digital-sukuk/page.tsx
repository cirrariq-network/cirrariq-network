import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Sukuk & Securities | Islamic Securities, Income Sukuk | RWA Labs',
  description: 'Digital Sukuk, Islamic securities, income-generating sukuk, participation bonds and debentures using the ERC-3643 standard.',
  keywords: 'digital sukuk,Islamic securities,income sukuk,participation bonds,debentures,ERC-3643,digital sukuk',
}

const sukukTypes = [
  {
    name: 'Lease Sukuk',
    symbol: 'IJARAH',
    description: 'Lease sukuk with real asset backing and rental income',
    features: ['Real asset backing', 'Monthly Rental Income', 'Standard ERC-3643', 'Multi-signature Wallet'],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Murabaha Sukuk',
    symbol: 'MURABAHA',
    description: 'Murabaha sukuk backed by commodities and services',
    features: ['Physical commodity backing', 'Transparent pricing', '24/7 trading', 'Automated Reporting'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Salam Sukuk',
    symbol: 'SALAM',
    description: 'Salam sukuk backed by future products',
    features: ['Future product backing', 'Batch Transfer', 'Gas Optimization', 'Upgradeable Contracts'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Participation bonds',
    symbol: 'PARTICIPATION',
    description: 'Participation bonds in various projects',
    features: ['Physical project backing', 'PancakeSwap integration', 'Wallet freeze capability', 'Time-locked Contracts'],
    color: 'from-purple-500 to-pink-500'
  }
]

const features = [
  {
    icon: FileText,
    title: 'Standard ERC-3643',
    description: 'Using an advanced standard for digital securities',
    details: ['Compliance with financial regulations', 'Built-in KYC/AML capability', 'License management', 'Transfer Conditional']
  },
  {
    icon: TrendingUp,
    title: 'Fixed income',
    description: 'Fixed and predictable income from backed assets',
    details: ['Regular profit payments', 'Automated calculation', 'Full transparency', 'Real-time reporting']
  },
  {
    icon: Shield,
    title: 'High Security',
    description: 'Usage of secure smart contracts and multi-signature wallet',
    details: ['Multi-signature Wallet', 'Smart Contract Security', 'Audited', 'Full Backup']
  },
  {
    icon: Globe,
    title: '24/7 trading',
    description: 'Trading available 24/7 on various exchanges',
    details: ['DEX Integration', 'CEX Listing', 'Liquidity Pools', 'Trading Pairs']
  },
  {
    icon: Users,
    title: 'Risk Management',
    description: 'Advanced risk management system and asset insurance',
    details: ['Risk Assessment', 'Insurance Coverage', 'Hedging Strategies', 'Portfolio Management']
  },
  {
    icon: BarChart3,
    title: 'Reporting Complete',
    description: 'Comprehensive reports on securities status and performance',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'Assessment & Appraisal',
    description: 'Detailed assessment of backed assets by trusted experts'
  },
  {
    step: '2',
    title: 'Securities Preparation',
    description: 'Preparing security tokens with the ERC-3643 standard'
  },
  {
    step: '3',
    title: 'Sharia Approval',
    description: 'Sharia approval of securities by trusted authorities'
  },
  {
    step: '4',
    title: 'Market Launch',
    description: 'Launching the trading market and exchanges'
  },
  {
    step: '5',
    title: 'Management & Monitoring',
    description: 'Continuous management and performance monitoring'
  }
]

export default function DigitalSukukPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Sukuk & Securities
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Islamic securities, income-generating sukuk, participation bonds and debentures using the ERC-3643 standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sukuk Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types of Sukuk & Securities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Types of Sukuk & Islamic Securities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sukukTypes.map((sukuk, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sukuk.color} flex items-center justify-center mx-auto mb-6`}>
                  <FileText className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sukuk.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{sukuk.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {sukuk.description}
                </p>

                <div className="space-y-2">
                  {sukuk.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced Capabilities for Digital Sukuk & Securities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Process Creation Digital Sukuk
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steps Creation Digital Sukuk & Securities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Digital Sukuk?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sharia compliance</h3>
                    <p className="text-gray-600">Compliant with Islamic principles and approved by recognized authorities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fixed income</h3>
                    <p className="text-gray-600">Fixed and predictable income from backed assets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High Security</h3>
                    <p className="text-gray-600">Secure and insured storage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
                    <p className="text-gray-600">Trading on international markets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$5.8M</div>
                  <div className="text-indigo-100">Value Digital Sukuk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-indigo-100">Total Sukuk</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">8.5%</div>
                  <div className="text-indigo-100">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">320+</div>
                  <div className="text-indigo-100">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Digital Sukuk?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best digital sukuk solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
