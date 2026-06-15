'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Zap, Globe, Users, ArrowRight } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

const trustBadges = [
  { icon: Shield, label: 'Multi-Chain Support' },
  { icon: Users, label: 'KYC/AML Ready' },
  { icon: Zap, label: 'Smart Contract Infrastructure' },
  { icon: Shield, label: 'Institutional Security' },
  { icon: Globe, label: 'Global Investor Access' },
]

const portfolioRows = [
  { name: 'Commercial Building A', value: '$45,000,000', pct: '36%', bar: 36 },
  { name: 'Residential Tower S', value: '$38,000,000', pct: '30%', bar: 30 },
  { name: 'Mining Operation C', value: '$22,000,000', pct: '18%', bar: 18 },
  { name: 'Solar Plant D', value: '$12,000,000', pct: '10%', bar: 10 },
  { name: 'Agricultural Land E', value: '$8,000,000', pct: '6%', bar: 6 },
]

const allocationSlices = [
  { label: 'Real Estate', pct: 66, color: '#3b82f6' },
  { label: 'Mining', pct: 18, color: '#22d3ee' },
  { label: 'Agriculture', pct: 10, color: '#6366f1' },
  { label: 'Infrastructure', pct: 6, color: '#8b5cf6' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col" style={{ background: '#080c14' }}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#3b82f6' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8" style={{ background: '#22d3ee' }} />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — Copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Infrastructure for<br />
                Real-World Asset<br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tokenization</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-lg">
                Tokenize real estate, commodities, private securities, and alternative assets with enterprise-grade blockchain infrastructure.
              </p>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed max-w-lg">
                Trusted infrastructure for issuance, compliance, investor management, and secondary market enablement.
              </p>
              <div className="flex flex-wrap gap-4">
                <CalendlyButton
                  text="Book a Demo"
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2"
                />
                <Link href="/services" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
                  View Platform <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — Dashboard mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden" style={{ background: '#0e1420' }}>
                {/* Dashboard titlebar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="text-slate-400 text-xs ml-3 font-medium tracking-wide">cirrariq.io/dashboard</span>
                  </div>
                  <span className="text-slate-500 text-xs">Overview</span>
                </div>

                <div className="p-5">
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'Total Asset Value', value: '$125,000,000', change: '+12.5%', positive: true },
                      { label: 'Investors', value: '4,250', change: '+18.2%', positive: true },
                      { label: 'Total Transactions', value: '28,500', change: '+32.5%', positive: true },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl p-3 border border-slate-800" style={{ background: '#111827' }}>
                        <div className="text-slate-500 text-xs mb-1">{stat.label}</div>
                        <div className="text-white font-bold text-sm">{stat.value}</div>
                        <div className={`text-xs mt-1 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>{stat.change} from last month</div>
                        {/* Mini sparkline */}
                        <svg className="w-full h-8 mt-2" viewBox="0 0 80 20">
                          <polyline
                            points="0,18 12,14 24,15 36,10 48,12 60,6 72,8 80,4"
                            fill="none"
                            stroke={stat.positive ? '#22d3ee' : '#f87171'}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Two-column: portfolio table + allocation */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Portfolio table */}
                    <div className="rounded-xl p-3 border border-slate-800" style={{ background: '#111827' }}>
                      <div className="text-slate-300 text-xs font-semibold mb-3">Asset Portfolio</div>
                      <div className="space-y-2">
                        {portfolioRows.map((row) => (
                          <div key={row.name}>
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="text-slate-400 text-[10px] truncate max-w-[100px]">{row.name}</span>
                              <span className="text-white text-[10px] font-mono">{row.pct}</span>
                            </div>
                            <div className="h-1 rounded-full bg-slate-700">
                              <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: `${row.bar}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Donut chart */}
                    <div className="rounded-xl p-3 border border-slate-800 flex flex-col items-center" style={{ background: '#111827' }}>
                      <div className="text-slate-300 text-xs font-semibold mb-3 self-start">Asset Allocation</div>
                      <div className="relative flex items-center justify-center mb-3">
                        <svg viewBox="0 0 80 80" className="w-20 h-20 -rotate-90">
                          {(() => {
                            let offset = 0
                            return allocationSlices.map((s) => {
                              const circ = 2 * Math.PI * 28
                              const dash = (s.pct / 100) * circ
                              const gap = circ - dash
                              const el = (
                                <circle
                                  key={s.label}
                                  cx="40" cy="40" r="28"
                                  fill="none"
                                  stroke={s.color}
                                  strokeWidth="12"
                                  strokeDasharray={`${dash} ${gap}`}
                                  strokeDashoffset={-offset}
                                />
                              )
                              offset += dash
                              return el
                            })
                          })()}
                        </svg>
                        <div className="absolute text-center">
                          <div className="text-white text-xs font-bold">$125M</div>
                          <div className="text-slate-500 text-[9px]">Total</div>
                        </div>
                      </div>
                      <div className="space-y-1.5 w-full">
                        {allocationSlices.map((s) => (
                          <div key={s.label} className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                              <span className="text-slate-400 text-[10px]">{s.label}</span>
                            </div>
                            <span className="text-slate-300 text-[10px] font-mono">{s.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust badge bar */}
      <div className="relative z-10 border-t border-slate-800" style={{ background: '#0a0f1a' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-around items-center py-5 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-slate-400 text-sm">
                <badge.icon className="w-4 h-4 text-cyan-500" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
