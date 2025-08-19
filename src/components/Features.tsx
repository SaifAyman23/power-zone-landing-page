import React from 'react';
import { Zap, Shield, HeadphonesIcon, Puzzle, TrendingUp, BarChart3 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      titleKey: 'feature1Title' as const,
      descriptionKey: 'feature1Description' as const,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20'
    },
    {
      icon: Shield,
      titleKey: 'feature2Title' as const,
      descriptionKey: 'feature2Description' as const,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      icon: HeadphonesIcon,
      titleKey: 'feature3Title' as const,
      descriptionKey: 'feature3Description' as const,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Puzzle,
      titleKey: 'feature4Title' as const,
      descriptionKey: 'feature4Description' as const,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      icon: TrendingUp,
      titleKey: 'feature5Title' as const,
      descriptionKey: 'feature5Description' as const,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/20'
    },
    {
      icon: BarChart3,
      titleKey: 'feature6Title' as const,
      descriptionKey: 'feature6Description' as const,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('featuresSubtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(feature.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};