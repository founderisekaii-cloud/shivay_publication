import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Award, Globe, ShieldCheck, FileText, BarChart } from 'lucide-react';

export const metadata = {
  title: 'Services & ISBN Allocation | Shivay Publication',
  description: 'Explore our premium academic publishing services, including fast-track DOI allocation, peer review, and ISBN services.',
};

const services = [
  {
    icon: <Globe size={48} />,
    title: 'World Journal of Management, Research & Innovation',
    description: 'WJMRI is a peer-reviewed, monthly online journal dedicated to advancing knowledge in the field of Management through a multidisciplinary lens.',
  },
  {
    icon: <BookOpen size={48} />,
    title: 'Publication of Research Books',
    description: 'Shivay Publications specializes in the dissemination of meticulously crafted research works, ensuring each publication is endowed with an International Standard Book Number (ISBN).',
  },
  {
    icon: <FileText size={48} />,
    title: 'DOI Assignment',
    description: 'Every published article receives a unique Digital Object Identifier (DOI) from Crossref, ensuring permanent, reliable links to your scholarly work.',
  },
  {
    icon: <ShieldCheck size={48} />,
    title: 'Faculty Development Programs',
    description: 'We organize extensive and comprehensive Faculty Development Programs aimed at refining academic teaching standards and elevating higher education research.',
  },
  {
    icon: <Award size={48} />,
    title: 'National-Level Conferences',
    description: 'We host and manage National-Level Conferences on Research, offering dynamic platforms for academicians, researchers, and professionals to present high-quality, original articles.',
  },
  {
    icon: <BarChart size={48} />,
    title: 'Research Plagiarism Checking',
    description: 'To maintain the highest ethical standards, we provide comprehensive similarity checks using industry-leading software like Turnitin and iThenticate.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="bg-primary pt-20 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[url('https://www.transparenttextures.com/patterns/mathematics.png')]">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Author Services & Allocations</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive support for your academic journey, from initial manuscript preparation to global indexing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 group">
                <div className="text-gold mb-6 inline-block p-4 bg-primary/5 rounded-full group-hover:bg-gold/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="bg-secondary text-white rounded-2xl p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
               <BookOpen size={200} />
             </div>
            <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Looking to publish your next masterpiece?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Join thousands of global researchers who trust Shivay Publication for high-quality, expedited academic publishing.
            </p>
            <a href="/submit" className="relative z-10 inline-block px-8 py-4 bg-gold text-primary font-bold rounded shadow-lg hover:bg-yellow-400 transition-all">
              Submit Manuscript Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
