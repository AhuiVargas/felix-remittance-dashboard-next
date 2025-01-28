import '@/styles/globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="shadow-md bg-white">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">Félix Pago</h1>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
