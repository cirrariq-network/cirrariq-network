'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import CalendlyButton from './CalendlyButton'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  {
    name: 'Solutions',
    href: '/services',
    submenu: [
      { name: 'Asset Tokenization', href: '/services/real-estate' },
      { name: 'Investor Management', href: '/services/rwa-wallet' },
      { name: 'Marketplace Enablement', href: '/services/digital-sukuk' },
      { name: 'Compliance Layer', href: '/technology' },
      { name: 'Smart Contracts', href: '/technology/erc-3643' },
    ]
  },
  {
    name: 'Industries',
    href: '/services',
    submenu: [
      { name: 'Real Estate', href: '/services/real-estate' },
      { name: 'Mining & Commodities', href: '/services/mining-metals' },
      { name: 'Agriculture', href: '/services/agriculture' },
      { name: 'Investment Funds', href: '/services/digital-sukuk' },
      { name: 'Industrial Assets', href: '/services/vehicles' },
    ]
  },
  { name: 'Technology', href: '/technology' },
  { name: 'Case Studies', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 backdrop-blur-xl" style={{ background: 'rgba(8,12,20,0.92)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center h-16 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/icon-light.png"
              alt="Cirrariq"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
              priority
            />
            <span className="text-white font-bold text-lg tracking-wide">CIRRARIQ</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navigation.map((item) => (
              <div key={item.name} className="relative"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSubmenu === item.name
                      ? 'text-white bg-slate-800'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 rounded-xl shadow-2xl py-2 z-50 border border-slate-700/60"
                        style={{ background: '#0f1623' }}
                      >
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <CalendlyButton
              text="Book a Demo"
              variant="primary"
              size="md"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg text-sm"
            />
          </div>

          {/* Mobile menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-auto p-2 text-slate-400 hover:text-white">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-800 py-4 space-y-1"
            >
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg text-sm font-medium" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.submenu.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="block px-4 py-2 text-slate-500 hover:text-slate-300 text-sm" onClick={() => setIsOpen(false)}>
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-3">
                <CalendlyButton text="Book a Demo" variant="primary" size="md" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold py-2.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
