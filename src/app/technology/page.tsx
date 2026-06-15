import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Shield, Zap, Globe, Database, Lock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technologies Used | Cirrariq - Advanced Blockchain Technology',
  description: 'Advanced blockchain technologies, smart contracts, token standards and security on the Cirrariq platform.',
  keywords: 'blockchain technology,smart contract,Solidity,ERC-20,ERC-3643,Proxy Pattern,Multi-Sig,blockchain security',
}

const technologies = [
  {
    name: 'Solidity', category: 'Programming Language', icon: Code, color: 'from-blue-500 to-cyan-500',
    description: 'The primary programming language for developing smart contracts on the Ethereum network.',
    features: ['Smart contract programming language','Compatible with EVM','Standard library support','High security & gas optimization','Inheritance and modularity']
  },
  {
    name: 'ERC-20', category: 'Token Standard', icon: Database, color: 'from-green-500 to-emerald-500',
    description: 'International standard for fungible tokens.',
    features: ['Fungible token standard','Compatible with all wallets','Exchange tradeable','Standard transfer & approve functions','Supports all DEXs']
  },
  {
    name: 'ERC-3643', category: 'Securities Standard', icon: Shield, color: 'from-purple-500 to-pink-500',
    description: 'Advanced standard for security tokens and regulated assets.',
    features: ['Digital securities standard','Financial regulation compliance','Built-in KYC/AML','Permission and restriction management','Conditional transfer support']
  },
  {
    name: 'Proxy Pattern', category: 'Architecture Pattern', icon: Zap, color: 'from-orange-500 to-red-500',
    description: 'Design pattern for upgrading smart contracts without changing the address.',
    features: ['Contract upgradeability','Address preservation','Version management','Rollback capability','Gas optimization']
  },
  {
    name: 'Multi-Signature', category: 'Security', icon: Lock, color: 'from-red-500 to-pink-500',
    description: 'Multi-signature wallet for high-security transactions.',
    features: ['Requires multiple signatures','High hack resistance','Distributed management','Configurable signing threshold','Hardware wallet support']
  },
  {
    name: 'IPFS', category: 'Storage', icon: Globe, color: 'from-indigo-500 to-blue-500',
    description: 'InterPlanetary File System for decentralized data storage.',
    features: ['Decentralized storage','Censorship resistant','Permanent data access','Low storage cost','Data integrity']
  }
]

const securityFeatures = [
  { title: 'Security Audits', description: 'All smart contracts are reviewed by security experts.', icon: Shield },
  { title: 'Comprehensive Testing', description: 'Extensive testing to ensure correct functionality.', icon: CheckCircle },
  { title: 'Security Updates', description: 'Continuous updates to address vulnerabilities.', icon: Zap },
  { title: 'Backups', description: 'Full backup and data recovery systems.', icon: Database }
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero */}
      <section className="bg-gradient-to-r [#080c14] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Advanced Technologies</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Blockchain technologies, smart contracts and international standards.
          </p>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Advanced technologies and international standards for real-world asset tokenization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <Link href={`/technology/${tech.name === 'ERC-20' ? 'erc-20' : tech.name === 'ERC-3643' ? 'erc-3643' : tech.name === 'Proxy Pattern' ? 'proxy-pattern' : tech.name === 'Multi-Signature' ? 'multi-signature' : tech.name.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors">{tech.name}</Link>
                  </h3>
                  <span className="text-blue-400 font-semibold text-sm">{tech.category}</span>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((f, fi) => (
                    <div key={fi} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Security & Reliability</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">High system security and reliability at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((f, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-[#0a0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technical Specifications</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Technical details and system specifications.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Smart Contracts</h3>
              <div className="space-y-4">
                {[['Language', 'Solidity 0.8.19+'],['Network','Ethereum, Polygon, BSC'],['Token Standard','ERC-20, ERC-3643'],['Upgrade Pattern','Proxy Pattern']].map(([k,v], i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="font-semibold text-slate-300">{k}:</span>
                    <span className="text-blue-400">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Security</h3>
              <div className="space-y-4">
                {[['Wallet','Multi-Signature'],['Audit','CertiK, ConsenSys'],['Storage','IPFS, Arweave'],['Oracle','Chainlink, Band Protocol']].map(([k,v], i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-800">
                    <span className="font-semibold text-slate-300">{k}:</span>
                    <span className="text-blue-400">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have Questions About Our Technologies?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Our technical team is ready to answer your specialized questions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Technical Team
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
              View Services
            </Link>
          </div>
          <div className="mt-8">
            <p className="text-blue-100 text-sm">
              Designed & developed by{' '}
              <a href="https://miroteam.ir" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-200 underline font-semibold">MiroTeam</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
