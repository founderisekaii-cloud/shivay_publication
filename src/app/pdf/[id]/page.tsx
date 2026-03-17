'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Download, ArrowLeft, Share2, Printer } from 'lucide-react';

export default function PDFViewerPage() {
  const params = useParams();
  const id = params.id as string;
  const decodedId = decodeURIComponent(id);

  // In a real app, this would fetch the actual PDF URL from Supabase using the ID
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching pdf url securely
    setTimeout(() => {
      // Using a placeholder academic PDF for demonstration
      setPdfUrl('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf');
      setLoading(false);
    }, 1000);
  }, [decodedId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
      {/* Top action bar */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-20 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/archives" className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-sm font-bold text-primary truncate max-w-[200px] sm:max-w-md">Document: {decodedId}</h1>
            <p className="text-xs text-gray-500">Secure PDF Viewer</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors hidden sm:block" title="Share">
            <Share2 size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors hidden sm:block" title="Print">
            <Printer size={20} />
          </button>
          {pdfUrl && (
            <a 
              href={pdfUrl} 
              download 
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded shadow hover:bg-primary-dark transition-colors"
            >
              <Download size={16} /> <span className="hidden sm:inline">Download PDF</span>
            </a>
          )}
        </div>
      </div>

      {/* Viewer Area */}
      <div className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex flex-col h-[calc(100vh-140px)]">
        <AnimatedSection className="w-full h-full bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden flex flex-col relative">
           {loading ? (
             <div className="flex-grow flex flex-col items-center justify-center">
               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
               <p className="text-gray-500 font-medium">Loading secure document...</p>
             </div>
           ) : pdfUrl ? (
             <object
               data={pdfUrl}
               type="application/pdf"
               className="w-full h-full rounded-xl"
             >
               <div className="flex flex-col items-center justify-center h-full text-center p-8">
                 <p className="text-lg text-gray-600 mb-4">Your browser does not support inline PDF viewing.</p>
                 <a href={pdfUrl} className="px-6 py-2 bg-primary text-white rounded font-bold">
                   Download PDF directly
                 </a>
               </div>
             </object>
           ) : (
             <div className="flex-grow flex items-center justify-center text-red-500 font-medium">
               Failed to load document. The file might have been removed or access is restricted.
             </div>
           )}
        </AnimatedSection>
      </div>
    </div>
  );
}
