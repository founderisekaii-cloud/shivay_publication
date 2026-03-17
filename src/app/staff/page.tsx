import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import StaffImage from '@/components/ui/StaffImage';

export const metadata = {
  title: 'Editorial Board & Staff | Shivay Publication',
  description: 'Meet our distinguished global editorial board and publication staff.',
};

const STAFF_MEMBERS: any[] = [
  {
    id: 1,
    name: 'Adv. Hardik M Goradiya',
    role: 'Chief Executive Officer',
    department: 'Editorial Board Member',
    image: '/staff/hardik_goradiya.jpg',
    bio: 'Boasts a diverse array of achievements in academia and professional development. Holds 5 Patents (3 Indian, 2 International) in AI-based digital marketing. Has been in Academics for 15 years, contributed to 30+ research papers, and authored 27 books.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 2,
    name: 'Mrs. Nilam H. Goradiya',
    role: 'Chief Operating Officer',
    department: 'Editorial Board Member',
    image: '/staff/nilam_goradiya.jpg',
    bio: 'Assistant Professor at Nirmala Memorial Foundation College. Holds 5 Patents (3 Indian, 2 International) in AI and ML devices. Authored 15+ research papers and 25 books. Recipient of Best Researcher award.',
    email: 'nilamgoradiya@nirmala.edu.in',
    linkedin: 'https://nmfdegree.edu.in/bms-faculty-details.php',
    website: 'https://nmfdegree.edu.in/bms-faculty-details.php'
  },
  {
    id: 3,
    name: 'CS Khushboo Bidawatka',
    role: 'Chief Financial Officer',
    department: 'Editorial Board Member',
    image: '/staff/khushboo_bidawatka.jpg',
    bio: 'Excels in academics, research, and teaching. Holds 5 Patents (3 Indian, 2 International). Honored with 2nd Best Research Paper Award at International conference. All India Faculty teaching CA & CS students.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 4,
    name: 'Dr. G. D. Giri',
    role: 'Chief Information Officer',
    department: 'Editorial Board Member',
    image: '/staff/gd_giri.jpg',
    bio: 'Principal of Thakur Shyamnarayan Degree College with 35+ years experience. Holds 2 Patents. Authored over 30 papers. PhD guide at University of Mumbai shaping the next generation of scholars.',
    email: 'principal@tsdcmumbai.in',
    linkedin: 'https://www.tsdcmumbai.in/principal’s-message.php',
    website: 'https://www.tsdcmumbai.in/principal’s-message.php'
  },
  {
    id: 5,
    name: 'Dr. Sanjay Mishra',
    role: 'Chief Marketing Officer',
    department: 'Editorial Board Member',
    image: '/staff/sanjay_mishra.jpg',
    bio: 'Principal at Shree L R Tiwari Degree College. Over 47 research paper presentations and 2 national patents. Received Best Teacher and Outstanding Faculty Mentor awards.',
    email: 'principal@slrtdc.in',
    linkedin: 'https://slrtdc.in/about-us/principals-desk/',
    website: 'https://slrtdc.in/about-us/principals-desk/'
  },
  {
    id: 6,
    name: 'Dr. Udaybhan Yadav',
    role: 'Certified Human Resource Manager',
    department: 'Editorial Board Member',
    image: '/staff/udaybhan_yadav.jpg',
    bio: 'Seasoned educator with Ph.D. in Botany. Over 40 published research papers in UGC and CARE LISTED-I journals. Showcases innovative prowess with an Indian patent.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 7,
    name: 'CA Dr. Mahesh Gour',
    role: 'Chief Legal Officer',
    department: 'Editorial Board Member',
    image: '/staff/mahesh_gour.jpg',
    bio: 'Renowned nationally for expertise in Indirect Taxation. PhD in Management of Taxation, MBA, LLB(p). Director at SDMA Tax Consultants and founder of Aaditya Foundation.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 8,
    name: 'Mrs. Shrishti Narottam Gadia',
    role: 'Chief Compliance Officer',
    department: 'Editorial Board Member',
    image: '/staff/shrishti_gadia.jpg',
    bio: 'Decade of experience in Company Secretarial and Legal domain. Expertise in company law, SEBI, NBFC, and ESG initiatives. Currently pursuing Executive MBA applied finance at Narsee Monjee.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 9,
    name: 'Dr. Bhakti Chaudhari',
    role: 'Chief Strategy Officer',
    department: 'Board Member',
    image: '/staff/bhakti_chaudhari.jpg',
    bio: '19 years of experience. Coordinator for B.Sc CS and M.Sc IT at Nirmala Memorial Foundation College. Specializes in Blockchain, Data Science, and Information Security.',
    email: 'bhaktichaudhari@nirmala.edu.in',
    linkedin: 'https://www.nmfdegree.edu.in/bsccs-faculty-details.php',
    website: 'https://www.nmfdegree.edu.in/bsccs-faculty-details.php'
  },
  {
    id: 10,
    name: 'Dr. Swati Agrawal',
    role: 'Board Member',
    department: 'Board Member',
    image: '/staff/swati_agarwal.jpg',
    bio: 'Dedicated academic professional and Certified Career Planner with expertise in Marketing, Finance, CSR, and Digital Transformation. Ph.D. in Management from Sabarmati University. Holds a Govt of India copyright for Social Media Influencer Marketing in Retail.',
    email: 'swati.agrawal@atharvaims.edu.in',
    linkedin: 'https://www.atharvaims.edu.in/faculty.php',
    website: 'https://www.atharvaims.edu.in/faculty.php'
  },
  {
    id: 11,
    name: 'Dr. Sandhya Shetty',
    role: 'Board Member',
    department: 'Board Member',
    image: '/staff/sandhya_shetty.jpg',
    bio: 'Assistant Professor & Head of Humanities at Thakur Shyamnaryan Engineering College. PhD from Maryland State University, USA. Recognized with the Bharat Samman Award.',
    email: 'support@shivaypublications.com',
    linkedin: '#',
    website: '#'
  },
  {
    id: 12,
    name: 'Ms. Shweta Chaturvedi',
    role: 'Board Member',
    department: 'Board Member',
    image: '/staff/shweta_chaturvedi.jpg',
    bio: 'In-charge Principal at Shree L.R. Tiwari College of Law. Excels in academia with publications in UGC CARE-listed journals. Eight years of legal practice in civil and criminal law.',
    email: 'principalslrtclaw@rahuleducation.com',
    linkedin: 'https://www.slrtcl.in/about-us/principal-desk/',
    website: 'https://www.slrtcl.in/about-us/principal-desk/'
  },
  {
    id: 13,
    name: 'Dr. Monika Shrimali',
    role: 'Board Member',
    department: 'Faculty at Management Department',
    image: '/staff/monika_shrimali.jpg',
    bio: 'Assistant Professor at Atharva Institute of Management Studies with over a decade of expertise. PhD and NET qualified in Management. Extensive publications in prestigious SCOPUS and ABDC journals. Author of "Marketing of Financial Services".',
    email: 'monika.shrimali@atharvaims.edu.in',
    linkedin: 'https://www.atharvaims.edu.in/faculty.php',
    website: 'https://www.atharvaims.edu.in/faculty.php'
  },
  {
    id: 14,
    name: 'Dr. Uma Goradiya',
    role: 'Board Member',
    department: 'Board Member',
    image: '/staff/uma_goradiya.jpg',
    bio: 'Associate Professor & Deputy HOD of Computer Engineering at Shree L.R. Tiwari College. Specialized in Data Mining and Science. Over 10 years of teaching experience.',
    email: 'uma.goradiya@slrtce.in',
    linkedin: 'https://slrtce.in/departments/computer-engineering/faculty',
    website: 'https://slrtce.in/departments/computer-engineering/faculty'
  },
  {
    id: 15,
    name: 'Ms. Sonu Kumavat',
    role: 'Board Member',
    department: 'Board Member',
    image: '/staff/sonu_kumavat.jpg',
    bio: 'Assistant Professor holding an M.E. in Computer Engineering. Holds an Indian Patent for ML Device. Former Infosys engineer with industrial and academic expertise.',
    email: 'sonu.kumavat@slrtce.in',
    linkedin: 'https://slrtce.in/departments/information-technology/faculty',
    website: 'https://slrtce.in/departments/information-technology/faculty'
  }
];

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary text-white pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Editorial Board & Staff</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our prestigious board comprises global leaders committed to maintaining the highest
              standards of academic integrity, rigorous peer review, and continuous innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STAFF_MEMBERS.map((member, idx) => (
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
                <div className="p-6">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3 flex-grow">
                      <GraduationCap size={18} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium leading-relaxed">{member.bio}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase size={18} className="text-primary flex-shrink-0" />
                      <span className="text-gray-600 font-semibold">{member.department}</span>
                    </li>
                    <li className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                      <Mail size={18} className="text-gold flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="text-primary font-bold hover:text-gold transition-colors truncate">Contact Expert</a>
                    </li>
                    {member.website !== '#' && (
                      <li className="flex items-center gap-3 mt-2">
                        <ExternalLink size={18} className="text-gold flex-shrink-0" />
                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-gold transition-colors truncate">
                          Institutional Profile
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
