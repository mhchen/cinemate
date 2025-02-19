import { TopBar } from '@/components/TopBar';
import { SearchSidebar } from './SearchSidebar';
import { ReactNode, use } from 'react';
import { FilterBar } from './FilterBar';

export default function SearchLayout({ children, params }: { children: ReactNode, params: Promise<{ query: string }> }) {
  const { query } = use(params);

  return (
    <>
      <TopBar initialSearchValue={query} />
      <main className="container mx-auto pt-12 space-y-8">
        <FilterBar />
        {children}
      </main>
    </>
  );
}
