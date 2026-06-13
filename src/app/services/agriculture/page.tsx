import { Metadata } from 'next'
import Link from 'next/link'
import { Wheat, ArrowRight, CheckCircle, Shield, Zap, Globe, Users, BarChart3, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agricultural Products Tokenization | Saffron, Pistachio, Rice, Livestock | RWA Labs',
  description: 'Agricultural Products Tokenization including saffron, pistachio, rice, livestock. physical backing, live pricing, 24/7 trading.',
  keywords: 'saffron tokenization,pistachio token,rice token,sheep token,digital agriculture,digital livestock,RWA agriculture',
}

const products = [
  {
    name: 'Saffron',
    symbol: 'SAFFRON',
    description: 'Saffron tokenization with physical backing and live pricing',
    features: ['Physical saffron backing', 'Live pricing', 'ERC-20 Standard', 'Multi-signature Wallet'],
    color: 'from-yellow-500 to-orange-500',
    link: 'https://zfrnbon.surge.sh'
  },
  {
    name: 'Pistachio',
    symbol: 'PISTACHIO',
    description: 'Pistachio tokenization with trading capability and secure storage',
    features: ['Physical pistachio backing', 'Market-based pricing', '24/7 trading', 'Automated Reporting'],
    color: 'from-green-500 to-emerald-500',
    link: 'https://zfrnbon.surge.sh'
  },
  {
    name: 'Rice',
    symbol: 'RICE',
    description: 'Rice tokenization with batch transfer and advanced management capabilities.',
    features: ['Physical rice backing', 'Batch Transfer', 'Gas Optimization', 'Upgradeable Contracts'],
    color: 'from-yellow-400 to-yellow-600',
    link: 'https://brnjbon.surge.sh'
  },
  {
    name: 'Sheep',
    symbol: 'SHEEP',
    description: 'Livestock and sheep tokenization with advanced management capabilities.',
    features: ['Physical sheep backing', 'PancakeSwap integration', 'Wallet freeze capability', 'Time-locked Contracts'],
    color: 'from-blue-500 to-cyan-500',
    link: 'https://gsfnbon.surge.sh'
  }
]

const features = [
  {
    icon: Wheat,
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
    description: 'Advanced risk management system and product insurance',
    details: ['Risk Assessment', 'Insurance Coverage', 'Hedging Strategies', 'Portfolio Management']
  },
  {
    icon: BarChart3,
    title: 'Reporting Complete',
    description: 'Comprehensive reports on product status and performance',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'Assessment & Appraisal',
    description: 'Detailed assessment of agricultural products by trusted experts'
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

export default function AgriculturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Agricultural Products Tokenization
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Convert saffron, pistachio, rice, livestock and other agricultural products into digital tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tokenizable Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Types of Agricultural and Livestock Products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mx-auto mb-6`}>
                  <Wheat className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{product.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
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
              Advanced Capabilities for Agricultural Products Tokenization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
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
              Process Agricultural Products Tokenization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steps to Convert Agricultural Products into Digital Tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                Why Tokenize Agricultural Products?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High Liquidity</h3>
                    <p className="text-gray-600">Converting physical assets into tradeable assets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent pricing</h3>
                    <p className="text-gray-600">Global market-based pricing</p>
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
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$2.5M</div>
                  <div className="text-green-100">Tokenized Products Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">47</div>
                  <div className="text-green-100">Count Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">18.5%</div>
                  <div className="text-green-100">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-green-100">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Tokenize Your Agricultural Products?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best tokenization solution for your products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
