'use client';

import { MoviesQueryQuery } from '@/gql/graphql';
import { useState } from 'react';
import { MoviesGrid } from './MoviesGrid';
import invariant from 'tiny-invariant';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import EmptyState from '@/components/EmptyState';
import { MotionConfig } from 'motion/react';
import { CmButton } from '@/components/CmButton';
import { SelectedMovieDialog } from './SelectedMovieDialog';

type Movie = NonNullable<
  NonNullable<MoviesQueryQuery['movies']>['nodes']
>[number];

export type SearchPageClientProps = {
  movies: MoviesQueryQuery['movies'];
};

export function SearchPageClient({ movies }: SearchPageClientProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [previousSelectedMovie, setPreviousSelectedMovie] =
    useState<Movie | null>(null);

  invariant(movies?.nodes, 'Movies result is malformed');
  invariant(movies?.pagination, 'Movies result is malformed');

  if (movies.nodes.length === 0) {
    return (
      <EmptyState>
        <div className="space-y-4 text-center">
          <div>No movies found! Please try a different search or genre.</div>
          <CmButton href="/search">Browse all movies</CmButton>
        </div>
      </EmptyState>
    );
  }

  const handleCloseModal = () => {
    setPreviousSelectedMovie(selectedMovie);
    setSelectedMovie(null);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {selectedMovie && (
          <SelectedMovieDialog
            selectedMovie={selectedMovie}
            onClose={handleCloseModal}
          />
        )}
        <MoviesGrid>
          {movies.nodes.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              previousSelectedMovie={previousSelectedMovie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </MoviesGrid>
        <div className="mt-8">
          <Pagination pagination={movies.pagination} />
        </div>
      </div>
    </MotionConfig>
  );
}
