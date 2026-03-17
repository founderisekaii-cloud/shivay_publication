import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import SiteLogo from '@/components/ui/SiteLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-gray-300 pt-16 pb-8 border-t border-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-gold text-primary p-2 rounded-lg flex items-center justify-center h-12 w-12">
                <SiteLogo size={32} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white leading-none">
                  Shivay
                </span>
                <span className="text-xs text-gold tracking-[0.2em] font-medium">
                  PUBLICATION
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering global minds through prestigious academic publishing. We offer fast-track peer review, DOI allocation, and robust research assistance.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/shivay-publications-780167315/" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/shivay_publications" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Author Services</Link></li>
              <li><Link href="/archives" className="hover:text-gold transition-colors">Journal Archives</Link></li>
              <li><Link href="/staff" className="hover:text-gold transition-colors">Editorial Board</Link></li>
              <li><Link href="/advisory-board" className="hover:text-gold transition-colors">Advisory Board</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/ethics" className="hover:text-gold transition-colors">Publication Ethics</Link></li>
              <li><Link href="/refund" className="hover:text-gold transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>A2/402, JP NORTH CELESTE, Vinay Nagar, Mira Road East, Thane-401107, Mumbai, Maharashtra, India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>+91 93724 83733</span>
              </li>
              <li className="flex items-start gap-3 flex-col sm:flex-row">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gold flex-shrink-0" />
                  <span>support@shivaypublications.com / shivaypublications@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Shivay Publication. All rights reserved.</p>
          <p>
            Designed with excellence for global academia.
          </p>
        </div>
      </div>
    </footer>
  );
}
