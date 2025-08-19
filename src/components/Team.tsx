import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Team: React.FC = () => {
  const { t } = useTranslation();

  const trainers = [
    {
      name: 'Sarah Mitchell',
      specialty: 'HIIT & Strength',
      experience: '8 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1',
      certifications: ['NASM-CPT', 'CrossFit L2']
    },
    {
      name: 'James Carter',
      specialty: 'Boxing & Conditioning',
      experience: '12 years',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1',
      certifications: ['USA Boxing', 'ACSM-CPT']
    },
    {
      name: 'Maya Lin',
      specialty: 'Yoga & Mindfulness',
      experience: '6 years',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1',
      certifications: ['RYT-500', 'Meditation Teacher']
    },
    {
      name: 'Marcus Johnson',
      specialty: 'Strength & Powerlifting',
      experience: '10 years',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&dpr=1',
      certifications: ['NSCA-CSCS', 'USAPL Coach']
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('teamTitle')}
            <br />
            <span className="text-primary-400">{t('teamSubtitle')}</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('teamDescription')}
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Trainer Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{trainer.rating}</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-primary-500 text-black rounded-lg px-3 py-1 flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{trainer.experience}</span>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-primary-400 font-medium">{trainer.specialty}</p>
                </div>

                {/* Certifications */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book Session Button */}
                <button className="w-full bg-gray-800 hover:bg-primary-500 text-white hover:text-black py-3 rounded-lg font-semibold transition-all duration-200 transform group-hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-400">50+</div>
            <div className="text-gray-400">Certified Trainers</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-400">15+</div>
            <div className="text-gray-400">Specializations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-400">4.9</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-400">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};