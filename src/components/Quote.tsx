import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import mainLogo from "../../public/img/Group 221.png";

export const Quote: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center mb-20'>
          <img src={mainLogo} className='w-[70%] sm:w-[40%]' alt="" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-16 h-16 text-primary-400 mx-auto mb-8 opacity-80" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed italic">
            "{t('quoteText')}"
          </blockquote>
        </div>
      </div>
    </section>
  );
};