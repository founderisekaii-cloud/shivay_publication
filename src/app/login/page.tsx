'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AuthService } from '@/services/auth.service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, AlertCircle, Loader2 } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setError(null);
      await AuthService.signIn(data.email, data.password);
      // Determine dashboard route based on role or simple redirect
      router.push('/dashboard/author');
    } catch (err: any) {
      setError(err.message || 'Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gold/5 -skew-y-12 transform origin-bottom-left -z-10" />

      <AnimatedSection className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center items-center gap-2 mb-8 group">
          <div className="bg-gold text-primary p-3 rounded-xl group-hover:scale-110 transition-transform">
            <BookOpen size={32} />
          </div>
        </Link>
        <h2 className="text-center text-3xl font-serif font-bold text-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Sign in to your Shivay Publication author account
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl rounded-2xl border border-gray-100 sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm flex items-start gap-3 border border-red-200">
                <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-bold tracking-wide text-primary mb-2">
                Email Address
              </label>
              <input 
                {...register('email')}
                type="email" 
                className={`w-full p-3 bg-gray-50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`} 
                placeholder="author@university.edu" 
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
            </div>

            <div>
               <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold tracking-wide text-primary">
                  Password
                </label>
                <Link href="#" className="text-xs font-semibold text-secondary hover:text-gold transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input 
                {...register('password')}
                type="password" 
                className={`w-full p-3 bg-gray-50 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`} 
                placeholder="••••••••" 
              />
              {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password.message}</p>}
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full py-3.5 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Authenticating...</> : 'Sign In'}
            </button>

          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-bold text-primary hover:text-gold transition-colors">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
