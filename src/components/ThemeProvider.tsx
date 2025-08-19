import React, { useEffect } from 'react';
import { useThemeStore } from '../stores/useThemeStore';
import { useLanguageStore } from '../stores/useLanguageStore';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply theme
    root.classList.add('dark');
    
    // Apply language direction
    if (language === 'ar') {
      root.classList.add('rtl');
      root.dir = 'rtl';
      root.lang = 'ar';
    } else {
      root.classList.remove('rtl');
      root.dir = 'ltr';
      root.lang = 'en';
    }
  }, [theme, language]);

  return <>{children}</>;
};