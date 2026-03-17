import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Briefcase, GraduationCap } from 'lucide-react';
import StaffImage from '@/components/ui/StaffImage';

export const metadata = {
  title: 'Advisory Board | Shivay Publication',
  description: 'Meet our esteemed Advisory Board members guiding Shivay Publication.',
};

const ADVISORY_MEMBERS = [
  {
    id: 1,
    name: 'Dr. G. D. GIRI',
    role: 'Chief Information Officer',
    department: 'Advisory Board Member',
    image: '/staff/gd_giri.jpg',
    bio: 'Principal of Thakur Shyamnarayan Degree College, Kandivali East, Mumbai, brings over 35 years of rich experience in academia and administration. He is holding 2 Patents awarded by The Patent Office, Government of India. Authored over 30 papers in esteemed journals. PhD guide at the University of Mumbai shaping the next generation of scholars.',
    email: 'principal@tsdcmumbai.in'
  },
  {
    id: 2,
    name: 'Dr. Sanjay Mishra',
    role: 'Chief Marketing Officer',
    department: 'Advisory Board Member',
    image: '/staff/sanjay_mishra.jpg',
    bio: 'Principal at Shree L R Tiwari Degree College of Arts, Commerce and Science, is a distinguished academic leader and prolific researcher. With over 47 research paper presentations and two national patents. Accolades include Best Teacher and Outstanding Faculty Mentor awards.',
    email: 'principal@slrtdc.in'
  },
  {
    id: 3,
    name: 'Dr. Bhakti Chaudhari',
    role: 'Chief Information Officer',
    department: 'Advisory Board Member',
    image: '/staff/bhakti_chaudhari.jpg',
    bio: '19 years of experience as an academician in Computer Science and Information Technology. Ph.D. in Computer Science. Coordinator for the B.Sc. CS and M.Sc. IT programs at Nirmala Memorial Foundation College. Specialisations include Cryptocurrency, Blockchain, Data Science, Java Technologies, and Network Security.',
    email: 'bhaktichaudhari@nirmala.edu.in'
  },
  {
    id: 4,
    name: 'Mr. Vignesh Mevada',
    role: 'Board Member',
    department: 'Advisory Board Member',
    image: '/staff/vignesh_mevada.jpg',
    bio: 'Founder of Infunds, a visionary leader and seasoned finance advisor. Earned an MBA in Finance, SEBI NISM certification. Vignesh founded Infunds as a holistic platform that combines advanced financial technology and expert advice to empower individuals and businesses.',
    email: 'support@shivaypublications.com'
  },
  {
    id: 5,
    name: 'Ms. Sayali H. Saraiya',
    role: 'Board Member',
    department: 'Advisory Board Member',
    image: '/staff/Sayali_Saraiya.jpg',
    bio: 'Assistant Professor with 2 years of experience in Rooms Division Management, Hospitality Studies. Dedicated to fostering academic excellence through innovative curriculum development. Author of 3 chapters in esteemed ISBN research books, and Patent holder granted by the Government of India.',
    email: 'support@shivaypublications.com'
  },
  {
    id: 6,
    name: 'Ms. Sonu Kumavat',
    role: 'Board Member',
    department: 'Advisory Board Member',
    image: '/staff/sonu_kumavat.jpg',
    bio: 'Holds an M.E. in Computer Engineering and a B.E. in Computer Science Engineering. She is holding 1 Patent awarded by The Patent Office, Government of India for Machine Learning device. Former Infosys engineer with teaching experiences contributing to 3 research papers and 4 chapters.',
    email: 'sonu.kumavat@slrtce.in'
  }
];

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Advisory Board</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our esteemed advisory board comprises visionary leaders and industry experts guiding the 
              strategic direction and scholarly impact of Shivay Publications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ADVISORY_MEMBERS.map((member, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <StaffImage 
                      src={member.image} 
                      name={member.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif font-bold text-white mb-1 line-clamp-1">{member.name}</h3>
                      <p className="text-gold font-medium uppercase tracking-widest text-[10px] line-clamp-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="space-y-4 text-sm flex-grow">
                    <li className="flex items-start gap-3 flex-grow">
                      <GraduationCap size={18} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium leading-relaxed">{member.bio}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase size={18} className="text-primary flex-shrink-0" />
                      <span className="text-gray-600 font-semibold">{member.department}</span>
                    </li>
                  </ul>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    <Mail size={18} className="text-gold flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="text-primary font-bold hover:text-gold transition-colors truncate">Contact Advisor</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
