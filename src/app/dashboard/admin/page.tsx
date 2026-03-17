'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Search, Grid, List as ListIcon, CheckCircle, XCircle, Clock, ExternalLink, Edit2, ShieldAlert, Save, Loader2, LogOut } from 'lucide-react';
import { DbService } from '@/services/db.service';

// [ID, Date, Email, Authors, Title, Journal, Status, DriveFileUrl, ApprovedShareLink]
type SubmissionRow = string[];

export default function AdminDashboard() {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('table');
  const [search, setSearch] = useState('');
  const [submissions, setSubmissions] = useState<SubmissionRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Edit State
  const [editStatus, setEditStatus] = useState('Pending Review');
  const [editLink, setEditLink] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // 1. Verify Admin Access manually
    if (typeof window !== 'undefined') {
      const access = localStorage.getItem('shivay_admin_access');
      if (access !== 'granted') {
        router.push('/login');
        return;
      }
    }

    // 2. Fetch all Google Sheet Rows
    const fetchSubmissions = async () => {
      try {
        const data = await DbService.getAll();
        setSubmissions(data);
      } catch (err: any) {
        setError("Could not load submissions. Please check your Apps Script URL configuration.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchSubmissions();
  }, [router]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('shivay_admin_access');
    }
    router.push('/login');
  };

  const handleEditClick = (sub: SubmissionRow) => {
    setEditingId(sub[0]);
    setEditStatus(sub[6]);
    setEditLink(sub[8] || '');
  };

  const handleSaveClick = async (idTag: string) => {
    setIsSaving(true);
    try {
      await DbService.updateStatus(idTag, editStatus, editLink);
      // Optimistically update local state
      setSubmissions(prev => prev.map(row => {
        if (row[0] === idTag) {
          const newRow = [...row];
          newRow[6] = editStatus;
          newRow[8] = editLink;
          return newRow;
        }
        return row;
      }));
      setEditingId(null);
    } catch (err) {
      alert("Failed to update status. " + err);
    } finally {
      setIsSaving(false);
    }
  };

  const filteredSubs = submissions.filter(s => 
    (s[0] || '').toLowerCase().includes(search.toLowerCase()) || 
    (s[4] || '').toLowerCase().includes(search.toLowerCase()) ||
    (s[3] || '').toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Revisions Requested': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const KanbanColumn = ({ title, statusFilter }: { title: string, statusFilter: string }) => {
    const colSubs = filteredSubs.filter(s => s[6] === statusFilter);
    return (
      <div className="bg-gray-50 rounded-xl p-4 min-h-[500px] border border-gray-200 flex flex-col">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-300">
          <h3 className="font-bold text-primary font-serif">{title}</h3>
          <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">{colSubs.length}</span>
        </div>
        <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
          {colSubs.map(sub => (
            <div key={sub[0]} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer" onClick={() => handleEditClick(sub)}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{sub[0]}</span>
              </div>
              <h4 className="font-bold text-sm text-primary mb-2 leading-snug">{sub[4]}</h4>
              <p className="text-xs text-secondary mb-3">{sub[3]}</p>
              <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-2">
                <span className="text-[10px] text-gray-400">{sub[1]}</span>
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

  if (loading) return <div className="min-h-screen flex justify-center items-center"><Loader2 className="animate-spin text-gold" size={48} /></div>;

  return (
    <div className="min-h-screen bg-background pb-20 pt-28">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 bg-primary text-white p-8 rounded-2xl shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="text-gold" size={24} />
              <h1 className="text-3xl font-serif font-bold">Admin Workspace</h1>
            </div>
            <p className="text-gray-300 text-sm">Review Google Drive uploads, approve manuscripts, and push share links.</p>
          </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border border-red-400 text-red-100 hover:bg-red-500 hover:text-white rounded-lg transition-colors font-bold text-sm shadow-sm"
              >
                <LogOut size={16} /> Logout
              </button>
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
              <button onClick={() => setViewMode('kanban')} className={`p-2 rounded flex items-center gap-2 transition-colors ${viewMode === 'kanban' ? 'bg-gold text-primary font-bold shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                <Grid size={18} /> <span className="text-sm hidden sm:inline">Kanban</span>
              </button>
              <button onClick={() => setViewMode('table')} className={`p-2 rounded flex items-center gap-2 transition-colors ${viewMode === 'table' ? 'bg-gold text-primary font-bold shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                <ListIcon size={18} /> <span className="text-sm hidden sm:inline">Table</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg flex items-center gap-3">
              <ShieldAlert size={20} />
              <div className="text-sm font-semibold">{error}</div>
            </div>
        )}

        {/* View Mode Toggle */}
        <AnimatedSection delay={0.1}>
          {viewMode === 'kanban' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <KanbanColumn title="Pending Review" statusFilter="Pending Review" />
              <KanbanColumn title="Revisions Requested" statusFilter="Revisions Requested" />
              <KanbanColumn title="Approved for Publishing" statusFilter="Approved" />
              <KanbanColumn title="Rejected" statusFilter="Rejected" />
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-bold">Manuscript ID</th>
                      <th className="px-6 py-4 font-bold max-w-[200px]">Title</th>
                      <th className="px-6 py-4 font-bold">Author</th>
                      <th className="px-6 py-4 font-bold">Submitted</th>
                      <th className="px-6 py-4 font-bold">Status</th>
                      <th className="px-6 py-4 font-bold">Final Links</th>
                      <th className="px-6 py-4 font-bold text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredSubs.map((sub) => {
                      const isEditing = editingId === sub[0];
                      
                      return (
                      <tr key={sub[0]} className={`hover:bg-gray-50/50 transition-colors ${isEditing ? 'bg-blue-50/30' : ''}`}>
                        <td className="px-6 py-4"><span className="font-mono text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">{sub[0]}</span></td>
                        <td className="px-6 py-4 max-w-[200px]"><span className="text-sm font-semibold text-primary line-clamp-2 leading-tight" title={sub[4]}>{sub[4]}</span></td>
                        <td className="px-6 py-4 w-[150px]"><span className="text-sm text-gray-700 block truncate">{sub[3]}</span></td>
                        <td className="px-6 py-4"><span className="text-xs text-gray-500">{sub[1].split(',')[0]}</span></td>
                        
                        {/* Status Column */}
                        <td className="px-6 py-4">
                          {isEditing ? (
                             <select className="w-full p-2 border border-blue-300 rounded text-xs font-semibold focus:ring-1 focus:ring-blue-500" value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
                               <option value="Pending Review">Pending Review</option>
                               <option value="Approved">Approved</option>
                               <option value="Revisions Requested">Revisions Requested</option>
                               <option value="Rejected">Rejected</option>
                             </select>
                          ) : (
                            <span className={`text-xs font-bold px-3 py-1 rounded-full flex items-center w-max gap-1.5 ${getStatusColor(sub[6] || 'Pending Review')}`}>
                              {sub[6] === 'Approved' ? <CheckCircle size={14} /> : sub[6] === 'Rejected' ? <XCircle size={14} /> : sub[6] === 'Pending Review' ? <Clock size={14} /> : <ShieldAlert size={14}/>}
                              {sub[6] || 'Pending Review'}
                            </span>
                          )}
                        </td>

                        {/* Link Column */}
                        <td className="px-6 py-4">
                           {isEditing ? (
                             <input type="text" placeholder="Paste Public PDF Link" className="w-[180px] p-2 border border-blue-300 rounded text-xs focus:ring-1 focus:ring-blue-500" value={editLink} onChange={(e) => setEditLink(e.target.value)} />
                           ) : (
                             sub[8] ? <Link href={sub[8]} target="_blank" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"><ExternalLink size={12}/> View Final</Link> : <span className="text-xs italic text-gray-400">Not provided</span>
                           )}
                        </td>

                        {/* Action Column */}
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center flex-row gap-2">
                            {/* Original Drive Link */}
                            {sub[7] && (
                              <Link href={sub[7]} target="_blank" className="p-2 text-primary hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors border border-transparent hover:border-green-200" title="Download Raw Upload">
                                <ExternalLink size={16} />
                              </Link>
                            )}
                            
                            {/* Edit Toggle */}
                            {isEditing ? (
                               <button disabled={isSaving} onClick={() => handleSaveClick(sub[0])} className="p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm disabled:opacity-50" title="Save Changes">
                                {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                               </button>
                            ) : (
                              <button onClick={() => handleEditClick(sub)} className="p-2 text-primary hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-200" title="Edit Status">
                                <Edit2 size={16} />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    )})}
                    {filteredSubs.length === 0 && !loading && (
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
