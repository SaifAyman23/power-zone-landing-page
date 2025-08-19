import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageStore {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  setLanguage: (language: 'en' | 'ar') => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: 'en',
      toggleLanguage: () => set((state) => ({ language: state.language === 'en' ? 'ar' : 'en' })),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);