import Razorpay from 'razorpay';

export class PaymentService {
  /**
   * Calculate processing fee (2%)
   * @param amount Base amount in INR
   * @returns Total amount including 2% gateway fee in paise
   */
  static calculateTotalWithFee(amount: number) {
    const feePercentage = 0.02;
    const totalAmountInINR = amount + amount * feePercentage;
    // Razorpay requires amount in smallest currency sub-unit (paise)
    return Math.round(totalAmountInINR * 100);
  }

  /**
   * Setup Razorpay configuration and load dynamically on the client
   */
  static initializeRazorpay(): Promise<boolean> {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      
      script.onload = () => {
        resolve(true);
      };
      
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  /**
   * Initiate Razorpay checkout flow
   */
  static async makePayment(options: any) {
    const res = await this.initializeRazorpay();

    if (!res) {
      throw new Error('Razorpay SDK failed to load. Are you online?');
    }

    // `window.Razorpay` should be available here
    const rzp = new (window as any).Razorpay(options);
    
    rzp.on('payment.failed', function (response: any) {
      console.error(response.error);
    });
    
    rzp.open();
  }
}
