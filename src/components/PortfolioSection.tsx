'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import CalendlyButton from './CalendlyButton'

const projects = [
  {
    id: 'saffron',
    title: 'Saffron Token Project',
    description: 'Saffron tokenization with standard capabilities and integration with decentralized exchanges.',
    image: '/images/portfolio/saffron-project.jpg',
    status: 'Completed',
    features: [
      'ERC-20 Standard',
      'Uniswap V3 Integration',
      'Token Pause Capability',
      'Proxy Pattern for Upgrades',
      'Multi-signature Wallet',
      'Automated Reporting'
    ],
    link: 'https://zfrnbon.surge.sh',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'pistachio',
    title: 'Pistachio Token Project',
    description: 'Pistachio tokenization with standard capabilities and integration with decentralized exchanges.',
    image: '/images/portfolio/pistachio-project.jpg',
    status: 'Completed',
    features: [
      'ERC-20 Standard',
      'Uniswap V3 Integration',
      'Token Pause Capability',
      'Proxy Pattern for Upgrades',
      'Multi-signature Wallet',
      'Automated Reporting'
    ],
    link: 'https://pstebon.surge.sh',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sheep',
    title: 'Sheep Token Project',
    description: 'Livestock and sheep tokenization with management capabilities.',
    image: '/images/portfolio/sheep-project.jpg',
    status: 'Completed',
    features: [
      'ERC-20 Standard',
      'PancakeSwap Integration',
      'Wallet Freeze Capability',
      'Partial & Bulk Airdrop',
      'Time-locked Contracts',
      'Emergency Pause'
    ],
    link: 'https://gsfnbon.surge.sh',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'rice',
    title: 'Rice Token Project',
    description: 'Rice tokenization with batch transfer and management capabilities.',
    image: '/images/portfolio/rice-project.jpg',
    status: 'Completed',
    features: [
      'ERC-20 Standard',
      'SushiSwap Integration',
      'Batch Transfer',
      'Gas Optimization',
      'Upgradeable Contracts',
      'Version Control'
    ],
    link: 'https://brnjbon.surge.sh',
    color: 'from-yellow-400 to-yellow-600'
  }
]

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(projects.length / itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(projects.length / itemsPerView)) % Math.ceil(projects.length / itemsPerView))
  }

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerView
    return projects.slice(start, start + itemsPerView)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Completed Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our successful case studies in real-world asset tokenization.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= Math.ceil(projects.length / itemsPerView) - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="h-40 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'In Development'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-between items-center">
                      {project.link !== '#' ? (
                        <Link 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <span className="text-gray-400 font-semibold">
                          Coming Soon
                        </span>
                      )}
                      
                      <Link 
                        href={`/portfolio/${project.id}`}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
                      >
                        More Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(projects.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Entrust Your Project to Us
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to collaborate on your real-world asset tokenization projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton 
                text="Request New Project" 
                variant="primary" 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              />
              <Link href="/portfolio">
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 hover:text-gray-800 transition-all duration-300">
                  View All Projects
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
