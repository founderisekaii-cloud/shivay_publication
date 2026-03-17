'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Dr. Sarah Jenkins',
    role: 'Professor of Computer Science, MIT',
    text: 'Shivay Publication offered an incredibly rigorous yet fast-tracked peer review process. The ISBN allocation for our symposium proceedings was seamless.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Prof. Ananya Sharma',
    role: 'Lead Researcher, IIT Delhi',
    text: 'A highly prestigious platform. Their editorial board provided invaluable feedback, enhancing the quality of our latest metadata analysis paper.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Michael Chen',
    role: 'Director, Global Health Institute',
    text: 'The DOI integration and post-publication indexing have significantly boosted our research visibility. The support team is exceptionally responsive.',
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-12 py-16">
      <div className="absolute top-0 left-0 text-gold/20 -z-10">
        <Quote size={120} />
      </div>

      <div className="flex justify-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
          What the Academic Community Says
        </h2>
      </div>

      <div className="relative overflow-hidden min-h-[250px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-gold fill-gold" size={24} />
              ))}
            </div>
            <p className="text-xl md:text-2xl italic text-secondary-light mb-8 leading-relaxed">
              &quot;{reviews[currentIndex].text}&quot;
            </p>
            <div>
              <h4 className="font-bold text-primary text-lg">{reviews[currentIndex].name}</h4>
              <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-1">
                {reviews[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-8 space-x-4 flex">
        <button
          onClick={prevReview}
          className="p-3 bg-white rounded-full shadow-lg text-primary hover:text-gold hover:scale-110 transition-all border border-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-8 space-x-4 flex">
        <button
          onClick={nextReview}
          className="p-3 bg-white rounded-full shadow-lg text-primary hover:text-gold hover:scale-110 transition-all border border-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-300 hover:bg-gold/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
