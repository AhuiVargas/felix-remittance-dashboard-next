import { ReactNode } from 'react';

interface ErrorBoundaryProps {
  hasError: boolean;
  errorMessage: string;
  children: ReactNode;
}

export default function ErrorBoundary({ hasError, errorMessage, children }: ErrorBoundaryProps) {
  if (hasError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-md text-center">
        {errorMessage}
      </div>
    );
  }

  return <>{children}</>;
}
