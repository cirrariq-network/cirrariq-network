'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import CalendlyButton from './CalendlyButton'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Real Estate Tokenization', href: '/services/real-estate' },
      { name: 'Mining & Metals Tokenization', href: '/services/mining-metals' },
      { name: 'Agricultural Products Tokenization', href: '/services/agriculture' },
      { name: 'Vehicles & Machinery Tokenization', href: '/services/vehicles' },
      { name: 'Digital Sukuk & Securities', href: '/services/digital-sukuk' },
      { name: 'Blockchain RWA Wallet', href: '/services/rwa-wallet' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Technology', href: '/technology' },
  { name: 'Blog', href: '/blog' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image
              src="/images/icon-light.png"
              alt="Cirrariq logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900 tracking-wide">CIRRARIQ</div>
              <div className="text-xs text-gray-500 tracking-wider uppercase">Infrastructure for Real-World Value</div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium px-3 py-2"
                  onMouseEnter={() => setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => setActiveSubmenu(item.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Right side */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <CalendlyButton 
              text="Free Consultation" 
              variant="primary" 
              size="md" 
              className="bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-700 px-6 py-2"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-8 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <div className="w-full">
                    <CalendlyButton 
                      text="Free Consultation" 
                      variant="primary" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-700 hover:to-indigo-700 px-6 py-3"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
