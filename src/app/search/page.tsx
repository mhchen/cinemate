import { use } from 'react';
import { findMovies } from '@/lib/auth';
import invariant from 'tiny-invariant';
import MovieCard from './MovieCard';
import { MoviesGrid } from './MoviesGrid';
import Pagination from './Pagination';

export const dynamic = 'force-dynamic';

export default function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ query: string }>;
  searchParams: Promise<{ search: string; genre: string }>;
}) {
  const resolvedSearchParams = use(searchParams);
  console.log({ resolvedSearchParams });
  const { query } = use(params);
  const { movies } = use(
    findMovies({
      page: 1,
      search: query,
    })
  );

  invariant(movies?.nodes, 'Movies result is malformed');
  invariant(movies?.pagination, 'Movies result is malformed');

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
