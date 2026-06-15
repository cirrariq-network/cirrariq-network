'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '$250M+', label: 'Potential Asset Capacity' },
  { value: '99.9%', label: 'Platform Availability' },
  { value: '10+', label: 'Asset Categories' },
  { value: '24/7', label: 'Infrastructure Monitoring' },
]

export default function StatsSection() {
  return (
    <section className="py-16 border-t border-b border-slate-800" style={{ background: '#0e1420' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
