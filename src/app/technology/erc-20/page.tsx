import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Database, CheckCircle, ArrowRight, ExternalLink, Zap, Shield, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERC-20 - Fungible Token Standard | Cirrariq',
  description: 'Complete guide to the ERC-20 standard for fungible tokens. Features, benefits, examples, and implementation.',
  keywords: 'ERC-20,token standard,fungible token,fungible token,ethereum,blockchain,smart contract',
  openGraph: {
    title: 'ERC-20 - Fungible Token Standard',
    description: 'Complete guide to the ERC-20 standard for fungible tokens',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
    images: [
      {
        url: '/images/technology/erc-20-deep-dive.jpg',
        width: 1200,
        height: 630,
        alt: 'ERC-20 - Fungible Token Standard',
      },
    ],
  },
}

const features = [
  {
    icon: Database,
    title: 'Standard International',
    description: 'Globally accepted standard for fungible tokens'
  },
  {
    icon: Globe,
    title: 'Full Compatibility',
    description: 'Compatible with all wallets, exchanges, and DEXs'
  },
  {
    icon: Zap,
    title: 'Trading capability',
    description: 'Easy trading on various markets'
  },
  {
    icon: Shield,
    title: 'High Security',
    description: 'Secure standard tested in thousands of projects'
  }
]

const functions = [
  {
    name: 'totalSupply()',
    description: 'Returns the total supply of tokens',
    returns: 'uint256'
  },
  {
    name: 'balanceOf(address)',
    description: 'Returns the token balance of a specific address',
    returns: 'uint256'
  },
  {
    name: 'transfer(address, uint256)',
    description: 'Transfers tokens from the sender address to the recipient',
    returns: 'bool'
  },
  {
    name: 'approve(address, uint256)',
    description: 'Allows another address to use tokens on behalf of the owner',
    returns: 'bool'
  },
  {
    name: 'allowance(address, address)',
    description: 'Reviews the approved amount for an address to use tokens',
    returns: 'uint256'
  },
  {
    name: 'transferFrom(address, address, uint256)',
    description: 'Transfers tokens from an approved address to the recipient',
    returns: 'bool'
  }
]

const events = [
  {
    name: 'Transfer',
    description: 'Triggered when tokens are transferred between addresses',
    parameters: 'address indexed from, address indexed to, uint256 value'
  },
  {
    name: 'Approval',
    description: 'Triggered when a token usage allowance is approved',
    parameters: 'address indexed owner, address indexed spender, uint256 value'
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract RWAToken is IERC20 {
    string public name = "RWA Token";
    string public symbol = "RWA";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10**decimals;
        _balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }
    
    function balanceOf(address account) public view override returns (uint256) {
        return _balances[account];
    }
    
    function transfer(address to, uint256 amount) public override returns (bool) {
        require(_balances[msg.sender] >= amount, "Insufficient balance");
        _balances[msg.sender] -= amount;
        _balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) public override returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    
    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }
    
    function transferFrom(address from, address to, uint256 amount) public override returns (bool) {
        require(_balances[from] >= amount, "Insufficient balance");
        require(_allowances[from][msg.sender] >= amount, "Insufficient allowance");
        
        _balances[from] -= amount;
        _balances[to] += amount;
        _allowances[from][msg.sender] -= amount;
        
        emit Transfer(from, to, amount);
        return true;
    }
}`

const useCases = [
  'Tokens Applied (Utility Tokens)',
  'Security Tokens',
  'Stablecoins',
  'Governance Tokens',
  'Tokens RWA (Real World Assets)',
  'Gaming Tokens',
  'Reward Tokens',
  'Payment Tokens'
]

export default function ERC20Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/erc-20-deep-dive.jpg"
            alt="ERC-20 - Fungible Token Standards"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-green-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>ERC-20</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ERC-20 - Fungible Token Standards
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              International standard for creating fungible tokens on the Ethereum network and other compatible networks
            </p>
            
            <div className="flex flex-wrap items-center text-green-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>Token Standard</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Globe className="w-5 h-5 mr-2" />
                <span>Full compatibility</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is ERC-20?</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    ERC-20 is a technical standard for smart contracts on the Ethereum network that defines how to create 
                    fungible tokens. This standard includes a set of 
                    rules and functions that all ERC-20 tokens must follow.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This standard enables easy interaction between various tokens, wallets, and exchanges. 
                    Every ERC-20 token has common features such as transfer capability, approval, and balance review.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Functions */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Mandatory Functions</h2>
                  <div className="space-y-6">
                    {functions.map((func, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 font-mono">{func.name}</h3>
                          <span className="text-blue-600 font-semibold">{func.returns}</span>
                        </div>
                        <p className="text-gray-600">{func.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Events</h2>
                  <div className="space-y-6">
                    {events.map((event, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 font-mono mb-2">{event.name}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <code className="text-sm text-gray-800">{event.parameters}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Example Implementation</h2>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm leading-relaxed">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Use Cases</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">General Info</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold text-green-600">Token Standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Capability:</span>
                      <span className="font-semibold text-green-600">Fungible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network:</span>
                      <span className="font-semibold text-green-600">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-green-600">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Wallet compatibility</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Trading capability Easy</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Standard Secure</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Broad support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      EIP-20 Specification
                    </a>
                    <a href="https://docs.openzeppelin.com/contracts/4.x/erc20" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin ERC20
                    </a>
                    <a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-20/" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ethereum Docs
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need an ERC-20 Token?</h3>
                  <p className="text-green-100 mb-4">
                    Our expert team is ready to develop ERC-20 tokens for RWA projects
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
