import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Code, CheckCircle, ArrowRight, ExternalLink, Zap, Shield, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solidity - Smart contract programming language | Cirrariq',
  description: 'Complete guide to the Solidity programming language for smart contract development. Features, benefits, examples, and best practices.',
  keywords: 'solidity,programming language,smart contract,EVM,blockchain,contract development,smart contract',
  openGraph: {
    title: 'Solidity - Smart contract programming language',
    description: 'Complete guide to the Solidity programming language for smart contract development.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
    images: [
      {
        url: '/images/technology/solidity-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Solidity - Smart contract programming language',
      },
    ],
  },
}

const features = [
  {
    icon: Code,
    title: 'Specialized Programming Language',
    description: 'Programming language dedicated to developing smart contracts on the Ethereum network'
  },
  {
    icon: Database,
    title: 'Compatible with EVM',
    description: 'Fully compatible with the Ethereum Virtual Machine (EVM)'
  },
  {
    icon: Shield,
    title: 'High Security',
    description: 'Designed with a focus on security and preventing vulnerabilities'
  },
  {
    icon: Zap,
    title: 'Optimization Gas',
    description: 'Gas optimization capability to reduce transaction costs'
  }
]

const codeExamples = [
  {
    title: 'Simple ERC-20 Contract',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleToken {
    string public name = "RWA Token";
    string public symbol = "RWA";
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply;
        balanceOf[msg.sender] = _initialSupply;
    }
    
    function transfer(address to, uint256 value) public returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
}`
  },
  {
    title: 'RWA Token Contract',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RWAToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1000000 * 10**18;
    uint256 public tokenPrice = 0.001 ether;
    
    mapping(address => bool) public authorizedMinters;
    
    constructor() ERC20("RWA Token", "RWA") {}
    
    function mint(address to, uint256 amount) public onlyAuthorizedMinter {
        require(totalSupply() + amount <= MAX_SUPPLY, "Max supply exceeded");
        _mint(to, amount);
    }
    
    modifier onlyAuthorizedMinter() {
        require(authorizedMinters[msg.sender] || msg.sender == owner(), "Not authorized");
        _;
    }
    
    function setAuthorizedMinter(address minter, bool authorized) public onlyOwner {
        authorizedMinters[minter] = authorized;
    }
}`
  }
]

const bestPractices = [
  'Use the latest Solidity version (0.8.19+)',
  'Apply appropriate security modifiers',
  'Comprehensive testing before deployment',
  'Use trusted libraries like OpenZeppelin',
  'Apply the checks-effects-interactions pattern',
  'Complete code documentation',
  'Use events for logging',
  'Apply appropriate access control'
]

export default function SolidityPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/solidity-guide.jpg"
            alt="Solidity - Smart contract programming language"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-blue-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>Solidity</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Solidity - Smart contract programming language
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Specialized programming language for developing smart contracts on the Ethereum network and other EVM-compatible networksM
            </p>
            
            <div className="flex flex-wrap items-center text-blue-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Code className="w-5 h-5 mr-2" />
                <span>Programming language</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>Compatible with EVM</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>High Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-6">What Is Solidity?</h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Solidity is a high-level programming language designed for writing smart contracts. 
                    This language is specifically developed to run on the Ethereum Virtual Machine (EVM) and uses syntax similar to 
                    JavaScript and C++.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Solidity enables the creation of complex and secure contracts that can manage digital assets, 
                    tokens, and decentralized finance systems. This language is widely used in 
                    DeFi, NFT, and real-world asset tokenization projects.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                          <p className="text-slate-400">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Examples */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Code Examples</h2>
                  {codeExamples.map((example, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4">{example.title}</h3>
                      <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                        <pre className="text-green-400 text-sm leading-relaxed">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Best Practices */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-white mb-8">Best Practices</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">General Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Current Version:</span>
                      <span className="font-semibold text-blue-400">0.8.19+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Language Type:</span>
                      <span className="font-semibold text-blue-400">Statically Typed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Compatibility:</span>
                      <span className="font-semibold text-blue-400">EVM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Support:</span>
                      <span className="font-semibold text-blue-400">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Official Documentation
                    </a>
                    <a href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Remix IDE
                    </a>
                    <a href="https://hardhat.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Hardhat Framework
                    </a>
                    <a href="https://openzeppelin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need Consultation?</h3>
                  <p className="text-blue-100 mb-4">
                    Our expert team is ready to help with smart contract development using Solidity
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-[#0e1420] text-blue-400 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
