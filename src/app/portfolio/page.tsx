import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight, CheckCircle, Calendar, Users, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Completed Projects | Cirrariq Portfolio',
  description: 'Successful real-world asset tokenization projects including saffron, pistachio, sheep, rice and other assets.',
  keywords: 'tokenization portfolio,RWA projects,pistachio token,sheep token,rice token,saffron token',
}

const projects = [
  {
    id: 'saffron',
    title: 'Saffron Token Project',
    description: 'Saffron tokenization with standard capabilities and integration with decentralized exchanges.',
    image: '/images/portfolio/saffron-project.jpg',
    status: 'Completed',
    launchDate: 'Sep 2024',
    totalValue: '$500K',
    investors: '200+',
    features: ['ERC-20 Standard','Uniswap V3 Integration','Token Pause Capability','Proxy Pattern for Upgrades','Multi-signature Wallet','Automated Reporting'],
    link: 'https://zfrnbon.surge.sh',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'pistachio',
    title: 'Pistachio Token Project',
    description: 'Pistachio tokenization with standard capabilities and integration with decentralized exchanges.',
    image: '/images/portfolio/pistachio-project.jpg',
    status: 'Completed',
    launchDate: 'Nov 2024',
    totalValue: '$300K',
    investors: '120+',
    features: ['ERC-20 Standard','Uniswap V3 Integration','Token Pause Capability','Proxy Pattern for Upgrades','Multi-signature Wallet','Automated Reporting'],
    link: 'https://pstebon.surge.sh',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sheep',
    title: 'Sheep Token Project',
    description: 'Livestock and sheep tokenization with management capabilities.',
    image: '/images/portfolio/sheep-project.jpg',
    status: 'Completed',
    launchDate: 'Jan 2025',
    totalValue: '$200K',
    investors: '80+',
    features: ['ERC-20 Standard','PancakeSwap Integration','Wallet Freeze Capability','Partial & Bulk Airdrop','Time-locked Contracts','Emergency Pause'],
    link: 'https://gsfnbon.surge.sh',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'rice',
    title: 'Rice Token Project',
    description: 'Rice tokenization with batch transfer and advanced management capabilities.',
    image: '/images/portfolio/rice-project.jpg',
    status: 'Completed',
    launchDate: 'Feb 2025',
    totalValue: '$150K',
    investors: '60+',
    features: ['ERC-20 Standard','SushiSwap Integration','Batch Transfer','Gas Optimization','Upgradeable Contracts','Version Control'],
    link: 'https://brnjbon.surge.sh',
    color: 'from-yellow-400 to-yellow-600'
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero */}
      <section className="bg-gradient-to-r [#080c14] py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Completed Projects</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our successful case studies in real-world asset tokenization.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-4 h-4 text-blue-400 mr-1" />
                        <span className="text-sm text-slate-400">Launch Date</span>
                      </div>
                      <div className="font-semibold text-white">{project.launchDate}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="w-4 h-4 text-green-600 mr-1" />
                        <span className="text-sm text-slate-400">Total Value</span>
                      </div>
                      <div className="font-semibold text-white">{project.totalValue}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="w-4 h-4 text-purple-400 mr-1" />
                        <span className="text-sm text-slate-400">Investors</span>
                      </div>
                      <div className="font-semibold text-white">{project.investors}</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((f, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-blue-400 font-semibold hover:text-blue-700 transition-colors group">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href={`/portfolio/${project.id}`}
                      className="flex items-center text-slate-400 hover:text-gray-800 transition-colors group">
                      More Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0e1420]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Overall Project Stats</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Our achievements in real-world asset tokenization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-4xl font-bold text-blue-400 mb-2">4</div><div className="text-slate-400">Completed Projects</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-green-600 mb-2">$1.15M</div><div className="text-slate-400">Total Project Value</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-purple-400 mb-2">410+</div><div className="text-slate-400">Active Investors</div></div>
            <div className="text-center"><div className="text-4xl font-bold text-orange-600 mb-2">100%</div><div className="text-slate-400">Success Rate</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Entrust Your Project to Us</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to collaborate on your real-world asset tokenization projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Request New Project
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
