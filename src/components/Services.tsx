import React from 'react';
import { Zap, Heart, Flower2, Target } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: '01',
      title: t('service1'),
      icon: Zap,
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: '02',
      title: t('service2'),
      icon: Heart,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '03',
      title: t('service3'),
      icon: Flower2,
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '04',
      title: t('service4'),
      icon: Target,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      color: 'from-primary-500 to-emerald-500'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {t('servicesTitle')}
                <br />
                <span className="text-primary-400">{t('servicesSubtitle')}</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('servicesDescription')}
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group flex items-center space-x-4 rtl:space-x-reverse p-4 rounded-xl hover:bg-gray-900 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-4 rtl:space-x-reverse flex-1">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <div className="text-2xl font-bold text-gray-600 group-hover:text-primary-400 transition-colors duration-300">
                        {service.id}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative overflow-hidden rounded-xl ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                } group cursor-pointer`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">{service.title}</h4>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    <service.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};