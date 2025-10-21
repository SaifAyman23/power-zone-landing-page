import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   { icon: Instagram, href: '#', label: 'Instagram' },
  //   { icon: Facebook, href: '#', label: 'Facebook' },
  //   { icon: Twitter, href: '#', label: 'Twitter' },
  //   { icon: Youtube, href: '#', label: 'YouTube' }
  // ];

  const phoneNumber = `+201558065231`;
  const email = `genius.ai24@gmail.com`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=اهلا%20انا%20مهتم%20بخدمة%20من%20شركتك`;

  const getVariantClass = () => {
    return 'bg-gray-50 dark:bg-gray-800/20';
  }

  const getTextClass = () => {
    return 'text-gray-900 dark:text-white';
  };

  const getCardClass = () => {
    return 'bg-gray-950 border-gray-900';
  };

  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="mb-12">
          {/* Company Info */}
          <div className="flex justify-between space-x-10 space-y-6 max-xl:grid">

            <div className="flex items-center">
              <span className="ml-3 text-3xl font-bold text-white font-russo">
                Power Zone
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              {t('footerDescription')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>{email}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>{phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>{t('contactLocation')}</span>
              </div>
            </div>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block  ${getCardClass()} border rounded-2xl p-6`}
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-gray-950" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-semibold mb-1 ${getTextClass()}`}>
                      {t('contactWhatsapp')}
                    </h3>
                    <p className={`text-xs text-gray-600 dark:text-gray-400`}>
                      {t('contactWhatsapp_desc')}
                    </p>
                  </div>
                </div>
              </a>
            </div>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Power Zone. {t('allRightsReserved')}
          </p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};