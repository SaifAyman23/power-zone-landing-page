import { useLanguageStore } from '../stores/useLanguageStore';
import { translations, TranslationKey } from '../utils/translations';

export const useTranslation = () => {
  const { language } = useLanguageStore();
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t, language };
};