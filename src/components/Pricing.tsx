import React from 'react';
import { Check, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Pricing: React.FC = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('basicPlan'),
      price: t('basicPrice'),
      description: t('basicDescription'),
      features: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
      ],
      popular: false,
      buttonText: 'Choose Basic',
      color: 'border-gray-700'
    },
    {
      name: t('standardPlan'),
      price: t('standardPrice'),
      description: t('standardDescription'),
      features: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
        t('feature5'),
        t('feature6'),
        t('feature7'),
      ],
      popular: true,
      buttonText: 'Choose Standard',
      color: 'border-primary-500'
    },
    {
      name: t('premiumPlan'),
      price: t('premiumPrice'),
      description: t('premiumDescription'),
      features: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
        t('feature5'),
        t('feature6'),
        t('feature7'),
        t('feature8'),
        t('feature9'),
      ],
      popular: false,
      buttonText: 'Choose Premium',
      color: 'border-gray-700'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('pricingTitle')}
            <br />
            <span className="text-primary-400">{t('pricingSubtitle')}</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? `${plan.color} bg-gradient-to-br from-slate-950 to-primary-400/20  shadow-lg scale-105 shadow-primary-500/20`
                  : `${plan.color} bg-gray-950 hover:border-primary-500/50`
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /month
                  </span>
                </div>
                <p className="text-sm text-gray-500">Billed monthly</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {/* <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary-500 hover:bg-primary-600 text-black shadow-lg hover:shadow-xl'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-primary-500'
                }`}
              >
                {plan.buttonText}
              </button> */}

              {/* Money Back Guarantee */}
              {/* <p className="text-center text-sm text-gray-500 mt-4">
                30-day money-back guarantee
              </p> */}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          {/* <p className="text-gray-400 mb-4">
            All plans include access to our mobile app and community support
          </p> */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
            {/* <span>✓ 24/7 customer support</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};