'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="shadow-md bg-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Félix Pago</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded ${
              language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-3 py-1 rounded ${
              language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            ES
          </button>
        </div>
      </nav>
    </header>
  );
}
