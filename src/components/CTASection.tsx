'use client'

import { motion } from 'framer-motion'
import { CalendarDays } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function CTASection() {
  return (
    <section className="py-16 border-t border-slate-800" style={{ background: '#0e1420' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 border border-blue-900/40 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, #0f1d35 0%, #0e1420 100%)' }}
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
              <CalendarDays className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Ready to Bring Real Assets On-Chain?</h2>
              <p className="text-slate-400 text-sm">Launch tokenized investment products with secure, compliant, and scalable infrastructure.</p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <CalendlyButton
              text="Schedule Consultation"
              variant="primary"
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-7 py-3 rounded-xl inline-flex items-center gap-2 transition-all"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
