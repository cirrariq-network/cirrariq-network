'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { DollarSign, Globe, Shield, Zap, Users, BarChart3 } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

const benefits = [
  {
    icon: DollarSign,
    title: 'High Liquidity',
    description: 'Convert illiquid assets into tradeable assets on global markets.',
    stat: 'Up to 300% liquidity increase'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Investors from around the world can access your assets.',
    stat: '24/7 global trading'
  },
  {
    icon: Shield,
    title: 'High Security',
    description: 'Secure and transparent smart contracts with international standards.',
    stat: '100% blockchain security'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Rapid tokenization process with minimal fees.',
    stat: 'Quick tokenization'
  },
  {
    icon: Users,
    title: 'Fractional Ownership',
    description: 'Divide high-value assets among multiple investors.',
    stat: 'Up to 1,000 shares'
  },
  {
    icon: BarChart3,
    title: 'Transparency',
    description: 'All transactions and ownership records are stored on blockchain.',
    stat: '100% transparency'
  }
]

const stats = [
  { number: '$2.5M', label: 'Tokenized Assets Value (USD)' },
  { number: '47', label: 'Total Assets Tokenized' },
  { number: '18.5%', label: 'Average Annual Return' }
]

export default function WhyTokenize() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Tokenize?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tokenizing physical assets offers countless benefits for both asset holders and investors.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className="text-blue-600 font-semibold text-sm">
                  {benefit.stat}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Tokenize Your Assets?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              With our free consultation, find the right tokenization solution for your assets.
            </p>
            <CalendlyButton 
              text="Get Free Consultation" 
              variant="secondary" 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
