import React from 'react';
import { ArrowRight, Play, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gray-900 border border-gray-800 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-gray-300">Premium coaching platform</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">{t('heroTitle')}</span>
                <br />
                <span className="text-white">{t('heroTitleContinue')}</span>
                <br />
                <span className="bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                  {t('heroTitleHighlight')}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:sm:space-x-reverse">
              <button className="bg-primary-500 hover:bg-primary-600 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 rtl:space-x-reverse">
                <span>{t('getStarted')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-primary-400 transition-colors duration-200 group">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-200">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">{t('watchDemo')}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400">{t('stat1Number')}</div>
                <div className="text-sm text-gray-400">{t('stat1Label')}</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400">{t('stat2Number')}</div>
                <div className="text-sm text-gray-400">{t('stat2Label')}</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400">{t('stat3Number')}</div>
                <div className="text-sm text-gray-400">{t('stat3Label')}</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-400">{t('stat4Number')}</div>
                <div className="text-sm text-gray-400">{t('stat4Label')}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
                alt="Fitness Training"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary-400">Today's Goal</div>
                <div className="text-sm text-gray-400 mt-1">2,847 / 3,000</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute bottom-8 left-8 bg-primary-500 text-black rounded-xl p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-400" />
                </div>
                <div>
                  <div className="font-bold">Achievement Unlocked!</div>
                  <div className="text-sm opacity-80">30-Day Streak</div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-400/20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>

        {/* Workout Categories */}
        <div className="pb-20">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">Strength</span>
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">Cardio</span>
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">HIIT</span>
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">Pilates</span>
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">Boxing</span>
            <span className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-full">Core Conditioning</span>
          </div>
        </div>
      </div>
    </section>
  );
};