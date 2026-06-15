import { Metadata } from 'next'
import Link from 'next/link'
import { Gem, CheckCircle, Shield, Globe, Users, BarChart3, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mining & Metals Tokenization | Gold, Silver, Copper, Iron | Cirrariq',
  description: 'Tokenize gold, silver, copper, iron, precious stones and various mining assets. physical backing, live pricing, 24/7 trading.',
  keywords: 'gold tokenization,silver token,copper token,iron token,mining token,digital gold,precious metals,mining assets',
}

const metals = [
  {
    name: 'Gold',
    symbol: 'GOLD',
    description: 'Gold tokenization with physical backing and live pricing',
    features: ['Physical gold backing', 'Live pricing', 'Standard <Link href="/technology" className="text-blue-400 hover:text-blue-300 underline">ERC-20</Link>', 'Multi-signature Wallet'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Silver',
    symbol: 'SILVER',
    description: 'Silver tokenization with trading capability and secure storage',
    features: ['Physical silver backing', 'Market-based pricing', '24/7 trading', 'Automated Reporting'],
    color: 'from-gray-400 to-gray-600'
  },
  {
    name: 'Copper',
    symbol: 'COPPER',
    description: 'Industrial copper tokenization with a wide range of use cases',
    features: ['Physical copper backing', 'Industrial pricing', 'Risk Management', 'Specialized support'],
    color: 'from-orange-600 to-red-600'
  },
  {
    name: 'Iron',
    symbol: 'IRON',
    description: 'Iron and steel tokenization for various industries',
    features: ['Physical iron backing', 'Demand-based pricing', 'Technical reporting', 'Inventory management'],
    color: 'from-gray-600 to-gray-800'
  }
]

const features = [
  {
    icon: Gem,
    title: 'physical backing',
    description: 'All tokens are physically backed in secure warehouses',
    details: ['Secure and insured warehouses', 'Quality certificate', 'Regular inspection', 'Real-time reporting']
  },
  {
    icon: TrendingUp,
    title: 'Live pricing',
    description: 'Pricing based on global markets and trusted oracles',
    details: ['Chainlink integration', 'Real-time pricing', 'Automated calculation', 'Full transparency']
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
    description: 'Comprehensive reports on asset status and performance',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'Assessment & Appraisal',
    description: 'Detailed assessment of metals and mining assets by trusted experts'
  },
  {
    step: '2',
    title: 'Secure storage',
    description: 'Storage in secure and insured warehouses'
  },
  {
    step: '3',
    title: 'Token creation',
    description: 'Token creation with physical backing and pricing'
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

export default function MiningMetalsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mining & Metals Tokenization
            </h1>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Convert gold, silver, copper, iron, precious stones and various mining assets into digital tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metals Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Tokenizable Metals & Mining Assets
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Types of Precious Metals & Various Mining Assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metals.map((metal, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metal.color} flex items-center justify-center mx-auto mb-6`}>
                  <Gem className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{metal.name}</h3>
                <div className="text-blue-400 font-semibold mb-4">{metal.symbol}</div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {metal.description}
                </p>

                <div className="space-y-2">
                  {metal.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-400">
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
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced Capabilities for Metals & Mining Asset Tokenization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#0a0f1a] rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-slate-400">
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
      <section className="py-20 bg-[#0a0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Metals Tokenization Process
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Steps to Convert Metals & Mining Assets into Digital Tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Tokenize Metals?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">High Liquidity</h3>
                    <p className="text-slate-400">Converting physical assets into tradeable assets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Transparent pricing</h3>
                    <p className="text-slate-400">Global market-based pricing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">High Security</h3>
                    <p className="text-slate-400">Secure and insured storage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Global Access</h3>
                    <p className="text-slate-400">Trading on international markets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$1.2M</div>
                  <div className="text-yellow-100">Tokenized Metals Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15</div>
                  <div className="text-yellow-100">Total Mining Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">22.5%</div>
                  <div className="text-yellow-100">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-yellow-100">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Tokenize Your Metals?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best tokenization solution for your metals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
