import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                Power Zone
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transform your life with our world-class online coaching platform. Join thousands of people who have achieved their fitness and life goals with expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail className="w-5 h-5 text-green-400" />
                <span>hello@powerzone.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footerAbout')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('aboutCompany')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('aboutCareers')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('aboutPress')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('aboutContact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footerPrograms')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('programsHIIT')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('programsYoga')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('programsBoxing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('programsNutrition')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t('footerSupport')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('supportHelp')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('supportFAQ')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('supportContact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  {t('supportCommunity')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Get the latest fitness tips and exclusive offers</p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-200"
              />
              <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Power Zone. {t('allRightsReserved')}
          </p>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};