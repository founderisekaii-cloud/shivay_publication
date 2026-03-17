import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Publication Ethics | Shivay Publication',
};

export default function EthicsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Publication Ethics</h1>
            <p className="text-lg text-gray-300">
              Our strict adherence to global research integrity, plagiarism policies, and peer review standards.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection delay={0.2} className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 min-h-[400px]">
           <p className="text-gray-600 text-lg text-center mt-20">The Publication Ethics and Malpractice Statement will be detailed here.</p>
        </AnimatedSection>
      </section>
    </div>
  );
}
