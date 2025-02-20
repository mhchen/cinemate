'use client';

import { MoviesQueryQuery } from '@/gql/graphql';
import { useState } from 'react';
import { MoviesGrid } from './MoviesGrid';
import invariant from 'tiny-invariant';
import MovieCard, {
  MovieRating,
  MovieSupplementalInfo,
  MovieTitle,
} from './MovieCard';
import Pagination from './Pagination';
import EmptyState from '@/components/EmptyState';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { IconX } from '@tabler/icons-react';

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
        No movies found! Please try a different search or genre.
      </EmptyState>
    );
  }

  const handleCloseModal = () => {
    setPreviousSelectedMovie(selectedMovie);
    setSelectedMovie(null);
  };

  return (
    <div>
      {selectedMovie && (
        <Dialog open onOpenChange={handleCloseModal}>
          <DialogPortal>
            <DialogOverlay className="bg-black/80 fixed inset-0" />
            <DialogContent
              forceMount
              className="inset-0 fixed flex items-center justify-center !pointer-events-none"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  className="fixed rounded-lg w-full max-w-md overflow-hidden aspect-[2/3] z-10 pointer-events-auto"
                  layoutId={`movie-card-${selectedMovie.id}`}
                >
                  <DialogTitle className="sr-only">
                    {selectedMovie.title}
                  </DialogTitle>
                  {selectedMovie.posterUrl ? (
                    <Image
                      src={selectedMovie.posterUrl}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="bg-gray-300 inset-0 absolute" />
                  )}
                  <div className="absolute bottom-0 w-full h-[60%] text-white bg-gradient-to-b from-black/0 via-black/60 to-black/60">
                    <div className="absolute bottom-0 px-4 pb-4 space-y-2 w-full">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <MovieTitle size="lg" movie={selectedMovie} />
                          <MovieSupplementalInfo movie={selectedMovie} />
                        </div>
                        {selectedMovie.ratingValue && (
                          <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <MovieRating
                              ratingValue={selectedMovie.ratingValue}
                            />
                          </motion.div>
                        )}
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {selectedMovie.summary}
                      </motion.div>
                    </div>
                  </div>
                  <DialogClose asChild>
                    <button className="rounded-full text-white bg-black/60 p-2 absolute top-4 right-4 cursor-pointer">
                      <IconX size={24} />
                    </button>
                  </DialogClose>
                </motion.div>
              </AnimatePresence>
            </DialogContent>
          </DialogPortal>
        </Dialog>
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
  );
}
