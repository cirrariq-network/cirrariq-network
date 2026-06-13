import { Metadata } from 'next'
import Link from 'next/link'
import { Car, CheckCircle, Shield, Globe, Users, BarChart3, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vehicles & Machinery Tokenization | Luxury Cars, Heavy Machinery | Cirrariq',
  description: 'Tokenize luxury cars, heavy machinery and industrial equipment. physical backing, live pricing, 24/7 trading.',
  keywords: 'vehicle tokenization,car token,digital vehicle,heavy machinery,industrial equipment,RWA vehicles',
}

const vehicles = [
  {
    name: 'Luxury Vehicles',
    symbol: 'LUXURY',
    description: 'Luxury vehicle tokenization with physical backing and live pricing.',
    features: ['Physical vehicle backing', 'Live pricing', 'Standard ERC-20', 'Multi-signature Wallet'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Heavy Machinery',
    symbol: 'HEAVY',
    description: 'Heavy machinery tokenization with trading capability and secure storage',
    features: ['Physical machinery backing', 'Market-based pricing', '24/7 trading', 'Automated Reporting'],
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'Equipment Industrial',
    symbol: 'INDUSTRIAL',
    description: 'Industrial equipment tokenization with batch transfer and advanced management capabilities.',
    features: ['Physical equipment backing', 'Batch Transfer', 'Gas Optimization', 'Upgradeable Contracts'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Ships & Boats',
    symbol: 'MARINE',
    description: 'Ships and boats tokenization with advanced management capabilities',
    features: ['Physical ship backing', 'PancakeSwap integration', 'Wallet freeze capability', 'Time-locked Contracts'],
    color: 'from-cyan-500 to-blue-500'
  }
]

const features = [
  {
    icon: Car,
    title: 'physical backing',
    description: 'All tokens have physical backing in secure parking facilities',
    details: ['Secure and insured parking', 'Ownership certificate', 'Regular inspection', 'Real-time reporting']
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
    description: 'Advanced risk management system and vehicle insurance',
    details: ['Risk Assessment', 'Insurance Coverage', 'Hedging Strategies', 'Portfolio Management']
  },
  {
    icon: BarChart3,
    title: 'Reporting Complete',
    description: 'Comprehensive reports on vehicle status and performance',
    details: ['Real-time Reports', 'Performance Analytics', 'Audit Trail', 'Compliance Reports']
  }
]

const process = [
  {
    step: '1',
    title: 'Assessment & Appraisal',
    description: 'Detailed assessment of vehicles by trusted experts'
  },
  {
    step: '2',
    title: 'Secure storage',
    description: 'Storage in secure and insured parking facilities'
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

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vehicles & Machinery Tokenization
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Convert luxury cars, heavy machinery and industrial equipment into digital tokens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tokenizable Vehicle & Machinery Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Types of Vehicles & Machinery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${vehicle.color} flex items-center justify-center mx-auto mb-6`}>
                  <Car className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <div className="text-blue-600 font-semibold mb-4">{vehicle.symbol}</div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {vehicle.description}
                </p>

                <div className="space-y-2">
                  {vehicle.features.map((feature, featureIndex) => (
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
              Advanced Capabilities for Vehicles & Machinery Tokenization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
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
              Process Vehicles & Machinery Tokenization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steps to Convert Vehicles & Machinery into Digital Tokens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                Why Tokenize Vehicles & Machinery?
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">$3.2M</div>
                  <div className="text-purple-100">Tokenized Vehicles Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">28</div>
                  <div className="text-purple-100">Total Vehicles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15.8%</div>
                  <div className="text-purple-100">Annual Return</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">180+</div>
                  <div className="text-purple-100">Investors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Tokenize Your Vehicles & Machinery?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best tokenization solution for your vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Free Consultation
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
