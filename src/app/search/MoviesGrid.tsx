import { ReactNode } from 'react';

export function MoviesGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-auto-fill gap-8">{children}</div>;
}
