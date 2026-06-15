'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Quote } from 'lucide-react'

const results = [
  'Increased fundraising reach',
  'Fractional ownership support',
  'Reduced administrative overhead',
  'Transparent on-chain reporting',
]

export default function PortfolioSection() {
  return (
    <section className="py-24 border-t border-slate-800/50" style={{ background: '#0a0f1a' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Property image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-slate-700"
            style={{ background: 'linear-gradient(135deg, #0e1420, #1a2235)', minHeight: 320 }}
          >
            <div className="relative h-full flex items-end p-0" style={{ minHeight: 320 }}>
              {/* Building silhouette SVG */}
              <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="buildGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a5f" />
                    <stop offset="100%" stopColor="#0a1628" />
                  </linearGradient>
                  <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Sky */}
                <rect width="400" height="320" fill="#060a12" />
                {/* Moon glow */}
                <ellipse cx="340" cy="50" rx="30" ry="30" fill="#fef3c7" opacity="0.15" />
                <ellipse cx="340" cy="50" rx="60" ry="60" fill="#fef3c7" opacity="0.05" />
                {/* Main building */}
                <rect x="100" y="60" width="200" height="260" fill="url(#buildGrad)" />
                {/* Windows */}
                {[80,100,120,140,160,180,200,220].map(y => (
                  [120,145,170,195,220,245,270].map(x => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="12" height="8" rx="1"
                      fill={Math.random() > 0.4 ? '#f59e0b' : '#1e2d45'} opacity="0.8" />
                  ))
                ))}
                {/* Reflection */}
                <rect x="100" y="300" width="200" height="20" fill="url(#glowGrad)" />
                {/* Side buildings */}
                <rect x="20" y="140" width="75" height="180" fill="#0c1828" />
                <rect x="305" y="160" width="75" height="160" fill="#0c1828" />
              </svg>
            </div>
          </motion.div>

          {/* Case study text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="card-dark p-8 flex flex-col justify-between"
          >
            <div>
              <div className="section-label">Case Study</div>
              <h3 className="text-2xl font-bold text-white mb-4">Real Estate Tokenization</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Commercial property portfolio tokenized across multiple investor groups.
              </p>
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="h-px bg-slate-700 mb-6" />
              <div className="text-xs text-slate-500 uppercase tracking-wider">Outcome</div>
              <div className="text-2xl font-bold text-cyan-400 mt-1">$45M+ Tokenized</div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="card-dark p-8 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-blue-500 mb-5" />
              <p className="text-slate-300 text-base leading-relaxed italic mb-8">
                &ldquo;CIRRARIQ provided us with a seamless tokenization infrastructure that allowed us to onboard global investors and unlock liquidity for our real estate assets.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                JM
              </div>
              <div>
                <div className="text-white font-semibold text-sm">James Mitchell</div>
                <div className="text-slate-500 text-xs">CEO, Horizon Capital</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
