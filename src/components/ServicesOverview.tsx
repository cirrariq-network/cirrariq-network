'use client'

import { motion } from 'framer-motion'
import { Building2, Gem, Wheat, Car, FileText, Wallet, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'real-estate',
    title: 'Real Estate Tokenization',
    description: 'Convert residential, commercial buildings and construction projects into tradeable tokens.',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
    href: '/services/real-estate'
  },
  {
    id: 'mining-metals',
    title: 'Mining & Metals Tokenization',
    description: 'Gold, silver, copper, iron, precious stones and various mining assets.',
    icon: Gem,
    color: 'from-yellow-500 to-orange-500',
    href: '/services/mining-metals'
  },
  {
    id: 'agriculture',
    title: 'Agricultural Products Tokenization',
    description: 'Saffron, pistachio, rice, livestock and other agricultural and farming products.',
    icon: Wheat,
    color: 'from-green-500 to-emerald-500',
    href: '/services/agriculture'
  },
  {
    id: 'vehicles',
    title: 'Vehicles & Machinery Tokenization',
    description: 'Luxury cars, heavy machinery and industrial equipment.',
    icon: Car,
    color: 'from-purple-500 to-pink-500',
    href: '/services/vehicles'
  },
  {
    id: 'digital-sukuk',
    title: 'Digital Sukuk & Securities',
    description: 'Islamic securities, income-generating sukuk, participation bonds and debentures.',
    icon: FileText,
    color: 'from-indigo-500 to-blue-500',
    href: '/services/digital-sukuk'
  },
  {
    id: 'rwa-wallet',
    title: 'Blockchain RWA Wallet',
    description: 'Dedicated blockchain wallet for storing and managing RWA tokens.',
    icon: Wallet,
    color: 'from-indigo-500 to-purple-500',
    href: '/services/rwa-wallet'
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We tokenize any type of real asset with international standards and high security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center mx-auto group">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
