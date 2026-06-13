import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, CheckCircle, ArrowRight, ExternalLink, Shield, Users, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Multi-Signature - Multi-signature Wallet | Cirrariq',
  description: 'Complete guide to multi-signature wallets for high-security transactions. Features, benefits, types, and implementation.',
  keywords: 'multi-signature,multisig,multi-signature wallet,blockchain security,secure transactions,asset management',
  openGraph: {
    title: 'Multi-Signature - Multi-signature Wallet',
    description: 'Complete guide to multi-signature wallets for high-security transactions.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Cirrariq',
    images: [
      {
        url: '/images/technology/multi-signature-security.jpg',
        width: 1200,
        height: 630,
        alt: 'Multi-Signature - Multi-signature Wallet',
      },
    ],
  },
}

const features = [
  {
    icon: Shield,
    title: 'High Security',
    description: 'Requires multiple signatures to approve transactions'
  },
  {
    icon: Users,
    title: 'Distributed management',
    description: 'Control by multiple parties instead of one'
  },
  {
    icon: Key,
    title: 'Threshold Control',
    description: 'Capability to configure the required number of signatures'
  },
  {
    icon: Lock,
    title: 'Hack Protection',
    description: 'Protection against attacks and unauthorized access'
  }
]

const multisigTypes = [
  {
    name: '2-of-3 Multisig',
    description: 'Requires 2 signatures out of 3 signers',
    features: ['Balance between security and efficiency', 'Suitable for small teams', 'Fast Execution', 'Appropriate control'],
    useCase: 'Suitable for startups and small teams'
  },
  {
    name: '3-of-5 Multisig',
    description: 'Requires 3 signatures out of 5 signers',
    features: ['Higher security', 'Flexibility in member absence', 'Better control', 'Single point of failure resistant'],
    useCase: 'Suitable for medium-sized companies'
  },
  {
    name: '5-of-9 Multisig',
    description: 'Requires 5 signatures out of 9 signers',
    features: ['Very high security', 'Complete control', 'Attack resistant', 'Complex management'],
    useCase: 'Suitable for large and critical organizations'
  }
]

