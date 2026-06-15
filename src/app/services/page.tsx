import { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Gem, Wheat, Car, FileText, Wallet, ArrowRight, CheckCircle, TrendingUp, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Real-World Asset Tokenization Services | Cirrariq - 6 Specialized Services',
  description: '6 specialized tokenization services: real estate, mining assets, agricultural products, vehicles, digital sukuk, and blockchain RWA wallet.',
  keywords: 'tokenization services,real estate tokenization,gold token,agricultural tokenization,digital sukuk,RWA wallet,real world asset tokenization',
  openGraph: {
    title: 'Real-World Asset Tokenization Services | Cirrariq',
    description: '6 specialized real-world asset tokenization services with the highest quality and security.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cirrariq',
  },
}

const services = [
  {
    id: 'real-estate', title: 'Real Estate Tokenization',
    description: 'Convert residential, commercial buildings and construction projects into tradeable tokens.',
    icon: Building2, color: 'from-blue-500 to-cyan-500', href: '/services/real-estate',
    features: ['ERC-20 Smart Contract','Ownership split up to 1,000 shares','Monthly rental income','AMM secondary market','Automated reporting','Expert valuation'],
    stats: { value: '$5.2M', assets: '23', return: '12.5%' }
  },
  {
    id: 'mining-metals', title: 'Mining & Metals Tokenization',
    description: 'Gold, silver, copper, iron, precious stones and various mining assets.',
    icon: Gem, color: 'from-yellow-500 to-orange-500', href: '/services/mining-metals',
    features: ['Physical gold backing','Live pricing','ERC-20 Standard','Multi-signature wallet','24/7 trading','DEX integration'],
    stats: { value: '$1.2M', assets: '15', return: '22.5%' }
  },
  {
    id: 'agriculture', title: 'Agricultural Products Tokenization',
    description: 'Saffron, pistachio, rice, livestock and other agricultural and farming products.',
    icon: Wheat, color: 'from-green-500 to-emerald-500', href: '/services/agriculture',
    features: ['ERC-20 Standard','Live pricing','Inventory management','Reporting','Physical backing','24/7 trading'],
    stats: { value: '$2.5M', assets: '47', return: '18.5%' }
  },
  {
    id: 'vehicles', title: 'Vehicles & Machinery Tokenization',
    description: 'Luxury cars, heavy machinery and industrial equipment.',
    icon: Car, color: 'from-purple-500 to-pink-500', href: '/services/vehicles',
    features: ['Smart contract','Live pricing','Ownership management','Secondary market','Physical backing','Full reporting'],
    stats: { value: '$3.2M', assets: '28', return: '15.8%' }
  },
  {
    id: 'digital-sukuk', title: 'Digital Sukuk & Securities',
    description: 'Islamic securities, income-generating sukuk, participation bonds and debentures.',
    icon: FileText, color: 'from-indigo-500 to-blue-500', href: '/services/digital-sukuk',
    features: ['ERC-3643 Standard','Sharia compliance','Fixed income','Risk management','Live pricing','Full reporting'],
    stats: { value: '$5.8M', assets: '12', return: '8.5%' }
  },
  {
    id: 'rwa-wallet', title: 'Blockchain RWA Wallet',
    description: 'Dedicated blockchain wallet for storing and managing RWA tokens.',
    icon: Wallet, color: 'from-indigo-500 to-purple-500', href: '/services/rwa-wallet',
    features: ['Multi-Chain Support','Multi-Signature','RWA Management','DeFi Integration','High Security','Simple UI'],
    stats: { value: '$50M+', assets: '10K+', return: '99.9%' }
  }
]

const stats = [
  { number: '$18.7M+', label: 'Total Tokenized Value', icon: DollarSign },
  { number: '135+', label: 'Total Assets', icon: Building2 },
  { number: '15.2%', label: 'Avg Annual Return', icon: TrendingUp },
  { number: '1000+', label: 'Satisfied Investors', icon: Users }
]

const processSteps = [
  { step: '1', title: 'Assessment', description: 'Detailed asset evaluation by experts' },
  { step: '2', title: 'Contract', description: 'Preparation of the appropriate smart contract' },
  { step: '3', title: 'Tokenize', description: 'Converting the asset into a digital token' },
  { step: '4', title: 'Market', description: 'Launching the trading market' },
  { step: '5', title: 'Manage', description: 'Continuous management and monitoring' }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero */}
      <section className="bg-gradient-to-r [#080c14] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Real-World Asset Tokenization Services</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            6 specialized services for tokenizing all types of real-world assets with the highest quality and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Free Consultation
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Stats & Performance</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Our achievements in real-world asset tokenization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0a0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Specialized real-world asset tokenization services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[#0a0f1a] rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{service.stats.value}</div>
                    <div className="text-xs text-slate-500">Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{service.stats.assets}</div>
                    <div className="text-xs text-slate-500">Assets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{service.stats.return}</div>
                    <div className="text-xs text-slate-500">Return</div>
                  </div>
                </div>
                <Link href={service.href} className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Tokenization Process</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Steps to convert real-world assets into digital tokens.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Tokenization Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            With our free consultation, find the best tokenization solution for your assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Free Consultation
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
