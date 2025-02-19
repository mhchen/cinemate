import { TopBar } from '@/components/TopBar';
import { ReactNode, use } from 'react';
import { FilterBar } from './FilterBar';

export default function SearchLayout({ children, params }: { children: ReactNode, params: Promise<{ query: string }> }) {
  const { query } = use(params);

  return (
    <>
      <TopBar initialSearchValue={query} />
      <main className="container mx-auto pt-12 space-y-8 px-4 md:px-8 pb-16">
        <FilterBar />
        {children}
      </main>
    </>
  );
}
