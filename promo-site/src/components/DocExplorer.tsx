'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocMetadata } from '@/lib/docs';
import MarkdownRenderer from './MarkdownRenderer';
import { ChevronRight, FileText, Search, X } from 'lucide-react';

interface DocExplorerProps {
  docs: DocMetadata[];
  initialDocContent?: string;
  initialDocPath?: string;
}

export default function DocExplorer({ docs, initialDocContent, initialDocPath }: DocExplorerProps) {
  const [selectedDocPath, setSelectedDocPath] = useState(initialDocPath || 'README.md');
  const [content, setContent] = useState(initialDocContent || '');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(docs.map(d => d.category)));

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fetchDoc = async (path: string) => {
    setIsLoading(true);
    setSelectedDocPath(path);
    try {
      const res = await fetch(`/api/docs?path=${encodeURIComponent(path)}`);
      const data = await res.json();
      setContent(data.content);
    } catch (error) {
      console.error('Failed to fetch doc:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="docs" className="py-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Project Documentation
        </h2>
        <p className="text-gray-400 text-lg">
          Explore the full strategic, technical, and business framework of BIOMAX AI.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 bg-glass rounded-3xl overflow-hidden min-h-[800px] border border-white/10">
        {/* Sidebar */}
        <div className="w-full lg:w-80 border-r border-white/10 bg-black/20 p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          <div className="space-y-8 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
            {categories.map(category => {
              const categoryDocs = filteredDocs.filter(d => d.category === category);
              if (categoryDocs.length === 0) return null;

              return (
                <div key={category}>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 px-2">
                    {category}
                  </h4>
                  <div className="space-y-1">
                    {categoryDocs.map(doc => (
                      <button
                        key={doc.path}
                        onClick={() => fetchDoc(doc.path)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-3 group ${
                          selectedDocPath === doc.path 
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <FileText className={`w-4 h-4 ${selectedDocPath === doc.path ? 'text-cyan-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                        <span className="truncate">{doc.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[800px] custom-scrollbar bg-black/10">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center h-full"
              >
                <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key={selectedDocPath}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <MarkdownRenderer content={content} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
