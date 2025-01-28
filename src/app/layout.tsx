'use client'

import '@/styles/globals.css';
import { ReactNode } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className="bg-gray-50 text-gray-900">
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </body>
      </LanguageProvider>
    </html>
  );
}
