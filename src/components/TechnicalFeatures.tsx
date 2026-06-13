'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Link as LinkIcon, Pause, Users, Coins, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: LinkIcon,
    title: 'DEX Integration',
    description: 'Listed on reputable decentralized exchanges with 24/7 trading capability.',
    details: ['Uniswap V3', 'PancakeSwap', 'SushiSwap', 'QuickSwap'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Wallet Freeze Capability',
    description: 'Ability to freeze wallets for compliant tokens and Tether-like assets.',
    details: ['Multi-signature Wallet', 'Time-locked Contracts', 'Emergency Pause'],
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Pause,
    title: 'Token Pause Capability',
    description: 'Ability to temporarily halt token transactions when needed.',
    details: ['Emergency Stop', 'Maintenance Mode', 'Regulatory Compliance'],
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Users,
    title: 'Professional Airdrop',
    description: 'Advanced airdrop system with partial distribution and high-volume support.',
    details: ['Batch Airdrop', 'Partial Distribution', 'Gas Optimization'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Coins,
    title: 'Single & Batch Transfers',
    description: 'Ability to transfer tokens individually or in batches.',
    details: ['Single Transfer', 'Batch Transfer', 'Gas Efficient'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Upgradeable Contracts',
    description: 'Proxy Pattern implementation for upgrades without changing the contract address.',
    details: ['Upgradeable Contracts', 'Proxy Pattern', 'Version Control'],
    color: 'from-gray-500 to-slate-500'
  }
]

export default function TechnicalFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Technical Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional and advanced capabilities for managing and trading RWA tokens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
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
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Platform Technical Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">ERC-20</div>
                <div className="text-orange-100">Token Standard</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">ERC-3643</div>
                <div className="text-orange-100">Securities Standard</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Proxy Pattern</div>
                <div className="text-orange-100">Upgradeability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Multi-Sig</div>
                <div className="text-orange-100">High Security</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
