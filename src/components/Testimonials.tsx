import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const testimonials = [
    {
      content: t('testimonialText'),
      author: t('testimonialAuthor'),
      role: t('testimonialRole'),
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      program: 'HIIT & Strength Program'
    },
    {
      content: 'The personalized nutrition coaching has completely transformed my relationship with food. I\'ve never felt stronger or more confident.',
      author: 'Maria Rodriguez',
      role: 'Member since 2022',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      program: 'Nutrition & Wellness Program'
    },
    {
      content: 'The boxing classes are incredible! The trainers push you to your limits while keeping it fun and engaging. Best investment I\'ve made.',
      author: 'David Kim',
      role: 'Member since 2023',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      program: 'Boxing & Conditioning'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('testimonialsTitle')}
            <br />
            <span className="text-primary-400">{t('testimonialsSubTitle')}</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black border border-gray-800 rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-primary-400 opacity-80 mb-8" />

            {/* Testimonial Content */}
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic">
              "{testimonials[currentSlide].content}"
            </blockquote>

            {/* Rating */}
            <div className="flex items-center mb-6">
              {Array.from({ length: testimonials[currentSlide].rating }).map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Author Info */}
            <div className="sm:flex mx-auto items-center justify-between">
              <div className="sm:flex mx-auto w-full items-center space-x-4 rtl:space-x-reverse">
                <div className='flex justify-center max-sm:pt-5 max-sm:mb-2'>
                  <img
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary-500"
                  />
                </div>
                <div className='max-sm:text-center max-sm:mb-5'>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentSlide].author}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentSlide].role}
                  </p>
                  <p className="text-primary-400 text-sm">
                    {testimonials[currentSlide].program}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex max-sm:justify-center items-center space-x-4 rtl:space-x-reverse">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-primary-500' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};