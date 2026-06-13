'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Building2, Coins, Users } from 'lucide-react'

const stats = [
  {
    icon: Coins,
    number: '2023',
    label: 'Founded',
    description: 'Started operations in the real-world asset tokenization space.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Building2,
    number: '100%',
    label: 'Success Rate',
    description: 'All projects completed successfully and without errors.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    number: '24/7',
    label: 'Support',
    description: 'Round-the-clock support for all our clients.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    number: '0',
    label: 'Project Delays',
    description: 'No project has ever been delivered late.',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Stats & Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our achievements in the real-world asset tokenization space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                
                <div className="text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why RWA Labs?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ High Security</div>
                <div className="text-sm">Secure smart contracts and international standards</div>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ Fast Execution</div>
                <div className="text-sm">Rapid tokenization with minimal fees</div>
              </div>
              <div>
                <div className="text-yellow-400 font-semibold mb-2">✓ 24/7 Support</div>
                <div className="text-sm">Round-the-clock support and consultation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
