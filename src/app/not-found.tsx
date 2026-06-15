import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br [#080c14] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl font-bold text-white/20 mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-white text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Back to Home
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-400 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
