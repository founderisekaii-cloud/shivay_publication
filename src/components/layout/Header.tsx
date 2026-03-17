'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, ChevronDown, User } from 'lucide-react';
import SiteLogo from '@/components/ui/SiteLogo';
import { AuthService } from '@/services/auth.service';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check Auth State on Mount
    const checkAuth = async () => {
      if (typeof window !== 'undefined' && window.localStorage.getItem('shivay_admin_access') === 'granted') {
        setIsAdmin(true);
        return;
      }
      try {
        const currentUser = await AuthService.getUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (err) {
        console.error(err);
      }
    };
    checkAuth();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Archives', href: '/archives' },
    { name: 'Editorial Board', href: '/staff' },
    { name: 'Advisory Board', href: '/advisory-board' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-300">
      {/* Marquee Announcement Bar */}
      <div className="bg-primary-dark text-white overflow-hidden py-2 text-sm font-medium tracking-wide">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-4">
          <span className="text-gold flex-shrink-0">★ CALL FOR PAPERS 2026: Fast-track DOI & ISBN allocation available. Submit your manuscripts now!</span>
          <span className="text-gold flex-shrink-0 ml-12">★ GLOBAL EXCELLENCE: Ranked #1 for Rapid Peer Review and Academic Support Services.</span>
           {/* Duplicate for seamless effect */}
          <span className="text-gold flex-shrink-0 ml-12">★ CALL FOR PAPERS 2026: Fast-track DOI & ISBN allocation available. Submit your manuscripts now!</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-primary py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className={`p-2 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-primary text-white' : 'bg-gold text-primary'}`}
              >
                <SiteLogo size={28} />
              </motion.div>
              <div className="flex flex-col">
                <span className={`font-serif text-2xl font-bold leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  Shivay
                </span>
                <span className={`text-xs tracking-[0.2em] font-medium ${isScrolled ? 'text-gray-500' : 'text-gold'}`}>
                  PUBLICATION
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold ${
                    isScrolled ? 'text-secondary' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
              {isAdmin ? (
                <Link href="/dashboard/admin" className={`font-semibold flex items-center gap-1.5 text-sm ${isScrolled ? 'text-primary' : 'text-white'} hover:text-gold transition-colors`}>
                  <User size={16} /> Admin Panel
                </Link>
              ) : user ? (
                <Link href="/dashboard/author" className={`font-semibold flex items-center gap-1.5 text-sm ${isScrolled ? 'text-primary' : 'text-white'} hover:text-gold transition-colors`}>
                  <User size={16} /> Profile
                </Link>
              ) : (
                <Link href="/login" className={`font-semibold text-sm ${isScrolled ? 'text-primary' : 'text-white'} hover:text-gold transition-colors`}>
                  Login
                </Link>
              )}
              <Link href="/submit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-primary font-bold px-6 py-2.5 rounded hover:bg-yellow-400 transition-colors shadow-lg shadow-gold/20"
                >
                  Submit Paper
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 focus:outline-none ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-medium text-secondary hover:text-primary hover:bg-gray-50 p-2 rounded"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-gray-200 my-2" />
                {isAdmin ? (
                  <Link href="/dashboard/admin" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-secondary p-2 flex items-center gap-2"><User size={18}/> Admin Panel</Link>
                ) : user ? (
                  <Link href="/dashboard/author" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-secondary p-2 flex items-center gap-2"><User size={18}/> Author Profile</Link>
                ) : (
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-secondary p-2">Login</Link>
                )}
                <Link href="/submit" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-primary text-white font-bold px-4 py-3 rounded mt-2">
                    Submit Paper
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
