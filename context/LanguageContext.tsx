// filepath: c:\Users\Gonzalo\Downloads\portfolio-template-2\project\context\LanguageContext.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (translations: Record<Language, string>) => string; // Simple translation helper
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default language

  // Helper function to get text based on current language
  const t = (translations: Record<Language, string>): string => {
    return translations[language] || translations['en']; // Fallback to English
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};