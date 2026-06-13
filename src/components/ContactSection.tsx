'use client'

import { motion } from 'framer-motion'
import { Phone, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Consultation & Price Inquiry
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our expert team is ready to guide you on your real-world asset tokenization journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Ways to Reach Us
              </h3>
              <p className="text-blue-100 leading-relaxed">
                For consultation and guidance on tokenizing physical assets, 
                get in touch with us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-blue-100">+1-800-RWA-LABS</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Schedule a Meeting</h4>
                  <p className="text-blue-100">Online Consultation</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
