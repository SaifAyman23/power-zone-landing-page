import React from 'react';
import { Menu, Moon, Sun, Globe, X } from 'lucide-react';
import { useThemeStore } from '../stores/useThemeStore';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../hooks/useTranslation';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  // const { theme, toggleTheme } = useThemeStore();
  const { language, toggleLanguage } = useLanguageStore();
  // const { t } = useTranslation();
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-3 text-3xl font-bold text-white font-russo">
              Power Zone
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-primary-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-primary-400 transition-all duration-200 flex items-center space-x-1 rtl:space-x-reverse"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Get Started Button */}
            {/* <button className="hidden sm:block bg-primary-500 hover:bg-primary-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              {t('getStarted')}
            </button> */}

            {/* Mobile Menu Button */}
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};