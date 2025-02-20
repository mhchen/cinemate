import { TopBar } from '@/components/TopBar';
import { ReactNode } from 'react';
import { FilterBar } from './FilterBar';

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TopBar />
      <main className="container mx-auto pt-12 space-y-8 px-4 md:px-8 pb-16">
        <FilterBar />
        {children}
      </main>
    </>
  );
}
