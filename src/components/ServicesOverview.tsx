'use client'

import { motion } from 'framer-motion'
import { Database, Users, Code, BarChart2, Shield, Layers } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Asset Tokenization',
    desc: 'Convert real-world assets into compliant digital securities effortlessly.',
    color: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Investor Management',
    desc: 'Streamline onboarding, KYC, accreditation, and investor communications.',
    color: '#22d3ee',
  },
  {
    icon: Code,
    title: 'Smart Contract Framework',
    desc: 'Secure issuance, transfers, distributions, and governance via audited smart contracts.',
    color: '#6366f1',
  },
  {
    icon: BarChart2,
    title: 'Marketplace Enablement',
    desc: 'Enable secondary trading and liquidity with robust marketplace infrastructure.',
    color: '#8b5cf6',
  },
  {
    icon: Shield,
    title: 'Compliance Layer',
    desc: 'Integrated AML, KYC, and jurisdiction controls to ensure regulatory compliance.',
    color: '#06b6d4',
  },
  {
    icon: Layers,
    title: 'Multi-Chain Deployment',
    desc: 'Deploy across Ethereum, Polygon, Base, Arbitrum and other leading blockchains.',
    color: '#3b82f6',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24" style={{ background: '#080c14' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label">Complete RWA Infrastructure</div>
          <h2 className="text-4xl font-bold text-white">Everything You Need to Tokenize<br />Real-World Assets</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-dark p-6 group hover:border-slate-600 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${s.color}18` }}>
                <s.icon className="w-5 h-5" style={{ color: s.color }} />
              </div>
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
