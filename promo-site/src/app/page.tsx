import { getAllDocs, getDocByPath } from '@/lib/docs';
import AgentGrid from '@/components/AgentGrid';
import DocExplorer from '@/components/DocExplorer';
import TechStack from '@/components/TechStack';
import { Shield, Zap, Globe, Database, Cpu } from 'lucide-react';

export default async function Home() {
  const docs = getAllDocs();
  const readmeDoc = getDocByPath('README.md');

  return (
    <main className="min-h-screen bg-gradient-mesh">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-8">
            <Zap className="w-3 h-3" />
            Project Discovery Phase Complete
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            BIOMAX <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">AI v2.0</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Personal Health Operating System. A multi-agent platform for health management with 15 specialized AI agents and 100+ integrations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a href="#docs" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-400 transition-colors">
              Explore Documentation
            </a>
            <a href="#agents" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              Meet the Agents
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
            <div>
              <div className="text-3xl font-bold text-white mb-1">15</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">AI Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">218</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Requirements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">152-FZ</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-3xl bg-glass">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Multi-Agent RAG</h3>
            <p className="text-gray-400 leading-relaxed">
              Custom RAG pipeline indexing user research, blood tests, and protocols to provide hyper-personalized health insights.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-glass">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Database className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">100+ Data Sources</h3>
            <p className="text-gray-400 leading-relaxed">
              Seamlessly integrates with Oura, Apple Health, lab reports (Invitro, Helix), and genetic data (23andMe).
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-glass">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-cyan-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Secure & Compliant</h3>
            <p className="text-gray-400 leading-relaxed">
              Built with 152-FZ compliance at its core, ensuring personal health data remains private and securely stored in Russia.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <div id="agents">
        <AgentGrid />
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Documentation Section */}
      <DocExplorer 
        docs={docs} 
        initialDocContent={readmeDoc?.content || ''} 
        initialDocPath="README.md"
      />

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-2xl font-black mb-4">BIOMAX AI</div>
          <p className="text-gray-500 mb-8">© 2026 Personal Health Operating System. MIT License.</p>
          <div className="flex justify-center gap-6">
            <span className="text-xs text-green-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Discovery Phase Complete
            </span>
            <span className="text-xs text-blue-400 flex items-center gap-2">
              <Globe className="w-3 h-3" />
              Localized for Russia
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
