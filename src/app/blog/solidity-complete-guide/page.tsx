import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Complete Guide to Solidity for RWA Smart Contract Development | Cirrariq',
  description: 'A comprehensive guide to the Solidity programming language and best practices for developing smart contracts for real-world asset tokenization.',
  keywords: 'Solidity,Smart Contract,blockchain programming,RWA development,Solidity tutorial',
  openGraph: {
    title: 'Complete Guide to Solidity for RWA Smart Contract Development',
    description: 'A comprehensive guide to Solidity and best practices for developing smart contracts.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
  },
}

export default function SolidityGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solidity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              for RWA Smart Contract Development
            </p>
            <div className="flex items-center justify-center space-x-6  text-gray-400">
              <span className="flex items-center">
                <User className="w-5 h-5 ml-2" />
                Cirrariq
              </span>
              <span className="flex items-center">
                <Clock className="w-5 h-5 ml-2" />
                20 min
              </span>
              <span className="flex items-center">
                <Calendar className="w-5 h-5 ml-2" />
                Oct 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
          <div className="relative h-64 md:h-96">
            <Image
              src="/images/blog/solidity-guide.jpg"
              alt="Complete Guide Solidity"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Solidity is one of the most important programming languages in the blockchain world, used for developing smart contracts.. Guide .
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Fundamentals Solidity</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Solidity is a high-level programming language designed for writing smart contracts. Its syntax is similar to JavaScript and C++.t Usage Ethereum Optimization .
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Data Types</h3>
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`// Main Data Types
uint256 public totalSupply;
string public name;
bool public isActive;
address public owner;

// Arrays
uint256[] public balances;
mapping(address => uint256) public balances;`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Functions & Modifiers</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
 In Solidity, functions play an important role in defining contract behavior. Modifiers are also used to apply special conditions to functions..
              </p>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`contract RWAToken {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    function mint(address to, uint256 amount) public onlyOwner {
        // Minting logic
    }
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Security in Solidity</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Security is one of the most important aspects of smart contract development. In this section, you will learn security best practices..
              </p>

              <ul className="text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
                <li>• Usage of Checks-Effects-Interactions pattern</li>
                <li>• Preventing reentrancy attacks</li>
                <li>• Input validation</li>
                <li>• Usage of SafeMath library</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4">Testing & Debugging</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Testing smart contracts is critically important. In this section, you will learn about various testing tools.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
 Solidity is a powerful language for smart contract development. With proper learning, you can write secure and efficient contracts. projects RWA Creation .
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mb-4 sm:mb-0"
                >
                  <ArrowRight className="w-4 h-4 ml-2 rotate-180" />
                  Back to Blog
                </Link>
                <Link 
                  href="/technology/solidity"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  View Technology Page
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
