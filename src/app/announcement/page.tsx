import AnimatedSection from '@/components/ui/AnimatedSection';
import { Calendar, Bell, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Announcements & Call for Papers | Shivay Publication',
  description: 'Latest academic announcements, call for papers, and updates from Shivay Publication.',
};

const announcements = [
  {
    id: 1,
    date: 'March 15, 2026',
    title: 'Call for Papers: Special Issue on Quantum Computing',
    summary: 'We invite researchers and scholars to submit their original research papers for the upcoming special issue volume 12. Topics include Quantum Cryptography, Algorithms, and Hardware.',
    tag: 'Call for Papers',
  },
  {
    id: 2,
    date: 'February 28, 2026',
    title: 'Shivay Publication partners with Global Tech Conference 2026',
    summary: 'We are proud to announce our partnership with GTC 2026 as their official proceedings publisher. All accepted papers will receive rapid DOI allocation and Scopus indexing.',
    tag: 'Partnership',
  },
  {
    id: 3,
    date: 'January 10, 2026',
    title: 'New Editorial Board Members Appointed',
    summary: 'Welcoming three distinguished professors from MIT, Oxford, and Stanford to our Computer Science editorial review board to strengthen our peer review rigor.',
    tag: 'Board Update',
  },
];

export default function AnnouncementPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest Announcements</h1>
            <p className="text-lg text-gray-300">
              Stay updated with our latest call for papers, academic partnerships, and publication news.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-8">
          {announcements.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-gold transform origin-left transition-transform group-hover:scale-x-150" />
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    <Bell size={14} />
                    {item.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-gray-500 font-medium tracking-wide">
                    <Calendar size={16} />
                    {item.date}
                  </span>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-primary mb-3">
                  {item.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.summary}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors">
                  Read Full Details <ChevronRight size={18} />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
