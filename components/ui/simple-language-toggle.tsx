// filepath: c:\Users\Gonzalo\Downloads\portfolio-template-2\project\components\simple-language-toggle.tsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function SimpleLanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
      <Globe className="h-[1.2rem] w-[1.2rem] mr-1" />
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
}