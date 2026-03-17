import AnimatedSection from '@/components/ui/AnimatedSection';
import { Target, Lightbulb, Users } from 'lucide-react';
import StaffImage from '@/components/ui/StaffImage';

export const metadata = {
  title: 'About Us | Shivay Publication',
  description: 'Learn about our mission, vision, and the founders behind Shivay Publication.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Who We Are?</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Shivay Publications, we are driven by a steadfast commitment to advancing scholarly inquiry and fostering a vibrant ecosystem conducive to academic growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Replaceable Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <AnimatedSection delay={0.2} className="relative w-full h-[150px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 bg-primary-dark flex items-center justify-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Leading Academic Excellence</h2>
        </AnimatedSection>
      </section>

      {/* Mission & Extraordinary Experiences */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-gold" size={32} />
              <h2 className="text-3xl font-serif font-bold text-primary">Our MissioN</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              &quot;Our Mission is to give scholars, academics, and educational institutions all around the world unmatched assistance and resources. We are dedicated to fostering a culture of rigorous scholarship and creativity through our extensive suite of services, which includes the production of books and journals, seminars, conferences, and faculty development programs. We work to expand the boundaries of research and make a significant contribution to the international academic community by encouraging cooperation, facilitating the exchange of knowledge, and upholding academic integrity.&quot;
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Extraordinary Experiences</h3>
            <p className="text-gray-600 leading-relaxed">
              At Shivay Publications, we are driven by a steadfast commitment to advancing scholarly inquiry and fostering a vibrant ecosystem conducive to academic growth. With an unwavering dedication to excellence, we invite you to embark on a transformative journey of knowledge exploration and dissemination with us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values & Vision */}
      <section className="bg-white py-20 mt-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-gold" size={32} />
                <h2 className="text-3xl font-serif font-bold text-primary">Our Core Values</h2>
              </div>
              <p className="text-gray-600 mb-6 font-medium">Our spectrum of services encompasses:</p>
              <ul className="space-y-4">
                {[
                  'National-Level Conferences on Research',
                  'Publication of Research Books with ISBN Number',
                  'Faculty Development Programs',
                  'Publication of Peer Review Research Journals with ISSN Number'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-gold" size={32} />
                <h2 className="text-3xl font-serif font-bold text-primary">Our vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-gold pl-6 py-2 bg-gray-50 rounded-r-lg">
                “Our vision is to be the driving force behind a paradigm shift in scholarly engagement by creating an environment that is conducive to the flourishing of academic discourse and research.” Our goal is to foster a love of learning and information sharing so that people and organisations can reach their greatest potential and pursue academic achievement.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Founders</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-10">
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                  <StaffImage src="/staff/hardik_goradiya.jpg" name="Adv. Hardik Goradiya" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Adv. Hardik Goradiya</h3>
                <p className="text-gold font-medium uppercase tracking-widest text-sm mt-1">Founder</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                Adv. Hardik Goradiya boasts a diverse array of achievements in academia and professional development. He is holding 3 Patents awarded by The Patent Office, Government of India for creating unique design on an “AI Based Digital Marketing Billboard” and “Display Device for Digital Marketing” and a “Machine Learning based device for training students”. 2 International Patents have been awarded: “Distribution System for Influencer Marketing Device” issued by The Government of the United Kingdom, and “AI-based Marketing Management System” issued by The Government of Germany. He has been in Academics for the last 15 years and is a Profile Researcher. He is contributed for more than 30 research papers along with authoring 27 books. Notable accomplishments include being the 2nd Best Performer at Thakur Shyamnarayan Degree College, appointment as NAAC Consultant at Shree L. R. Tiwari College of Law, and membership in esteemed organizations like the Bar Council of Maharashtra & Goa. With roles ranging from expert faculty to industrial visit organizer and patent applicant, he showcases a commitment to education and innovation, alongside extensive mentoring experience.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                  <StaffImage src="/staff/nilam_goradiya.jpg" name="Mrs. Nilam H. Goradiya" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Mrs. Nilam H. Goradiya</h3>
                <p className="text-gold font-medium uppercase tracking-widest text-sm mt-1">Co Founder</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                Mrs. Nilam H. Goradiya, Assistant Professor at Nirmala Memorial Foundation College of Commerce and Science, is a distinguished academician and researcher. She is holding 3 Patents awarded by The Patent Office, Government of India for creating unique design on an “AI Based Digital Marketing Billboard” and “Display Device for Digital Marketing” and “Machine Learning based device for training students”. 2 International Patents have been awarded: “Distribution System for Influencer Marketing Device” issued by The Government of the United Kingdom, and “AI-based Marketing Management System” issued by The Government of Germany. She has a Academic Experience of more than 10 years. She has authored more than 15 research papers and 25 books. Mrs. Nilam’s accolades include the Best Researcher award by Nirmala Memorial Foundation College of Commerce and Science.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                  <StaffImage src="/staff/khushboo_bidawatka.jpg" name="Ms. Khushboo Bidawatka" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">Ms. Khushboo Bidawatka</h3>
                <p className="text-gold font-medium uppercase tracking-widest text-sm mt-1">Co Founder</p>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                Ms. Khushboo Bidawatka, excels in academics, research, and teaching. Recognized for her outstanding research, she was honored with the 2nd Best Research Paper Award at the International conference. She holds 3 Patents awarded by The Patent Office, Government of India for creating unique design on an “AI Based Digital Marketing Billboard” and “Display Device for Digital Marketing” and “Machine Learning based device for training students”. 2 International Patents have been awarded: “Distribution System for Influencer Marketing Device” issued by The Government of the United Kingdom, and “AI-based Marketing Management System” issued by The Government of Germany. She is All India Faculty for Teaching to CA & CS Students and also Known for her engaging teaching style. 
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
