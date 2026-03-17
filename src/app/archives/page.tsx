'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Search, Filter, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Mock data: A robust architecture would fetch this from Supabase in a server component
const MOCK_ARCHIVES = [
  { id: '10.1234/shivay.2025.101', title: 'Deep Learning in Predictive Medicine: A Meta-Analysis', authors: 'Dr. Sarah Jenkins, Prof. Ananya Sharma', date: 'Oct 2025', volume: '11', issue: '4' },
  { id: '10.1234/shivay.2025.098', title: 'Quantum Encryption Algorithms for Post-RSA Security', authors: 'Michael Chen, Elena Rostok', date: 'Sep 2025', volume: '11', issue: '3' },
  { id: '10.1234/shivay.2025.044', title: 'Sustainable Infrastructure Materials in Developing Nations', authors: 'Rajiv Gandhi Inst. of Tech', date: 'Jul 2025', volume: '11', issue: '2' },
  { id: '10.1234/shivay.2024.112', title: 'Behavioral Economics of Digital Currency Adoption', authors: 'Dr. Linda Huang', date: 'Dec 2024', volume: '10', issue: '4' },
  { id: '10.1234/shivay.2024.089', title: 'CRISPR Cas9 Efficacy in Agricultural Biotech', authors: 'Prof. John Doe', date: 'Aug 2024', volume: '10', issue: '3' },
];

export default function ArchivesPage() {
  const [search, setSearch] = useState('');

  const filteredArchives = MOCK_ARCHIVES.filter(paper => 
    paper.title.toLowerCase().includes(search.toLowerCase()) || 
    paper.authors.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Journal Archives</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse our comprehensive database of high-quality, peer-reviewed research papers and publications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <AnimatedSection>
          {/* Search Bar */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by title, author, or keyword..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all"
              />
            </div>
            <button className="flex items-center gap-2 justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-primary transition-colors">
              <Filter size={18} /> Filters
            </button>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
             
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary text-white font-serif tracking-wider text-sm uppercase">
                  <tr>
                    <th className="px-6 py-4">Title & Authors</th>
                    <th className="px-6 py-4">Details</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredArchives.map((paper, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5">
                        <div className="font-bold text-primary text-lg mb-1">{paper.title}</div>
                        <div className="text-sm text-gray-500">{paper.authors}</div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <div className="text-sm font-semibold text-secondary">Vol. {paper.volume}, Issue {paper.issue}</div>
                        <div className="text-xs text-gray-400 mt-1">{paper.date}</div>
                        <div className="text-xs text-gold font-mono mt-1">DOI: {paper.id}</div>
                      </td>
                      <td className="px-6 py-5 text-center align-middle">
                        <div className="flex items-center justify-center gap-3">
                          <Link href={`/pdf/${encodeURIComponent(paper.id)}`} className="p-2 text-primary hover:text-gold hover:bg-gold/10 rounded-full transition-colors" title="View PDF">
                            <ExternalLink size={20} />
                          </Link>
                          <button className="p-2 text-primary hover:text-gold hover:bg-gold/10 rounded-full transition-colors" title="Download">
                            <Download size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredArchives.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                        No publications matched your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
