import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI Money Machine</h1>
          <p className="text-xl text-slate-300 mb-8">
            AI-Powered Personal Finance App for Financial Crisis Management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Project Overview */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-slate-300 mb-6">
              A comprehensive AI-powered personal finance application designed specifically 
              for recently laid-off individuals who need to access 401K funds strategically 
              while continuing to build wealth through micro-investing and community support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Crisis-first design approach
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                AI-powered financial guidance
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Community support network
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                Micro-investing platform
              </div>
            </div>
          </div>

          {/* PRD Details */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4">Product Requirements</h2>
            <p className="text-slate-300 mb-6">
              Our PRD focuses on helping recently laid-off individuals navigate 
              financial crisis while preserving and building wealth through AI-powered guidance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                401K emergency calculator with real-time calculations
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                AI financial crisis coach with emotional support
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Micro-investing platform for continued wealth building
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Community support network for similar experiences
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Crisis-First Design</h3>
              <p className="text-slate-300 text-sm">
                Immediate value delivery for users in financial crisis situations
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Guidance</h3>
              <p className="text-slate-300 text-sm">
                Personalized financial coaching with emotional support
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
              <p className="text-slate-300 text-sm">
                Comprehensive financial planning and wealth building strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}