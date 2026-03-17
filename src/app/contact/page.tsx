'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-300">
              Have questions about our publication process, fees, or ISBN allocation? Our support team is here to assist you round the clock.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <AnimatedSection>
            <div className="bg-secondary text-white p-10 rounded-xl shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Mail size={200} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-8 relative z-10">Contact Information</h2>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 text-gold rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Global Headquarters</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      A2/402, JP NORTH CELESTE, Vinay Nagar, <br />
                      Mira Road East, Thane-401107, Mumbai, Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 text-gold rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Phone Support</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      +91 93724 83733 <br />
                      Mon-Fri, 9am - 6pm IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold/20 text-gold rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Queries</h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      support@shivaypublications.com <br />
                      shivaypublications@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 relative">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Send us a Message</h2>

              {success ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center font-medium border border-green-200">
                  Thank you! Your message has been sent successfully. Our team will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold tracking-wide text-primary mb-2">First Name</label>
                      <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="vikas" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold tracking-wide text-primary mb-2">Last Name</label>
                      <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="Dubey" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Email Address</label>
                    <input required type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all" placeholder="founder.isekaii@gmail.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Subject</label>
                    <select required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all text-gray-700">
                      <option value="">Select a topic</option>
                      <option value="submission">Manuscript Submission Query</option>
                      <option value="isbn">ISBN Allocation Request</option>
                      <option value="billing">Billing & Gateway Support</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold tracking-wide text-primary mb-2">Message</label>
                    <textarea required rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection delay={0.3}>
          <div className="bg-white p-2 rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8957.012961931225!2d72.87823823386849!3d19.284103638648496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b161994ab053%3A0x2c2d47a5462ba5b!2sShivay%20Publications!5e0!3m2!1sen!2sin!4v1773762483231!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
