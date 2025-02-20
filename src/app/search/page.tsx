import { use } from 'react';
import { findMovies } from '@/lib/movies-api';
import invariant from 'tiny-invariant';
import MovieCard from './MovieCard';
import { MoviesGrid } from './MoviesGrid';
import Pagination from './Pagination';
import EmptyState from '@/components/EmptyState';

export const dynamic = 'force-dynamic';

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string; genre: string, page: string }>;
}) {
  const { search, genre, page: pageString } = use(searchParams);
  const { movies } = use(
    findMovies({
      page: Number(pageString) || 1,
      search,
      genre,
    })
  );

  invariant(movies?.nodes, 'Movies result is malformed');
  invariant(movies?.pagination, 'Movies result is malformed');

  if (movies.nodes.length === 0) {
    return (
      <EmptyState>
        No movies found! Please try a different search{genre ? ' or genre' : ''}.
      </EmptyState>
    )
  }

  return (
    <div>
      <MoviesGrid>
        {movies.nodes.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
      <div className="mt-8">
        <Pagination pagination={movies.pagination} />
      </div>
    </div>
  );
}
