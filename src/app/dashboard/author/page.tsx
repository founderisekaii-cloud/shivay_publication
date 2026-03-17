'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/services/auth.service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { DbService } from '@/services/db.service';
import { ExternalLink, FileText, PlusCircle, CheckCircle, Clock, AlertCircle, LogOut } from 'lucide-react';

export default function AuthorDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<string[][]>([]);

  useEffect(() => {
    const checkUserAndFetch = async () => {
      try {
        const currentUser = await AuthService.getUser();
        if (!currentUser) {
          router.push('/login');
          return;
        }
        setUser(currentUser);
        
        // Fetch raw data from Google Sheet Web App
        const allData = await DbService.getAll();
        // Filter out only the rows belonging to this user's email
        const userSubs = allData.filter((row: string[]) => row[2] === currentUser.email);
        
        setSubmissions(userSubs.reverse()); // Show newest first
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserAndFetch();
  }, [router]);

  const handleLogout = async () => {
    await AuthService.signOut();
    router.push('/login');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="text-green-500" size={20} />;
      case 'Pending Review': return <Clock className="text-blue-500" size={20} />;
      case 'Revisions Requested': return <AlertCircle className="text-orange-500" size={20} />;
      case 'Rejected': return <AlertCircle className="text-red-500" size={20} />;
      default: return <FileText className="text-gray-500" size={20} />;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending Review': return 'bg-blue-100 text-blue-800';
      case 'Revisions Requested': return 'bg-orange-100 text-orange-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const pubCount = submissions.filter(s => s[6] === 'Approved').length;
  const pendingCount = submissions.filter(s => s[6] === 'Pending Review').length;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div></div>;
  }

  return (
    <div className="min-h-screen bg-background pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary">Author Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {user?.user_metadata?.full_name || user?.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/submit" className="flex items-center gap-2 px-5 py-2.5 bg-gold text-primary font-bold rounded shadow hover:bg-yellow-400 transition-colors">
              <PlusCircle size={20} /> New Submission
            </Link>
            <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded shadow hover:bg-gray-50 transition-colors">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar / Stats */}
          <AnimatedSection delay={0.1} className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-sm font-bold tracking-wider text-gray-500 uppercase mb-4">Your Activity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Submissions</span>
                  <span className="text-xl font-bold text-primary">{submissions.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Published</span>
                  <span className="text-xl font-bold text-green-600">{pubCount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Review</span>
                  <span className="text-xl font-bold text-blue-600">{pendingCount}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-xl shadow-md">
              <h3 className="font-serif font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm text-gray-300 mb-4">Our editorial team is available to assist you with manuscript formatting.</p>
              <Link href="/contact" className="text-sm font-bold text-gold hover:text-white transition-colors">Contact Support &rarr;</Link>
            </div>
          </AnimatedSection>

          {/* Main Content / Paper List */}
          <AnimatedSection delay={0.2} className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-primary">My Manuscripts</h2>
              </div>
              <ul className="divide-y divide-gray-100">
                {submissions.map((sub) => (
                  <li key={sub[0]} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-grow">
                         <div className="flex items-center gap-3 mb-2">
                           <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{sub[0]}</span>
                           <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${getStatusClass(sub[6])}`}>
                             {getStatusIcon(sub[6])} {sub[6]}
                           </span>
                         </div>
                         <h3 className="text-lg font-bold text-primary mb-1">{sub[4]}</h3>
                         <div className="text-sm text-gray-500 flex flex-wrap gap-x-4 gap-y-2">
                            <span>Submitted: {sub[1].split(',')[0]}</span>
                         </div>
                      </div>
                      <div className="flex-shrink-0 flex gap-3">
                        {sub[8] ? (
                          <Link href={sub[8]} target="_blank" className="px-4 py-2 bg-primary text-white text-sm font-bold flex items-center gap-2 rounded shadow hover:bg-primary-dark transition-colors">
                            <ExternalLink size={16} /> View Final Proof
                          </Link>
                        ) : sub[6] === 'Revisions Requested' ? (
                          <button className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded shadow hover:bg-orange-600 transition-colors">
                            Submit Revision
                          </button>
                        ) : (
                           <button className="px-4 py-2 border border-gray-200 text-sm font-bold text-gray-500 hover:bg-gray-50 rounded transition-colors cursor-default">
                            {sub[6] === 'Pending Review' ? 'In Pipeline' : 'See Details'}
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
                {submissions.length === 0 && (
                  <div className="p-10 text-center text-gray-500">
                     No manuscripts submitted yet. Click &quot;New Submission&quot; to begin.
                  </div>
                )}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
