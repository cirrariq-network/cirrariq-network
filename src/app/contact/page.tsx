import { Metadata } from 'next'
import { Phone, Clock } from 'lucide-react'
import CalendlyButton from '@/components/CalendlyButton'

export const metadata: Metadata = {
  title: 'Contact Cirrariq | Free Tokenization Consultation | 24/7 Support',
  description: 'Contact the Cirrariq team for a free real-world asset tokenization consultation. Support and guidance available.',
  keywords: 'contact Cirrariq,free tokenization consultation,tokenization support,contact blockchain team,tokenization guidance',
  openGraph: {
    title: 'Contact Cirrariq | Free Tokenization Consultation',
    description: 'Contact the Cirrariq team for a free real-world asset tokenization consultation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cirrariq',
  },
}

const faqItems = [
  {
    question: 'What types of assets can be tokenized?',
    answer: 'Real estate, gold, agricultural products, vehicles, mining assets, and securities can all be tokenized.'
  },
  {
    question: 'How much does tokenization cost?',
    answer: 'Tokenization costs are calculated based on the type and value of the asset. Contact us for an accurate quote.'
  },
  {
    question: 'Do you offer consultations?',
    answer: 'Yes, the initial consultation is completely free and comes with no obligations.'
  },
  {
    question: 'How do I get started?',
    answer: 'To get started, contact us or schedule a meeting so we can discuss your project.'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r [#080c14] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get in touch for a free consultation, price inquiry, and guidance on real-world asset tokenization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white flex items-center gap-4">
                <Phone className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">Phone</div>
                  <div className="text-blue-100">+1-800-CIRRARIQ</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white flex items-center gap-4">
                <Clock className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold">Online Consultation</div>
                  <CalendlyButton text="Schedule a Meeting" variant="secondary" size="sm" className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0f1a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Answers to common questions about real-world asset tokenization.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                <p className="text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tokenization Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us now and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18003000000" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Call Now
            </a>
            <CalendlyButton text="Schedule a Meeting" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-400" />
          </div>
        </div>
      </section>
    </div>
  )
}
