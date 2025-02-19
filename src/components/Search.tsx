'use client';

import { FormEvent, useState } from 'react';
import { Button } from './Button';
import { IconSearch } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export type SearchProps = {
  initialValue?: string;
};

export function Search({ initialValue = '' }: SearchProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/search/${encodeURIComponent(searchValue)}`);
  };

  return (
    <form className="relative w-full" onSubmit={handleSearch}>
      <input
        type="text"
        className="py-4 px-4 rounded-lg border w-full"
        placeholder="Search for a movie"
        aria-label="Search for a movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2 items-center">
        <IconSearch size={16} />
        Search
      </Button>
    </form>
  );
}
