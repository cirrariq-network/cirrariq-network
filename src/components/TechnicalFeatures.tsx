'use client'

import { motion } from 'framer-motion'
import { Lock, RefreshCw, FileCode, Globe } from 'lucide-react'

const features = [
  { icon: Lock, title: 'ERC-3643 Compliance', desc: 'Identity-bound tokens with built-in transfer restrictions for regulatory compliance.', color: '#3b82f6' },
  { icon: RefreshCw, title: 'Upgradeable Contracts', desc: 'Proxy pattern architecture allowing safe upgrades without migrating token holders.', color: '#22d3ee' },
  { icon: FileCode, title: 'IPFS Document Storage', desc: 'Decentralized off-chain document storage with on-chain hash verification.', color: '#8b5cf6' },
  { icon: Globe, title: 'Multi-Chain Ready', desc: 'Deploy on Ethereum, Polygon, Arbitrum, Base and other EVM-compatible networks.', color: '#10b981' },
]

export default function TechnicalFeatures() {
  return (
    <section className="py-24 border-t border-slate-800/50" style={{ background: '#080c14' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label">Technical Foundation</div>
          <h2 className="text-4xl font-bold text-white">Built for Institutional Grade Security</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="card-dark p-6 hover:border-slate-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${f.color}18` }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-sm">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
