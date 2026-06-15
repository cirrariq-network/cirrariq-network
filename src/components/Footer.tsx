import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const cols = {
  Solutions: [
    { name: 'Asset Tokenization', href: '/services/real-estate' },
    { name: 'Investor Management', href: '/services/rwa-wallet' },
    { name: 'Marketplace Enablement', href: '/services/digital-sukuk' },
    { name: 'Compliance', href: '/technology' },
    { name: 'Smart Contracts', href: '/technology/erc-3643' },
  ],
  Industries: [
    { name: 'Real Estate', href: '/services/real-estate' },
    { name: 'Mining & Commodities', href: '/services/mining-metals' },
    { name: 'Agriculture', href: '/services/agriculture' },
    { name: 'Investment Funds', href: '/services/digital-sukuk' },
    { name: 'Industrial Assets', href: '/services/vehicles' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/technology' },
    { name: 'Help Center', href: '/contact' },
    { name: 'API Reference', href: '/technology' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800" style={{ background: '#080c14' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/images/icon-light.png" alt="Cirrariq" width={32} height={32} className="w-8 h-8 object-contain" />
              <span className="text-white font-bold tracking-wide">CIRRARIQ</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Infrastructure for Real-World Asset Tokenization</p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Mail, href: 'mailto:hello@cirrariq.io' },
              ].map(({ icon: Icon, href }) => (
                <a key={href} href={href} className="w-8 h-8 rounded-lg border border-slate-700 hover:border-slate-500 flex items-center justify-center text-slate-500 hover:text-white transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <div className="text-white font-semibold text-sm mb-4">{title}</div>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">© 2024 CIRRARIQ. All rights reserved.</div>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <span>hello@cirrariq.io</span>
            <span>+1 (555) 123-4567</span>
            <span>London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
