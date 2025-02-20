import { use } from 'react';
import { findMovies } from '@/lib/movies-api';
import { SearchPageClient } from './SearchPageClient';

export const dynamic = 'force-dynamic';

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string; genre: string; page: string }>;
}) {
  const { search, genre, page: pageString } = use(searchParams);
  const { movies } = use(
    findMovies({
      page: Number(pageString) || 1,
      search,
      genre,
    })
  );

  return <SearchPageClient movies={movies} />;
}
