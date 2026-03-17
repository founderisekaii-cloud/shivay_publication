'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaymentService } from '@/services/payment.service';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CreditCard, ShieldCheck, FileCheck, ArrowRight, Loader2 } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Base Publication Fee (Placeholder)
  const baseAmountINR = 5000;
  const gatewayFeePercentage = 2; // 2%
  const totalAmount = baseAmountINR + (baseAmountINR * gatewayFeePercentage) / 100;
  const totalAmountPaise = PaymentService.calculateTotalWithFee(baseAmountINR);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Setup Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || 'rzp_test_placeholder', 
        amount: totalAmountPaise, 
        currency: 'INR',
        name: 'Shivay Publication',
        description: 'Manuscript Publication Fee + 2% Gateway Charge',
        image: 'https://shivaypublications.com/logo.png', // Fallback, could be removed
        handler: function (response: any) {
          // Verify payment on backend normally
          console.log('Payment ID:', response.razorpay_payment_id);
          router.push('/dashboard/author?payment=success');
        },
        prefill: {
          name: 'Dr. Author',
          email: 'author@university.edu',
          contact: '9999999999',
        },
        theme: {
          color: '#d4af37', // Gold 
        },
      };

      await PaymentService.makePayment(options);
    } catch (error) {
       console.error('Payment Error:', error);
       alert('Error loading secure payment gateway. Are you connected to the internet?');
    } finally {
       setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20 pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 shadow-2xl rounded-2xl overflow-hidden bg-white">
        
        {/* Invoice Summary */}
        <AnimatedSection className="bg-primary text-white p-10 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold text-gold mb-2">Invoice Details</h2>
              <p className="text-gray-300">Tracking ID: SUB-2026-081</p>
            </div>
            
            <ul className="space-y-6">
              <li className="flex justify-between items-start border-b border-secondary-light pb-4">
                 <div>
                   <p className="font-bold">Journal Publication Fee</p>
                   <p className="text-sm text-gray-400">Standard DOI & Peer Review Processing</p>
                 </div>
                 <p className="font-mono">₹{baseAmountINR.toFixed(2)}</p>
              </li>
              <li className="flex justify-between items-start border-b border-secondary-light pb-4">
                 <div>
                   <p className="font-bold text-gray-300">Gateway Processing Fee</p>
                   <p className="text-sm text-gray-400">Standard {gatewayFeePercentage}% Razorpay Charge</p>
                 </div>
                 <p className="font-mono text-gray-300">₹{((baseAmountINR * gatewayFeePercentage) / 100).toFixed(2)}</p>
              </li>
            </ul>
          </div>

          <div className="mt-12 flex justify-between items-end border-t border-secondary pt-6">
             <p className="text-xl font-bold">Total Amount</p>
             <p className="text-4xl font-mono text-gold font-bold">₹{totalAmount.toFixed(2)}</p>
          </div>
        </AnimatedSection>

        {/* Checkout Action */}
        <AnimatedSection delay={0.2} className="p-10 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <div className="inline-block p-4 bg-primary/5 rounded-full text-primary mb-4">
              <CreditCard size={48} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">Secure Payment</h2>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              You are about to be redirected to our PCI DSS compliant Razorpay checkout gateway.
            </p>
          </div>

          <div className="space-y-4 mb-8">
             <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-100">
               <ShieldCheck className="text-green-500 flex-shrink-0" size={20} />
               <span>256-bit SSL End-to-End Encryption</span>
             </div>
             <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded border border-gray-100">
               <FileCheck className="text-gold flex-shrink-0" size={20} />
               <span>Instant Receipt & Workflow Activation</span>
             </div>
          </div>

          <button 
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full py-4 bg-gold text-primary text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isProcessing ? <><Loader2 className="animate-spin" /> Processing...</> : <>Proceed to Pay <ArrowRight size={20} /></>}
          </button>

          <p className="text-center text-xs text-gray-400 mt-6 mt-auto">
            By proceeding, you agree to Shivay Publication&apos;s Terms of Service and Refund Policy.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}
