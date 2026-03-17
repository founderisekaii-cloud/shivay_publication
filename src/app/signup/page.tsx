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

const signupSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setError(null);
      await AuthService.signUp(data.email, data.password, { full_name: data.fullName });
      router.push('/dashboard/author');
    } catch (err: any) {
      setError(err.message || 'Failed to create account. Please try again.');
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
          Create an Account
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Join Shivay Publication as an author or peer reviewer
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
                Full Name
              </label>
              <input
                {...register('fullName')}
                type="text"
                className={`w-full p-3 bg-gray-50 border ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                placeholder="Vikas Dubey"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold tracking-wide text-primary mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full p-3 bg-gray-50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                placeholder="founder.isekaii@gmail.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold tracking-wide text-primary mb-2">
                Password
              </label>
              <input
                {...register('password')}
                type="password"
                className={`w-full p-3 bg-gray-50 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-bold tracking-wide text-primary mb-2">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword')}
                type="password"
                className={`w-full p-3 bg-gray-50 border ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-gold'} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.confirmPassword.message}</p>}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-3.5 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Creating Account...</> : 'Sign Up'}
            </button>

          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-primary hover:text-gold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
