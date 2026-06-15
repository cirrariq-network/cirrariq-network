import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Zap, CheckCircle, ArrowRight, ExternalLink, Shield, Database, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Proxy Pattern - Smart Contract Upgrade Pattern | Cirrariq',
  description: 'Complete guide to the Proxy Pattern for upgrading smart contracts. Features, benefits, types, and implementation.',
  keywords: 'Proxy Pattern,contract upgrade,upgradeable contract,OpenZeppelin,storage pattern,implementation',
  openGraph: {
    title: 'Proxy Pattern - Smart Contract Upgrade Pattern',
    description: 'Complete guide to the Proxy Pattern for upgrading smart contracts',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
    images: [
      {
        url: '/images/technology/proxy-pattern-explained.jpg',
        width: 1200,
        height: 630,
        alt: 'Proxy Pattern - Smart Contract Upgrade Pattern',
      },
    ],
  },
}

const features = [
  {
    icon: RefreshCw,
    title: 'Upgradeability',
    description: 'Ability to upgrade contract logic without changing the address'
  },
  {
    icon: Shield,
    title: 'Preservation Address',
    description: 'The contract address and its state are preserved'
  },
  {
    icon: Database,
    title: 'Management Storage',
    description: 'Smart management of contract memory and data'
  },
  {
    icon: Zap,
    title: 'Optimization Gas',
    description: 'Gas cost reduction in upgrades'
  }
]

const proxyTypes = [
  {
    name: 'Transparent Proxy',
    description: 'Transparent proxy that forwards all functions to the implementation',
    features: ['Simple implementation', 'Complete admin control', 'High Security', 'Full compatibility'],
    useCase: 'Suitable for small and medium projects'
  },
  {
    name: 'UUPS Proxy',
    description: 'Universal Upgradeable Proxy Standard with automated upgrades',
    features: ['Automated upgrades', 'Gas cost reduction', 'Better control', 'High flexibility'],
    useCase: 'Suitable for large and complex projects'
  },
  {
    name: 'Beacon Proxy',
    description: 'Beacon proxy for managing multiple implementations',
    features: ['Centralized management', 'Simultaneous upgrades', 'Scalability', 'Unified control'],
    useCase: 'Suitable for projects with multiple contracts'
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Implementation Contract
contract RWATokenV1 is UUPSUpgradeable, Ownable {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    
    function initialize(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) public initializer {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        balanceOf[msg.sender] = _totalSupply;
    }
    
    function transfer(address to, uint256 amount) public returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        return true;
    }
    
    // UUPS upgrade authorization
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}

// Proxy Factory
contract ProxyFactory {
    event ProxyCreated(address indexed proxy, address indexed implementation);
    
    function createProxy(
        address implementation,
        address admin,
        bytes memory data
    ) public returns (address) {
        TransparentUpgradeableProxy proxy = new TransparentUpgradeableProxy(
            implementation,
            admin,
            data
        );
        emit ProxyCreated(address(proxy), implementation);
        return address(proxy);
    }
}

// Usage Example
contract DeployScript {
    function deployRWAToken() public {
        // 1. Deploy Implementation
        RWATokenV1 implementation = new RWATokenV1();
        
        // 2. Deploy Proxy
        ProxyFactory factory = new ProxyFactory();
        address proxy = factory.createProxy(
            address(implementation),
            msg.sender, // admin
            abi.encodeWithSelector(
                RWATokenV1.initialize.selector,
                "RWA Token",
                "RWA",
                1000000 * 10**18
            )
        );
        
        // 3. Use proxy as regular contract
        RWATokenV1 token = RWATokenV1(proxy);
        // token is now ready to use
    }
}`

const bestPractices = [
  'Usage of OpenZeppelin Upgrades',
  'Complete testing before upgrade',
  'Backup of important data',
  'Apply appropriate access control',
  'Document changes',
  'Usage of storage gaps',
  'Test compatibility',
  'Review security implications'
]

const advantages = [
  'Zero-downtime upgradability',
  'Contract address and state preservation',
  'Enabling bug fixes and improvements',
  'Reducing risk from new contracts',
  'Better lifecycle management',
  'Rollback capability in case of issues',
  'Optimization Continuous',
  'Development flexibility'
]

export default function ProxyPatternPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/proxy-pattern-explained.jpg"
            alt="Proxy Pattern - Upgrade Pattern for Smart Contracts"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-red-900/90 to-pink-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-orange-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>Proxy Pattern</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Proxy Pattern - Upgrade Pattern for Smart Contracts
            </h1>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Advanced design pattern for creating upgradeable smart contracts without changing the address and preserving state
            </p>
            
            <div className="flex flex-wrap items-center text-orange-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <RefreshCw className="w-5 h-5 mr-2" />
                <span>Upgradeability</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>Preservation Address</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>Management Storage</span>
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
                  <h2 className="text-3xl font-bold text-white mb-6">What Is the Proxy Pattern?</h2>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    The Proxy Pattern is an advanced design pattern in smart contracts that enables upgrading contract logic 
                    without changing its address. This pattern consists of two main parts: the Proxy Contract, 
                    which has a fixed address, and the Implementation Contract, which contains the contract logic.
                  </p>
                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    This pattern is especially useful for RWA projects that require continuous updates and improvements. 
                    With the Proxy Pattern, you can fix bugs, add new features, 
                    and apply security optimizations without forcing users to change the contract address.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Proxy Types */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Types Proxy Pattern</h2>
                  <div className="space-y-6">
                    {proxyTypes.map((type, index) => (
                      <div key={index} className="border border-slate-800 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                        <p className="text-slate-400 mb-4">{type.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 ">
                                <CheckCircle className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-slate-400">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3">
                          <p className="text-sm text-orange-800">
                            <strong>Use Cases:</strong> {type.useCase}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Example */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Example Implementation</h2>
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-green-400 text-sm leading-relaxed">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </div>

                {/* Best Practices */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Best Practices</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bestPractices.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-slate-300">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advantages */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-white mb-8">Benefits of Proxy Pattern</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-300">{advantage}</span>
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
                      <span className="text-slate-400">Type:</span>
                      <span className="font-semibold text-orange-600">Design pattern</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Capability:</span>
                      <span className="font-semibold text-orange-600">Upgrade</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Library:</span>
                      <span className="font-semibold text-orange-600">OpenZeppelin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Complexity:</span>
                      <span className="font-semibold text-orange-600">Medium</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-slate-400">Zero-downtime upgrade</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-slate-400">Preservation Address</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-slate-400">Management Storage</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-slate-400">High flexibility</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://docs.openzeppelin.com/contracts/4.x/upgradeable" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      OpenZeppelin Upgrades
                    </a>
                    <a href="https://docs.openzeppelin.com/upgrades-plugins/1.x/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Upgrades Plugins
                    </a>
                    <a href="https://blog.openzeppelin.com/proxy-patterns/" target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-600 hover:text-orange-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Proxy Patterns Blog
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need an Upgradeable Contract?</h3>
                  <p className="text-orange-100 mb-4">
                    Our expert team is ready to implement the Proxy Pattern for RWA projects
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-[#0e1420] text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