const codeExample = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MultiSigWallet {
    address[] public owners;
    uint256 public required;
    uint256 public transactionCount;
    
    struct Transaction {
        address to;
        uint256 value;
        bytes data;
        bool executed;
        uint256 confirmations;
    }
    
    mapping(uint256 => Transaction) public transactions;
    mapping(uint256 => mapping(address => bool)) public confirmations;
    mapping(address => bool) public isOwner;
    
    event Confirmation(address indexed sender, uint256 indexed transactionId);
    event Revocation(address indexed sender, uint256 indexed transactionId);
    event Submission(uint256 indexed transactionId);
    event Execution(uint256 indexed transactionId);
    event ExecutionFailure(uint256 indexed transactionId);
    event Deposit(address indexed sender, uint256 value);
    event OwnerAddition(address indexed owner);
    event OwnerRemoval(address indexed owner);
    event RequirementChange(uint256 required);
    
    modifier onlyWallet() {
        require(msg.sender == address(this), "Only wallet can call this");
        _;
    }
    
    modifier ownerDoesNotExist(address owner) {
        require(!isOwner[owner], "Owner already exists");
        _;
    }
    
    modifier ownerExists(address owner) {
        require(isOwner[owner], "Owner does not exist");
        _;
    }
    
    modifier confirmed(uint256 transactionId, address owner) {
        require(confirmations[transactionId][owner], "Transaction not confirmed");
        _;
    }
    
    modifier notConfirmed(uint256 transactionId, address owner) {
        require(!confirmations[transactionId][owner], "Transaction already confirmed");
        _;
    }
    
    modifier notExecuted(uint256 transactionId) {
        require(!transactions[transactionId].executed, "Transaction already executed");
        _;
    }
    
    modifier notNull(address _address) {
        require(_address != address(0), "Address cannot be null");
        _;
    }
    
    modifier validRequirement(uint256 ownerCount, uint256 _required) {
        require(ownerCount <= 10 && _required <= ownerCount && _required != 0 && ownerCount != 0, "Invalid requirement");
        _;
    }
    
    constructor(address[] memory _owners, uint256 _required) validRequirement(_owners.length, _required) {
        for (uint256 i = 0; i < _owners.length; i++) {
            require(!isOwner[_owners[i]] && _owners[i] != address(0), "Invalid owner");
            isOwner[_owners[i]] = true;
        }
        owners = _owners;
        required = _required;
    }
    
    receive() external payable {
        if (msg.value > 0) emit Deposit(msg.sender, msg.value);
    }
    
    function addOwner(address owner) public onlyWallet ownerDoesNotExist(owner) notNull(owner) validRequirement(owners.length + 1, required) {
        isOwner[owner] = true;
        owners.push(owner);
        emit OwnerAddition(owner);
    }
    
    function removeOwner(address owner) public onlyWallet ownerExists(owner) {
        isOwner[owner] = false;
        for (uint256 i = 0; i < owners.length - 1; i++) {
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                break;
            }
        }
        owners.pop();
        if (required > owners.length) changeRequirement(owners.length);
        emit OwnerRemoval(owner);
    }
    
    function replaceOwner(address owner, address newOwner) public onlyWallet ownerExists(owner) ownerDoesNotExist(newOwner) {
        for (uint256 i = 0; i < owners.length; i++) {
            if (owners[i] == owner) {
                owners[i] = newOwner;
                break;
            }
        }
        isOwner[owner] = false;
        isOwner[newOwner] = true;
        emit OwnerRemoval(owner);
        emit OwnerAddition(newOwner);
    }
    
    function changeRequirement(uint256 _required) public onlyWallet validRequirement(owners.length, _required) {
        required = _required;
        emit RequirementChange(_required);
    }
    
    function submitTransaction(address destination, uint256 value, bytes memory data) public returns (uint256 transactionId) {
        transactionId = addTransaction(destination, value, data);
        confirmTransaction(transactionId);
    }
    
    function confirmTransaction(uint256 transactionId) public ownerExists(msg.sender) notConfirmed(transactionId, msg.sender) {
        confirmations[transactionId][msg.sender] = true;
        emit Confirmation(msg.sender, transactionId);
        executeTransaction(transactionId);
    }
    
    function revokeConfirmation(uint256 transactionId) public ownerExists(msg.sender) confirmed(transactionId, msg.sender) notExecuted(transactionId) {
        confirmations[transactionId][msg.sender] = false;
        emit Revocation(msg.sender, transactionId);
    }
    
    function executeTransaction(uint256 transactionId) public ownerExists(msg.sender) confirmed(transactionId, msg.sender) notExecuted(transactionId) {
        if (isConfirmed(transactionId)) {
            Transaction storage txn = transactions[transactionId];
            txn.executed = true;
            if (external_call(txn.to, txn.value, txn.data.length, txn.data)) {
                emit Execution(transactionId);
            } else {
                emit ExecutionFailure(transactionId);
                txn.executed = false;
            }
        }
    }
    
    function isConfirmed(uint256 transactionId) public view returns (bool) {
        uint256 count = 0;
        for (uint256 i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]]) count += 1;
            if (count == required) return true;
        }
        return false;
    }
    
    function addTransaction(address destination, uint256 value, bytes memory data) internal notNull(destination) returns (uint256 transactionId) {
        transactionId = transactionCount;
        transactions[transactionId] = Transaction({
            to: destination,
            value: value,
            data: data,
            executed: false,
            confirmations: 0
        });
        transactionCount += 1;
        emit Submission(transactionId);
    }
    
    function getConfirmationCount(uint256 transactionId) public view returns (uint256 count) {
        for (uint256 i = 0; i < owners.length; i++) {
            if (confirmations[transactionId][owners[i]]) count += 1;
        }
    }
    
    function getTransactionCount(bool pending, bool executed) public view returns (uint256 count) {
        for (uint256 i = 0; i < transactionCount; i++) {
            if (pending && !transactions[i].executed || executed && transactions[i].executed) count += 1;
        }
    }
    
    function getOwners() public view returns (address[] memory) {
        return owners;
    }
    
    function getTransactionIds(uint256 from, uint256 to, bool pending, bool executed) public view returns (uint256[] memory _transactionIds) {
        uint256[] memory transactionIdsTemp = new uint256[](transactionCount);
        uint256 count = 0;
        uint256 i;
        for (i = 0; i < transactionCount; i++) {
            if (pending && !transactions[i].executed || executed && transactions[i].executed) {
                transactionIdsTemp[count] = i;
                count += 1;
            }
        }
        _transactionIds = new uint256[](to - from);
        for (i = from; i < to; i++) {
            _transactionIds[i - from] = transactionIdsTemp[i];
        }
    }
    
    function external_call(address destination, uint256 value, uint256 dataLength, bytes memory data) internal returns (bool) {
        bool result;
        assembly {
            let x := mload(0x40)
            let d := add(data, 32)
            result := call(
                sub(gas(), 34710),
                destination,
                value,
                d,
                dataLength,
                x,
                0
            )
        }
        return result;
    }
}`

const securityFeatures = [
  'Multi-factor identity verification',
  'Advanced access control',
  'Attack resistant',
  'Automated backup',
  'Timing control',
  'Applying restrictions',
  'Continuous monitoring',
  'Reporting Complete'
]

const advantages = [
  'Very high security',
  'Distributed control',
  'Resistant to single point of failure',
  'Full Transparency',
  'Capability Recovery',
  'Accurate transaction control',
  'Compliance with laws',
  'Flexible configuration capability'
]

export default function MultiSignaturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/technology/multi-signature-security.jpg"
            alt="Multi-Signature - Multi-signature Wallet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-pink-900/90 to-purple-900/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6 text-red-100">
              <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
              <span>/</span>
              <span>Multi-Signature</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Multi-Signature - Multi-signature Wallet
            </h1>
            
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Advanced security system for protecting digital assets requiring multiple signatures to approve transactions
            </p>
            
            <div className="flex flex-wrap items-center text-red-200 text-sm md:text-base">
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Lock className="w-5 h-5 mr-2" />
                <span>High Security</span>
              </div>
              <div className="flex items-center mr-6 mb-2 md:mb-0">
                <Users className="w-5 h-5 mr-2" />
                <span>Distributed management</span>
              </div>
              <div className="flex items-center mb-2 md:mb-0">
                <Key className="w-5 h-5 mr-2" />
                <span>Threshold control</span>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Multi-Signature?</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Multi-Signature (Multisig) is an advanced security system on the blockchain that requires multiple signatures 
                    to approve and execute transactions. Unlike regular wallets controlled by a single private key, 
                    multi-signature wallets require approval from multiple parties.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This system is especially important for RWA projects that deal with valuable assets. 
                    Multi-Signature protects assets against hacks, theft, and unauthorized access, and enables 
                    distributed control.
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 ">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
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

                {/* Multisig Types */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Types Multi-Signature</h2>
                  <div className="space-y-6">
                    {multisigTypes.map((type, index) => (
                      <div key={index} className="border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {type.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2 ">
                                <CheckCircle className="w-4 h-4 text-red-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <p className="text-sm text-red-800">
                            <strong>Use Cases:</strong> {type.useCase}
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

                {/* Security Features */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 ">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advantages */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits of Multi-Signature</h2>
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
                      <span className="font-semibold text-red-600">Security</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Signatures:</span>
                      <span className="font-semibold text-red-600">Multiple</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Control:</span>
                      <span className="font-semibold text-red-600">distributed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security:</span>
                      <span className="font-semibold text-red-600">Very High</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">High Security</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Distributed control</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Resistant to Hack</span>
                    </div>
                    <div className="flex items-center space-x-2 ">
                      <CheckCircle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Full Transparency</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    <a href="https://gnosis-safe.io/" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Gnosis Safe
                    </a>
                    <a href="https://docs.gnosis-safe.io/" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Gnosis Safe Docs
                    </a>
                    <a href="https://github.com/gnosis/safe-contracts" target="_blank" rel="noopener noreferrer" className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Safe Contracts
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Need Multi-Signature?</h3>
                  <p className="text-red-100 mb-4">
                    Our expert team is ready to implement multi-signature wallets for RWA projects
                  </p>
                  <Link href="/contact" className="inline-flex items-center bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
