'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function ContactSection() {
  return (
    <section className="py-24 border-t border-slate-800" style={{ background: '#0a0f1a' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="section-label">Get In Touch</div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Tokenize Your Assets?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Book a free consultation with our team and discover how Cirrariq can power your RWA project.</p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'hello@cirrariq.io' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: MapPin, text: 'London, UK' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CalendlyButton text="Schedule a Free Consultation" variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}
            className="card-dark p-8 space-y-5"
          >
            {['Your name', 'Email address', 'Company / Organization'].map((ph) => (
              <div key={ph}>
                <input type="text" placeholder={ph} className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            ))}
            <textarea placeholder="Tell us about your asset and project goals..." rows={4} className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none" />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors text-sm">Send Message</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
