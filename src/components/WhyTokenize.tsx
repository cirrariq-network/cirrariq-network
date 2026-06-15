'use client'

import { motion } from 'framer-motion'
import { Building2, Pickaxe, Wheat, PieChart, TrendingUp, Factory } from 'lucide-react'

const assets = [
  { icon: Building2, label: 'Real Estate', color: '#3b82f6' },
  { icon: Pickaxe, label: 'Mining &\nCommodities', color: '#22d3ee' },
  { icon: Wheat, label: 'Agriculture', color: '#10b981' },
  { icon: PieChart, label: 'Private Equity', color: '#8b5cf6' },
  { icon: TrendingUp, label: 'Investment Funds', color: '#f59e0b' },
  { icon: Factory, label: 'Industrial Assets', color: '#06b6d4' },
]

const steps = [
  { n: '1', title: 'Asset Evaluation', desc: 'Review legal and ownership structures.' },
  { n: '2', title: 'Token Design', desc: 'Define token economics and ownership model.' },
  { n: '3', title: 'Compliance Setup', desc: 'Configure investor eligibility and regulations.' },
  { n: '4', title: 'Smart Contract Deployment', desc: 'Launch audited token infrastructure.' },
  { n: '5', title: 'Investor Onboarding', desc: 'Begin fundraising and asset distribution.' },
]

export default function WhyTokenize() {
  return (
    <>
      {/* Assets we support */}
      <section className="py-24 border-t border-slate-800/50" style={{ background: '#0a0f1a' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label">Assets We Support</div>
            <h2 className="text-4xl font-bold text-white">Tokenize Any Real-World Asset</h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
            {assets.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-700 hover:border-slate-500 transition-colors" style={{ background: '#0e1420' }}>
                  <a.icon className="w-7 h-7" style={{ color: a.color }} />
                </div>
                <span className="text-slate-400 text-sm whitespace-pre-line leading-snug">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-slate-800/50" style={{ background: '#080c14' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label">From Asset to Digital Market</div>
            <h2 className="text-4xl font-bold text-white">Our Proven Process</h2>
          </div>

          {/* Step connector line */}
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-slate-800 mx-24" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-5 border-2 border-blue-400 shadow-lg shadow-blue-900/40">
                    {step.n}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
