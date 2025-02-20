'use client';

import { FormEvent, useState } from 'react';
import { Button } from './Button';
import { IconSearch } from '@tabler/icons-react';
import { useRouterPush } from '@/hooks/useRouterPush';
import { useSearchParams } from 'next/navigation';

export function Search() {
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '');

  const routerPush = useRouterPush()
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    routerPush({
      queryParams: {
        search: searchValue
      },
      pathname: '/search'
    });
  };

  return (
    <form className="relative w-full" onSubmit={handleSearch}>
      <input
        type="text"
        className="py-4 px-4 rounded-lg border border-gray-300 w-full"
        placeholder="Search for a movie"
        aria-label="Search for a movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2 items-center">
        <IconSearch size={16} />
        <span className="sr-only md:not-sr-only">
          Search
        </span>
      </Button>
    </form>
  );
}
