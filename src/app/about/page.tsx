import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Target, Zap, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About RWA Labs | Expert Real-World Asset Tokenization Team | 5+ Years Experience',
  description: 'Meet the RWA Labs team and blockchain experts. Experience in real-world asset tokenization, smart contracts and blockchain technologies.',
  keywords: 'about RWA Labs,blockchain team,tokenization experts,smart contract development,RWA team,tokenization experience,Solidity experts,MiroTeam',
  openGraph: {
    title: 'About RWA Labs | Expert Real-World Asset Tokenization Team',
    description: 'Meet the RWA Labs team and blockchain experts. 5+ years of experience in real-world asset tokenization.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RWA Labs',
  },
}

const achievements = [
  { number: '50+', label: 'Successful Projects', description: 'Completed tokenization projects' },
  { number: '$10M+', label: 'Tokenized Value', description: 'Total value of assets tokenized' },
  { number: '1000+', label: 'Satisfied Investors', description: 'Happy clients and investors' },
  { number: '99.9%', label: 'System Uptime', description: 'System reliability rate' }
]

const values = [
  { icon: Shield, title: 'Security', description: 'Security is our top priority. All our systems and contracts are reviewed by security experts.' },
  { icon: Target, title: 'Precision', description: 'Attention to detail and quality of work sets us apart from competitors.' },
  { icon: Users, title: 'Client Focus', description: 'Client satisfaction is our primary goal and we put all our efforts toward it.' },
  { icon: Zap, title: 'Innovation', description: 'We are always looking for new and better ways to improve our services.' }
]

const technologies = [
  { name: 'Solidity', description: 'Smart contract programming language', level: 'Expert' },
  { name: 'Ethereum', description: 'Primary blockchain network', level: 'Expert' },
  { name: 'Polygon', description: 'Layer 2 network', level: 'Advanced' },
  { name: 'IPFS', description: 'Decentralized storage', level: 'Advanced' },
  { name: 'Chainlink', description: 'Pricing oracle', level: 'Expert' },
  { name: 'Web3.js', description: 'Blockchain connection library', level: 'Expert' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About RWA Labs</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A specialized blockchain team and smart contract developers with 5+ years of experience in real-world asset tokenization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                View Portfolio
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At RWA Labs, we believe the future of investment lies in real-world asset tokenization.
                Our mission is to use blockchain technology and smart contracts to convert any physical asset
                into a tradeable digital token.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team consists of blockchain experts, smart contract developers, and security specialists
                who collaborate to deliver innovative solutions for real-world asset tokenization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <span>View our successful Saffron Token project at</span>
                  <Link href="https://zfrnbon.surge.sh" target="_blank" rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-600 underline">
                    zfrnbon.surge.sh
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <span>Designed and developed by</span>
                  <Link href="https://miroteam.ir" target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 underline font-semibold">
                    MiroTeam
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Stats & Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((a, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold mb-2">{a.number}</div>
                    <div className="text-blue-100 font-semibold mb-1">{a.label}</div>
                    <div className="text-blue-200 text-sm">{a.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles and values that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <v.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The technologies powering our projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{tech.level}</span>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/technology" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
              View Technology Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team and kick off your tokenization project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
