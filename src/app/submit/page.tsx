'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { DbService } from '@/services/db.service';
import { AuthService } from '@/services/auth.service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { UploadCloud, CheckCircle, ChevronRight, ChevronLeft, FileText, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const submissionSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters'),
  abstract: z.string().min(100, 'Abstract should be at least 100 characters for initial review'),
  keywords: z.string().min(5, 'Provide at least 3 keywords separated by commas'),
  authors: z.string().min(3, 'List all authors'),
  journal: z.string().min(1, 'Please select a target journal'),
});

type SubmissionFormValues = z.infer<typeof submissionSchema>;

export default function SubmitPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<SubmissionFormValues>({
    resolver: zodResolver(submissionSchema),
  });

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await trigger(['title', 'abstract', 'keywords', 'authors', 'journal']);
      if (isValid) setStep(2);
    }
  };

  const processSubmission = async (data: SubmissionFormValues) => {
    if (!file) {
      setError('Please attach your manuscript PDF before submitting.');
      return;
    }
    
    setIsUploading(true);
    setError(null);

    try {
      // Include user email from auth context for the DB record
      const session = await AuthService.getSession();
      const email = session?.user?.email || 'unknown@example.com';

      // Send the file + metadata jointly to the Apps Script DB wrapper
      const result: any = await DbService.submitManuscript(file, {
        ...data,
        email: email
      });

      // Pass the returned ID to success state if we wanted to
      console.log('Successfully saved to Drive/Sheet with ID:', result.id);

      // After upload
      setStep(3);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to submit manuscript. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf') {
        setError('Only PDF files are accepted for manuscript submission.');
        setFile(null);
      } else if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be less than 10MB to optimize storage costs.');
        setFile(null);
      } else {
        setFile(selectedFile);
        setError(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">Submit Manuscript</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to our secure submission portal. Please provide your manuscript details and upload your document in PDF format for peer review.
            </p>
          </div>
        </AnimatedSection>

        {/* Stepper */}
        <AnimatedSection delay={0.1} className="mb-12">
          <div className="flex items-center justify-center">
             <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 1 ? 'bg-gold text-primary' : 'bg-gray-200 text-gray-400'}`}>1</div>
                <div className={`w-16 sm:w-32 h-1 mx-2 ${step >= 2 ? 'bg-gold' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 2 ? 'bg-gold text-primary' : 'bg-gray-200 text-gray-400'}`}>2</div>
                <div className={`w-16 sm:w-32 h-1 mx-2 ${step >= 3 ? 'bg-gold' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 3 ? 'bg-gold text-primary' : 'bg-gray-200 text-gray-400'}`}>3</div>
             </div>
          </div>
          <div className="flex justify-center mt-3 gap-[4.5rem] sm:gap-[9.5rem] text-sm font-semibold tracking-wide text-gray-500">
             <span className={step >= 1 ? 'text-primary' : ''}>Metadata</span>
             <span className={step >= 2 ? 'text-primary' : ''}>Upload</span>
             <span className={step >= 3 ? 'text-primary' : ''}>Success</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 min-h-[500px]">
           {error && (
              <div className="mb-8 bg-red-50 text-red-700 p-4 rounded-lg text-sm flex items-start gap-3 border border-red-200">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

           {step === 1 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
               <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b pb-4">Article Metadata</h2>
               <div className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Manuscript Title *</label>
                    <input {...register('title')} type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="Enter full title of your research paper" />
                    {errors.title && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.title.message}</p>}
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold tracking-wide text-primary mb-2">Author(s) *</label>
                      <input {...register('authors')} type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="e.g. Dr. John Doe, Prof. Jane Smith" />
                      {errors.authors && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.authors.message}</p>}
                   </div>
                   <div>
                      <label className="block text-sm font-bold tracking-wide text-primary mb-2">Target Journal *</label>
                      <select {...register('journal')} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none text-gray-700">
                        <option value="">Select Journal...</option>
                        <option value="JCS">International Journal of Computer Science</option>
                        <option value="JME">Journal of Mechanical Engineering</option>
                        <option value="JBM">Global Journal of Business Management</option>
                        <option value="JMD">Medical & Healthcare Research</option>
                      </select>
                      {errors.journal && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.journal.message}</p>}
                   </div>
                 </div>

                 <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Abstract (Max 500 words) *</label>
                    <textarea {...register('abstract')} rows={5} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none resize-none" placeholder="Enter your paper's abstract..."></textarea>
                    {errors.abstract && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.abstract.message}</p>}
                 </div>

                 <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Keywords *</label>
                    <input {...register('keywords')} type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold outline-none" placeholder="AI, Machine Learning, Neural Networks" />
                    {errors.keywords && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.keywords.message}</p>}
                 </div>

                 <div className="pt-6 flex justify-end">
                   <button onClick={nextStep} type="button" className="px-8 py-3 bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition-colors flex items-center gap-2">
                     Next Step <ChevronRight size={18} />
                   </button>
                 </div>
               </div>
             </motion.div>
           )}

           {step === 2 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
               <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b pb-4">Upload Manuscript</h2>
               
               <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors hover:border-gold my-8 min-h-[250px]">
                 <input 
                   type="file" 
                   ref={fileInputRef} 
                   onChange={handleFileChange} 
                   accept="application/pdf" 
                   className="hidden" 
                 />
                 
                 {file ? (
                   <div className="flex flex-col items-center">
                     <FileText size={64} className="text-primary mb-4" />
                     <p className="text-lg font-bold text-primary">{file.name}</p>
                     <p className="text-sm text-gray-500 mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                     <button onClick={() => setFile(null)} className="mt-4 text-sm text-red-500 font-semibold hover:underline">
                       Remove file
                     </button>
                   </div>
                 ) : (
                   <div className="flex flex-col items-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                     <UploadCloud size={64} className="text-gold mb-4" />
                     <h3 className="text-xl font-bold text-primary mb-2">Click to select PDF document</h3>
                     <p className="text-gray-500 text-sm max-w-sm">
                       Upload your manuscript as a single PDF file (Max 10MB). Ensure author identities are removed if targeting double-blind review.
                     </p>
                     <button className="mt-6 px-6 py-2.5 bg-white border border-gray-200 text-primary font-bold rounded shadow-sm hover:bg-gray-50 transition-colors">
                       Browse Files
                     </button>
                   </div>
                 )}
               </div>

               <div className="pt-6 flex justify-between">
                 <button onClick={() => { setStep(1); setError(null); }} type="button" className="px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                   <ChevronLeft size={18} /> Back
                 </button>
                 <button 
                   onClick={handleSubmit(processSubmission)} 
                   disabled={!file || isUploading}
                   type="button" 
                   className="px-8 py-3 bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                 >
                   {isUploading ? <><Loader2 className="animate-spin" size={18} /> Uploading...</> : 'Submit Manuscript'}
                 </button>
               </div>
             </motion.div>
           )}

           {step === 3 && (
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
               <CheckCircle size={80} className="text-green-500 mb-6" />
               <h2 className="text-3xl font-serif font-bold text-primary mb-4">Submission Successful!</h2>
               <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
                 Thank you for submitting your manuscript to Shivay Publication. Your tracking ID is <span className="font-mono font-bold text-primary bg-gray-100 px-2 py-1 rounded">SUB-{new Date().getFullYear()}-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}</span>. Our editorial team will begin the initial review shortly.
               </p>
               <div className="flex gap-4">
                 <button onClick={() => router.push('/dashboard/author')} className="px-8 py-3 bg-primary text-white font-bold rounded shadow hover:bg-primary-dark transition-colors">
                   Go to Dashboard
                 </button>
                 <button onClick={() => router.push('/checkout')} className="px-8 py-3 bg-gold text-primary font-bold rounded shadow hover:bg-yellow-400 transition-colors">
                   Pay Publication Fee
                 </button>
               </div>
             </motion.div>
           )}
        </AnimatedSection>
      </div>
    </div>
  );
}
