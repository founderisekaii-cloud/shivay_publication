import AnimatedSection from '@/components/ui/AnimatedSection';
import { BookOpen, Award, Globe, ShieldCheck, FileText, BarChart, FileCheck, Layers, BookType, Layout, Pencil } from 'lucide-react';

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
    title: 'Publishing Books & ISBN Allocation',
    description: 'We specialize in the dissemination of meticulously crafted research works, ensuring each publication is endowed with an International Standard Book Number (ISBN).',
  },
  {
    icon: <Layers size={48} />,
    title: 'Publishing Book Chapters',
    description: 'Showcase your specialized research by publishing individual chapter(s) in an ISBN-accredited academic book.',
  },
  {
    icon: <BarChart size={48} />,
    title: 'Publishing in ISSN Journals',
    description: 'End-to-end support for publishing your peer-reviewed research papers in highly reputed ISSN-numbered journals.',
  },
  {
    icon: <ShieldCheck size={48} />,
    title: 'Patent Registration & Awards',
    description: 'Comprehensive assistance with patent registration and awarding patents from the Government of India, United Kingdom, and United States.',
  },
  {
    icon: <BookType size={48} />,
    title: 'Notes to Academic Books',
    description: 'Convert your academic notes into published books through our exclusive royalty and loyalty program designed specifically for educators.',
  },
  {
    icon: <Award size={48} />,
    title: 'UGC Care List & Scopus Support',
    description: 'Expert guidance and support in getting your research papers successfully published in UGC Care List journals, Scopus, and other high-impact indexing databases.',
  },
  {
    icon: <Pencil size={48} />,
    title: 'Thesis & Dissertation Support',
    description: 'Professional support and strategic guidance in the comprehensive writing of your Ph.D. Thesis, Projects, and Dissertations.',
  },
  {
    icon: <Layout size={48} />,
    title: 'Digital Content Creation',
    description: 'State-of-the-art creation and publication of engaging digital content tailored for modern learning environments and global dissemination.',
  },
  {
    icon: <FileCheck size={48} />,
    title: 'Research Plagiarism Checking',
    description: 'To maintain the highest ethical standards, we provide comprehensive similarity checks using industry-leading software like Turnitin and iThenticate.',
  },
  {
    icon: <FileText size={48} />,
    title: 'National-Level Conferences',
    description: 'We host and manage National-Level Conferences on Research, offering dynamic platforms for academicians to present original articles.',
  },
];

const projects = [
  { title: "A Multidisciplinary Exploration", link: "#" },
  { title: "The Digital India 2050", link: "#" },
  { title: "Globalisation: A Social Tension", link: "#" },
  { title: "Make in India 2030: A Future Vision", link: "#" },
  { title: "Transforming India Education", link: "#" },
  { title: "Mental Health and Social Media Usage", link: "#" },
  { title: "Gender Equality in Workplace Policies", link: "#" },
  { title: "The Digital Revolution AI", link: "#" },
  { title: "Women Entrepreneurship in 21st Century", link: "#" },
  { title: "Volume 2 The Digital Revolution", link: "#" }
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

      {/* Our Projects Section */}
      <section className="py-24 bg-white border-y border-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Projects</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">Explore our diverse portfolio of published works spanning across multidisciplinary paradigms, shaping the future of global academic literature.</p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
             {projects.map((proj, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <div className="bg-primary/5 rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col cursor-pointer">
                    <div className="h-[250px] bg-primary p-6 flex flex-col justify-end relative overflow-hidden text-center shadow-inner">
                       <BookOpen size={100} strokeWidth={1} className="text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700" />
                       <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/40 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <h3 className="text-white font-serif font-bold text-xl relative z-10 break-words leading-tight group-hover:text-gold transition-colors pb-4">{proj.title}</h3>
                    </div>
                    <div className="p-4 bg-white text-center border-t-2 border-gold/30 mt-auto flex items-center justify-center gap-2 group-hover:bg-gray-50 transition-colors">
                       <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-wider">View Full Book</span>
                    </div>
                  </div>
                </AnimatedSection>
             ))}
          </div>
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
