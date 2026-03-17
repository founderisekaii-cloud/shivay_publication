import Link from 'next/link';
import { ArrowRight, BookOpen, Globe, Award, ShieldCheck } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ReviewCarousel from '@/components/ui/ReviewCarousel';

export const metadata = {
  title: 'Shivay Publication | Home',
  description: 'Global excellence in academic publishing, DOI allocation, and rigorous peer review.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 bg-primary-dark/95">
          {/* Subtle background pattern or gradient could go here */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedSection>
            <span className="inline-block py-1 px-3 rounded-full bg-gold/20 text-gold font-semibold text-sm mb-6 tracking-widest uppercase">
              Leading Academic Publisher
            </span>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Discover, Learn, Grow: <br />
              <span className="text-gold">Your Path with Shivay</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Shivay Publications, a pioneering venture committed to catalysing a profound interest in research, stands as a newly innovated startup dedicated to scholarly excellence. Officially registered with the Government of India.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/submit" className="w-full sm:w-auto px-8 py-4 bg-gold text-primary font-bold rounded shadow-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2">
              Submit Manuscript <ArrowRight size={20} />
            </Link>
            <Link href="/archives" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded hover:bg-white/10 transition-all">
              Explore Archives
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats / Impact Section */}
      <section className="py-20 bg-white border-b border-gray-100 relative -mt-16 z-20 mx-4 lg:mx-auto max-w-6xl rounded-xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
             { label: 'Published Papers', value: '10,000+' },
             { label: 'Global Authors', value: '5,000+' },
             { label: 'Citations', value: '50,000+' },
             { label: 'Review Time', value: '< 14 Days' },
          ].map((stat, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500 font-semibold">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <BookOpen size={40} />, 
                title: 'Journal Publishing', 
                desc: 'World Journal of Management, Research & Innovation (WJMRI) is a peer-reviewed, monthly online journal dedicated to advancing knowledge in the field of Management.' 
              },
              { 
                icon: <Globe size={40} />, 
                title: 'Books & ISBN Allocation', 
                desc: 'We specialize in the dissemination of meticulously crafted research works, ensuring each publication is endowed with an International Standard Book Number (ISBN).' 
              },
              { 
                icon: <Award size={40} />, 
                title: 'National Conferences', 
                desc: 'Hosting National-Level Conferences on Research and organizing comprehensive Faculty Development Programs.' 
              },
            ].map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.2}>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="text-gold mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                  <h3 className="text-2xl font-bold font-serif text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <Link href="/services" className="text-primary font-bold flex items-center gap-2 group-hover:text-gold transition-colors">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Prestigious Highlights */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Core Mission & Values</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Shivay Publications, a pioneering venture committed to catalysing a profound interest in research, is fully entrenched in the realm of publication, offering a comprehensive suite of services tailored to academic and research communities.
              </p>
              <ul className="space-y-4">
                {[
                  'National-Level Conferences on Research',
                  'Publication of Research Books with ISBN Number',
                  'Faculty Development Programs',
                  'Publication of Peer Review Research Journals with ISSN Number'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="text-gold flex-shrink-0" size={24} />
                    <span className="text-gray-100 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/staff" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded shadow-lg hover:bg-gray-100 transition-all">
                  Meet Our Editorial Board
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="relative">
              <div className="aspect-[4/5] bg-gradient-to-tr from-gold to-yellow-600 rounded-2xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-primary-dark rounded-xl flex items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                  <div className="relative z-10">
                    <BookOpen size={80} className="text-gold mx-auto mb-6 opacity-80" />
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Call For Papers</h3>
                    <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6">Volume 12, Issue 4</p>
                    <p className="text-sm text-gray-300 mb-8 max-w-xs mx-auto">Submit your manuscript for the upcoming issue focused on sustainable engineering and tech advancements.</p>
                    <Link href="/announcement" className="text-sm font-bold text-white border-b-2 border-gold pb-1 hover:text-gold transition-colors">
                      View full announcement
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-background pt-24 pb-12">
        <ReviewCarousel />
      </section>
    </div>
  );
}
