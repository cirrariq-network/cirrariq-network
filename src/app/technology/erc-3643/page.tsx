import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle, ArrowRight, ExternalLink, Zap, Database, Globe, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERC-3643 - Standard Securities Standard Digital | RWA Labs',
  description: 'Complete guide to the ERC-3643 standard for digital securities. Features, benefits, regulatory compliance, and implementation.',
  keywords: 'ERC-3643,digital securities standard,security token,regulatory,KYC,AML,identity verification',
  openGraph: {
    title: 'ERC-3643 - Standard Securities Standard Digital',
    description: 'Complete guide to the ERC-3643 standard for digital securities.',
    type: 'article',
    locale: 'en_US',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/erc-3643-comprehensive.jpg',
        width: 1200,
        height: 630,
        alt: 'ERC-3643 - Standard Securities Standard Digital',
      },
    ],
  },
}

const features = [
  {
    icon: Shield,
    title: 'Compliance Regulatory',
    description: 'Designed for compliance with financial laws and securities regulations.'
  },
  {
    icon: Lock,
    title: 'Built-in KYC/AML',
    description: 'Built-in identity verification and anti-money-laundering capability within the contract'
  },
  {
    icon: Database,
    title: 'License Management',
    description: 'Advanced system for managing licenses and transfer restrictions'
  },
  {
    icon: Zap,
    title: 'Transfer Conditional',
    description: 'Ability to transfer tokens based on special conditions and laws'
  }
]

const complianceFeatures = [
  'Investor identity verification (KYC)',
  'anti-money laundering (AML)',
  'Investment eligibility review',
  'Geographic restriction management',
  'Token holding period control',
  'Investment cap management',
  'Reporting Regulatory',
  'Cross-country transfer control'
]

const tokenTypes = [
  {
    name: 'Equity Tokens',
    description: 'Share tokens representing ownership in a company',
    features: ['Voting rights', 'Profit distribution', 'Ownership rights', 'Restricted transfer capability']
  },
  {
    name: 'Debt Tokens',
    description: 'Debt tokens that are digital debentures',
    features: ['Interest receipt', 'Principal repayment', 'Payment priority', 'Trading capability']
  },
  {
    name: 'Asset-Backed Tokens',
    description: 'Asset-backed tokens supported by real assets',
    features: ['Physical backing', 'Intrinsic value', 'Redeemability', 'Full transparency']
  },
  {
    name: 'Utility Tokens',
    description: 'Utility tokens that provide access to services',
    features: ['Platform access', 'Fee payment', 'Burn capability', 'Limited usage']
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SecurityToken is ERC20, AccessControl {
    bytes32 public constant KYC_ROLE = keccak256("KYC_ROLE");
    bytes32 public constant TRANSFER_ROLE = keccak256("TRANSFER_ROLE");
    
    mapping(address => bool) public kycVerified;
    mapping(address => bool) public transferAllowed;
    mapping(address => uint256) public transferLimits;
    
    uint256 public maxSupply;
    bool public transfersPaused;
    
    event KYCVerified(address indexed account, bool verified);
    event TransferLimitSet(address indexed account, uint256 limit);
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxSupply
    ) ERC20(name, symbol) {
        maxSupply = _maxSupply;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(KYC_ROLE, msg.sender);
    }
    
    function verifyKYC(address account, bool verified) external onlyRole(KYC_ROLE) {
        kycVerified[account] = verified;
        emit KYCVerified(account, verified);
    }
    
    function setTransferLimit(address account, uint256 limit) external onlyRole(DEFAULT_ADMIN_ROLE) {
        transferLimits[account] = limit;
        emit TransferLimitSet(account, limit);
    }
    
    function allowTransfer(address account, bool allowed) external onlyRole(TRANSFER_ROLE) {
        transferAllowed[account] = allowed;
    }
    
    function pauseTransfers(bool paused) external onlyRole(DEFAULT_ADMIN_ROLE) {
        transfersPaused = paused;
    }
    
    function mint(address to, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(totalSupply() + amount <= maxSupply, "Max supply exceeded");
        require(kycVerified[to], "Recipient not KYC verified");
        _mint(to, amount);
    }
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(!transfersPaused, "Transfers are paused");
        require(kycVerified[from] && kycVerified[to], "KYC verification required");
        require(transferAllowed[from], "Transfer not allowed");
        
        if (transferLimits[from] > 0) {
            require(amount <= transferLimits[from], "Transfer limit exceeded");
        }
        
        super._beforeTokenTransfer(from, to, amount);
    }
}`

const advantages = [
  'Full compliance with financial laws',
  'High security for investors',
  'Full transparency in transactions',
  'Advanced control and management capability',
  'Support of Types Various Securities Standard',
  'Integration capability with traditional systems',
  'Regulatory cost reduction',
  'Fast execution in processing'
]

export default function ERC3643Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/erc-3643-comprehensive.jpg"
            alt="ERC-3643 - Standard Securities Standard Digital"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-indigo-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-purple-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>ERC-3643</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ERC-3643 - Standard Securities Standard Digital
            </h1>
            
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
 Advanced standard for creating digital securities with full regulatory compliance and security capabilitiesrity 
            </p>
            
            <div className="flex flex-wrap items-center text-purple-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>Securities Standard Digital</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Lock className="w-5 h-5 mr-2" />
                <span>Built-in KYC/AML</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>License management</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is ERC-3643?</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    ERC-3643 is an advanced standard for creating digital securities (Security Tokens) on the Ethereum network. 
                    This standard is specially designed for compliance with financial laws and securities regulations, and includes 
                    advanced identity verification, transfer control, and license management capabilities.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Unlike ERC-20 which is designed for general tokens, ERC-3643 is designed for regulated security tokens 
                    that require accurate control and management. This standard enables the creation of 
                    shares, debentures, and other financial instruments in full compliance with laws.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Compliance Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Regulatory Compliance Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {complianceFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Token Types */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Supported Token Types</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tokenTypes.map((type, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 ">
                              <CheckCircle className="w-4 h-4 text-purple-500" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
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

                {/* Advantages */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of ERC-3643</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{advantage}</span>
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
                      <span className="font-semibold text-purple-600">Securities Standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Regulatory:</span>
                      <span className="font-semibold text-purple-600">Compliance Complete</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">KYC/AML:</span>
                      <span className="font-semibold text-purple-600">Built-in</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-purple-600">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Compliance Regulatory</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">High Security</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Complete control</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Transparency</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://eips.ethereum.org/EIPS/eip-3643" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      EIP-3643 Specification
                    </a>
                    <a href="https://tokeny.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Tokeny Solutions
                    </a>
                    <a href="https://docs.tokeny.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Tokeny Documentation
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need Digital Securities?</h3>
                  <p className="text-purple-100 mb-4">
                    Our expert team is ready to develop digital securities using ERC-3643
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
