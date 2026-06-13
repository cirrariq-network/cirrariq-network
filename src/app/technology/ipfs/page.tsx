import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, CheckCircle, ArrowRight, ExternalLink, Database, Shield, Zap, Cloud } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPFS - InterPlanetary File System | RWA Labs',
  description: 'Complete guide to IPFS for decentralized data storage. Features, benefits, usage, and implementation.',
  keywords: 'IPFS,decentralized storage,InterPlanetary File System,blockchain,file system,distributed',
  openGraph: {
    title: 'IPFS - InterPlanetary File System',
    description: 'Complete guide to IPFS for decentralized data storage',
    type: 'article',
    locale: 'en_US',
    siteName: 'RWA Labs',
    images: [
      {
        url: '/images/technology/ipfs-storage.jpg',
        width: 1200,
        height: 630,
        alt: 'IPFS - InterPlanetary File System',
      },
    ],
  },
}

const features = [
  {
    icon: Globe,
    title: 'Decentralized storage',
    description: 'Data is stored in a distributed network'
  },
  {
    icon: Shield,
    title: 'Censorship Resistant',
    description: 'There is no central authority to control access'
  },
  {
    icon: Database,
    title: 'Permanent access',
    description: 'Data is always accessible'
  },
  {
    icon: Zap,
    title: 'Low Cost',
    description: 'Very low storage and transfer costs'
  }
]

const useCases = [
  {
    name: 'RWA Document Storage',
    description: 'Storing legal documents, certificates, and records related to real-world assets.',
    features: ['High Security', 'Permanent Access', 'Full Transparency', 'Cost Reduction']
  },
  {
    name: 'NFT Metadata',
    description: 'Storing metadata for non-fungible tokens and digital assets',
    features: ['Recovery Capability', 'Immutability', 'Distributed', 'Failure Resistant']
  },
  {
    name: 'Static Websites',
    description: 'Hosting static websites and frontend applications',
    features: ['Fast Execution', 'Global CDN', 'Zero Cost', 'DDoS Resistant']
  },
  {
    name: 'Data Archiving',
    description: 'Long-term archiving of data and important information',
    features: ['Permanent Preservation', 'Version Control', 'Easy Access', 'High Security']
  }
]

const codeExample = `// IPFS Integration with Smart Contracts
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

contract RWAStorage is Ownable {
    mapping(uint256 => string) public documentHashes;
    mapping(string => bool) public hashExists;
    
    event DocumentStored(uint256 indexed tokenId, string ipfsHash);
    event DocumentUpdated(uint256 indexed tokenId, string oldHash, string newHash);
    
    function storeDocument(uint256 tokenId, string memory ipfsHash) public onlyOwner {
        require(bytes(ipfsHash).length > 0, "Invalid IPFS hash");
        require(!hashExists[ipfsHash], "Hash already exists");
        
        string memory oldHash = documentHashes[tokenId];
        documentHashes[tokenId] = ipfsHash;
        hashExists[ipfsHash] = true;
        
        emit DocumentStored(tokenId, ipfsHash);
        if (bytes(oldHash).length > 0) {
            emit DocumentUpdated(tokenId, oldHash, ipfsHash);
        }
    }
    
    function getDocumentHash(uint256 tokenId) public view returns (string memory) {
        return documentHashes[tokenId];
    }
    
    function verifyDocument(string memory ipfsHash) public view returns (bool) {
        return hashExists[ipfsHash];
    }
}

// JavaScript Integration
const IPFS = require('ipfs-core');
const { create } = require('ipfs-http-client');

class IPFSManager {
    constructor() {
        this.ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
    }
    
    async uploadFile(file) {
        try {
            const result = await this.ipfs.add(file);
            return result.path;
        } catch (error) {
            console.error('Error uploading to IPFS:', error);
            throw error;
        }
    }
    
    async uploadJSON(data) {
        try {
            const jsonString = JSON.stringify(data);
            const result = await this.ipfs.add(jsonString);
            return result.path;
        } catch (error) {
            console.error('Error uploading JSON to IPFS:', error);
            throw error;
        }
    }
    
    async getFile(hash) {
        try {
            const chunks = [];
            for await (const chunk of this.ipfs.cat(hash)) {
                chunks.push(chunk);
            }
            return Buffer.concat(chunks);
        } catch (error) {
            console.error('Error retrieving from IPFS:', error);
            throw error;
        }
    }
    
    async pinFile(hash) {
        try {
            await this.ipfs.pin.add(hash);
            return true;
        } catch (error) {
            console.error('Error pinning file:', error);
            return false;
        }
    }
}

// Usage Example
async function storeRWADocument() {
    const ipfsManager = new IPFSManager();
    
    // Upload document
    const documentData = {
        title: "RWA Property Deed",
        description: "Legal document for property tokenization",
        owner: "0x123...",
        date: new Date().toISOString(),
        fileHash: "QmHash..."
    };
    
    const ipfsHash = await ipfsManager.uploadJSON(documentData);
    console.log('Document stored at:', ipfsHash);
    
    // Pin the file to ensure availability
    await ipfsManager.pinFile(ipfsHash);
    
    return ipfsHash;
}`

