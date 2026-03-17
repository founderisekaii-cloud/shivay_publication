'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Search, Grid, List as ListIcon, CheckCircle, XCircle, Clock, MoreVertical, Edit2, ShieldAlert } from 'lucide-react';

// Mock data: A KanBan/Table view for Admin
const initialSubmissions = [
  { id: 'SUB-2025-081', title: 'Analysis of Neoclassical Architecture', author: 'Dr. Jane Doe', date: 'Oct 15, 2025', status: 'Pending Review', priority: 'High' },
  { id: 'SUB-2025-042', title: 'ML Models for Soil Prediction', author: 'Prof. S. Gupta', date: 'Jul 22, 2025', status: 'Approved', priority: 'Medium' },
  { id: 'SUB-2024-119', title: 'Ethical Dilemmas in AI', author: 'Dr. Emily Chen', date: 'Dec 05, 2024', status: 'Revisions Requested', priority: 'High' },
  { id: 'SUB-2024-044', title: 'Quantum Computing Horizons', author: 'Dr. Robert Smith', date: 'Jul 10, 2024', status: 'Rejected', priority: 'Low' },
  { id: 'SUB-2024-032', title: 'Sustainable Polymer Research', author: 'Prof. L. Kumar', date: 'Mar 15, 2024', status: 'Pending Review', priority: 'Medium' },
];

export default function AdminDashboard() {
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [search, setSearch] = useState('');
  
  const filteredSubs = initialSubmissions.filter(s => 
    s.id.toLowerCase().includes(search.toLowerCase()) || 
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.author.toLowerCase().includes(search.toLowerCase())
  );

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'High': return 'text-red-600 bg-red-50';
      case 'Medium': return 'text-orange-600 bg-orange-50';
      case 'Low': return 'text-green-600 bg-green-50';
    }
  };

  const KanbanColumn = ({ title, status }: { title: string, status: string }) => {
    const colSubs = filteredSubs.filter(s => s.status === status);
    
    return (
      <div className="bg-gray-50 rounded-xl p-4 min-h-[500px] border border-gray-200 flex flex-col">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300">
          <h3 className="font-bold text-primary font-serif">{title}</h3>
          <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">{colSubs.length}</span>
        </div>
        <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          {colSubs.map(sub => (
            <div key={sub.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{sub.id}</span>
                <button className="text-gray-400 hover:text-primary"><MoreVertical size={16} /></button>
              </div>
              <h4 className="font-bold text-sm text-primary mb-2 leading-snug">{sub.title}</h4>
              <p className="text-xs text-secondary mb-3">{sub.author}</p>
              <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-2">
                <span className="text-xs text-gray-400">{sub.date}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getPriorityColor(sub.priority)}`}>
                  {sub.priority}
                </span>
              </div>
            </div>
          ))}
          {colSubs.length === 0 && (
            <div className="text-center text-sm text-gray-400 py-8 italic border-2 border-dashed border-gray-200 rounded-lg">
              No submissions here.
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-28">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 bg-primary text-white p-8 rounded-2xl shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="text-gold" size={24} />
              <h1 className="text-3xl font-serif font-bold">Admin Workspace</h1>
            </div>
            <p className="text-gray-300 text-sm">Review, approve, and track manuscript submission pipelines.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search SUB-ID, Title, or Author..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-primary-dark/50 border border-gray-600 focus:border-gold rounded-lg focus:outline-none focus:ring-1 focus:ring-gold transition-all text-sm text-white placeholder-gray-400"
              />
            </div>
            <div className="flex bg-primary-dark/30 rounded-lg p-1 border border-gray-600">
              <button 
                onClick={() => setViewMode('kanban')}
                className={`p-2 rounded flex items-center gap-2 transition-colors ${viewMode === 'kanban' ? 'bg-gold text-primary font-bold shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                <Grid size={18} /> <span className="text-sm hidden sm:inline">Kanban</span>
              </button>
              <button 
                onClick={() => setViewMode('table')}
                className={`p-2 rounded flex items-center gap-2 transition-colors ${viewMode === 'table' ? 'bg-gold text-primary font-bold shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                <ListIcon size={18} /> <span className="text-sm hidden sm:inline">Table</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* View Mode Toggle */}
        <AnimatedSection delay={0.1}>
          {viewMode === 'kanban' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KanbanColumn title="Pending Review" status="Pending Review" />
              <KanbanColumn title="Revisions Requested" status="Revisions Requested" />
              <KanbanColumn title="Approved for Publishing" status="Approved" />
              <KanbanColumn title="Rejected" status="Rejected" />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-bold">Manuscript ID</th>
                      <th className="px-6 py-4 font-bold">Title</th>
                      <th className="px-6 py-4 font-bold">Author</th>
                      <th className="px-6 py-4 font-bold">Date Submitted</th>
                      <th className="px-6 py-4 font-bold">Priority</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                      <th className="px-6 py-4 font-bold text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredSubs.map((sub) => (
                      <tr key={sub.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap"><span className="font-mono text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">{sub.id}</span></td>
                        <td className="px-6 py-4"><span className="text-sm font-semibold text-primary line-clamp-2 leading-tight">{sub.title}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-700">{sub.author}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="text-sm text-gray-500">{sub.date}</span></td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${getPriorityColor(sub.priority)}`}>
                            {sub.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center w-max gap-1.5 
                            ${sub.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                              sub.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                              sub.status === 'Revisions Requested' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'}`}
                           >
                            {sub.status === 'Approved' ? <CheckCircle size={14} /> : 
                             sub.status === 'Rejected' ? <XCircle size={14} /> : 
                             sub.status === 'Pending Review' ? <Clock size={14} /> : <ShieldAlert size={14}/>}
                            {sub.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex justify-center flex-row gap-2">
                            <Link href={`/pdf/${sub.id}`} className="p-2 text-primary hover:text-gold hover:bg-gold/10 rounded-lg transition-colors border border-transparent hover:border-gold/20" title="Review PDF">
                              <Search size={16} />
                            </Link>
                            <button className="p-2 text-primary hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200" title="Update Status">
                              <Edit2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filteredSubs.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-12 text-center text-gray-500 italic">
                          No matching submissions found in table.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </AnimatedSection>

      </div>
    </div>
  );
}
