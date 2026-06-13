import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import WhyTokenize from '@/components/WhyTokenize'
import TechnicalFeatures from '@/components/TechnicalFeatures'
import StatsSection from '@/components/StatsSection'
import PortfolioSection from '@/components/PortfolioSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Tokenize Physical Assets | RWA Labs',
  description: 'Tokenize your physical assets on blockchain. Convert real estate, gold, agricultural products, vehicles, and mining assets into digital tokens. Secondary market, dedicated wallet, digital sukuk.',
  keywords: 'tokenize,real world assets,RWA,tokenize assets,digital sukuk,ERC-3643,blockchain,token,real estate token,gold token,saffron token,vehicle token,digital sukuk,RWA wallet',
  openGraph: {
    title: 'Tokenize Physical Assets | RWA Labs',
    description: 'Tokenize your physical assets on blockchain. Convert real estate, gold, agricultural products, vehicles, and mining assets into digital tokens.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/rwa-tokenization-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Tokenize Physical Assets - RWA Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenize Physical Assets | RWA Platform',
    description: 'Tokenize your physical assets on blockchain',
    images: ['/images/rwa-tokenization-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rwa-labs.io',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyTokenize />
      <TechnicalFeatures />
      <StatsSection />
      <PortfolioSection />
      <CTASection />
    </main>
  )
}