const advantages = [
  'Decentralized storage and resistant',
  'Very low cost',
  'Global and fast access',
  'Resistant to Censorship',
  'Full Transparency',
  'Capability Recovery Permanent',
  'No dependency on central server',
  'High Security'
]

const technicalSpecs = [
  {
    name: 'Content Addressing',
    description: 'Content-based addressing instead of location-based',
    benefit: 'Guarantees data integrity'
  },
  {
    name: 'Distributed Hash Table',
    description: 'Distributed hash table for finding data',
    benefit: 'Fast search execution'
  },
  {
    name: 'Merkle DAG',
    description: 'Merkle DAG for data structure',
    benefit: 'Guarantees integrity and optimization'
  },
  {
    name: 'BitSwap Protocol',
    description: 'Bitswap protocol for data transfer',
    benefit: 'Bandwidth optimization'
  }
]

export default function IPFSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/ipfs-storage.jpg"
            alt="IPFS - InterPlanetary File System"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-indigo-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>IPFS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              IPFS - InterPlanetary File System
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Decentralized and distributed storage system for storing and recovering data on a global network
            </p>
            
            <div className="flex flex-wrap items-center text-indigo-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Globe className="w-5 h-5 mr-2" />
                <span>Decentralized storage</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Shield className="w-5 h-5 mr-2" />
                <span>Resistant to Censorship</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Database className="w-5 h-5 mr-2" />
                <span>Permanent access</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is IPFS?</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    IPFS (InterPlanetary File System) is a peer-to-peer protocol and network for storing and 
                    sharing data in a distributed file system. Unlike HTTP which uses location-based 
                    addressing, IPFS uses content-based addressing.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This system is very useful for RWA projects as it enables secure and permanent storage of 
                    documents, certificates, and metadata related to real assets. IPFS guarantees 
                    that data is always accessible and censorship resistant.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Use Cases */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Use Cases in RWA</h2>
                  <div className="space-y-6">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.name}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {useCase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 ">
                              <CheckCircle className="w-4 h-4 text-indigo-500" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
                  <div className="space-y-6">
                    {technicalSpecs.map((spec, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.name}</h3>
                        <p className="text-gray-600 mb-2">{spec.description}</p>
                        <div className="bg-indigo-50 rounded-lg p-3">
                          <p className="text-sm text-indigo-800">
                            <strong>Advantage:</strong> {spec.benefit}
                          </p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of IPFS</h2>
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
                      <span className="font-semibold text-indigo-600">File System</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Architecture:</span>
                      <span className="font-semibold text-indigo-600">P2P</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Addressing:</span>
                      <span className="font-semibold text-indigo-600">Content-based</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-semibold text-indigo-600">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm text-gray-600">Decentralized</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm text-gray-600">Resistant to Censorship</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm text-gray-600">Low cost</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm text-gray-600">Permanent access</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      IPFS Official
                    </a>
                    <a href="https://docs.ipfs.io/" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      IPFS Documentation
                    </a>
                    <a href="https://github.com/ipfs/js-ipfs" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      IPFS JavaScript
                    </a>
                    <a href="https://infura.io/product/ipfs" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Infura IPFS
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need IPFS Storage?</h3>
                  <p className="text-indigo-100 mb-4">
                    Our expert team is ready to implement IPFS for RWA projects
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
