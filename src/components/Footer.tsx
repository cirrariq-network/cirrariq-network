import Link from 'next/link'
import { Phone, ExternalLink } from 'lucide-react'
import CalendlyButton from './CalendlyButton'

const footerLinks = {
  services: [
    { name: 'Real Estate Tokenization', href: '/services/real-estate' },
    { name: 'Mining & Metals Tokenization', href: '/services/mining-metals' },
    { name: 'Agricultural Products Tokenization', href: '/services/agriculture' },
    { name: 'Vehicles & Machinery Tokenization', href: '/services/vehicles' },
    { name: 'Digital Sukuk & Securities', href: '/services/digital-sukuk' },
    { name: 'Blockchain RWA Wallet', href: '/services/rwa-wallet' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Technology', href: '/technology' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Getting Started Guide', href: '/contact' },
    { name: 'Free Consultation', href: 'calendly' },
    { name: 'Price Inquiry', href: '/contact' },
    { name: 'Technical Support', href: '/contact' },
    { name: 'FAQs', href: '/contact' },
  ],
  social: [
    { name: 'Phone', href: 'tel:+18003000000', icon: Phone },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RWA</span>
              </div>
              <div>
                <div className="text-xl font-bold">Tokenization</div>
                <div className="text-sm text-gray-400">Real-World Assets</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tokenizing physical assets using blockchain technology. 
              Convert your assets into digital tokens.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+18003000000"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-3" />
                Phone: +1-800-RWA-LABS
              </a>
              <CalendlyButton 
                text="Schedule a Meeting" 
                variant="outline" 
                size="sm" 
                className="text-gray-400 hover:text-white border-gray-400 hover:border-white"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href === 'calendly' ? (
                    <CalendlyButton 
                      text={link.name}
                      variant="link"
                      size="sm"
                      className="text-gray-400 hover:text-white p-0 h-auto font-normal"
                    />
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 RWA Labs - All rights reserved
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Designed & developed by</span>
              <a
                href="https://miroteam.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors duration-300 font-semibold"
              >
                MiroTeam
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
