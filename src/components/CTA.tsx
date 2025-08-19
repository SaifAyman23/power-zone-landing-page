import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-black rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-black rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-black/20 rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-black" />
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            {t('ctaTitle')}
            <br />
            <span className="text-black/80">{t('ctaSubtitle')}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-black/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:sm:space-x-reverse">
            <button className="bg-black hover:bg-gray-900 text-primary-400 px-10 py-5 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 rtl:space-x-reverse">
              <span>{t('ctaButton')}</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            
            {/* <div className="text-black/70 text-sm">
              <p>✓ No credit card required</p>
              <p>✓ 7-day free trial</p>
            </div> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-black/60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-medium">10,000+ Active Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-medium">Certified Trainers</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};