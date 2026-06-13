'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, ArrowRight, CheckCircle } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', projectType: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Your request was submitted successfully!
        </h3>
        <p className="text-gray-600 mb-6">
          Our team will contact you as soon as possible.
        </p>
        <CalendlyButton text="Schedule a Meeting" variant="primary" size="lg" />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-xl"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Request a Consultation
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="+1-800-000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          >
            <option value="">Select a type</option>
            <option value="real-estate">Real Estate Tokenization</option>
            <option value="mining-metals">Mining & Metals Tokenization</option>
            <option value="agriculture">Agricultural Products Tokenization</option>
            <option value="vehicles">Vehicles & Machinery Tokenization</option>
            <option value="digital-sukuk">Digital Sukuk & Securities</option>
            <option value="rwa-wallet">Blockchain RWA Wallet</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Provide more details about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center group"
        >
          Submit Request
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Direct Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3 text-blue-600" />
            <span>+1-800-RWA-LABS</span>
          </div>
          <CalendlyButton text="Book a Meeting" variant="outline" size="sm" />
        </div>
      </div>
    </motion.div>
  )
}
