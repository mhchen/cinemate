import { type Movie } from '@/gql/graphql';
import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import useMeasure from 'react-use-measure';
import { AnimatePresence } from 'motion/react';
import { cva } from 'class-variance-authority';

const ISO_RUNTIME_RE = /PT(?:(\d+)H)?(\d+)M/;

function isoDurationToRuntime(isoDuration: string | null | undefined) {
  if (!isoDuration) return null;

  const result = isoDuration.match(ISO_RUNTIME_RE)?.map(Number);
  if (!result) return null;

  const [, hours, minutes] = result;
  const totalMinutes = (hours || 0) * 60 + minutes;
  return `${totalMinutes} min`;
}

export function MovieTitle({
  movie,
  size = 'md',
}: {
  movie: Movie;
  size?: 'md' | 'lg';
}) {
  const className = cva(['font-semibold'], {
    variants: {
      size: {
        md: 'text-lg leading-6',
        lg: 'text-2xl',
      },
    },
  })({ size });

  return (
    <motion.div
      layout="position"
      className={className}
      layoutId={`movie-title-${movie.id}`}
    >
      {movie.title}
    </motion.div>
  );
}

export function MovieSupplementalInfo({ movie }: { movie: Movie }) {
  const movieReleaseYear = movie.datePublished?.split('-')[0];
  const movieSupplementalInfo = [
    movieReleaseYear,
    isoDurationToRuntime(movie.duration),
    movie.rating,
  ]
    .filter(Boolean)
    .join(' • ');

  return (
    <motion.div
      layout="position"
      className="text-sm text-gray-300"
      layoutId={`movie-info-${movie.id}`}
    >
      {movieSupplementalInfo}
    </motion.div>
  );
}

export function MovieRating({ ratingValue }: { ratingValue: number }) {
  return (
    <div className="py-1 px-2 rounded-full text-white bg-black/60 font-bold flex items-center gap-1 text-sm">
      <IconStarFilled className="fill-yellow-500" size={12} />
      {ratingValue.toFixed(1)}
    </div>
  );
}

export function MoviePoster({ movie }: { movie: Movie }) {
  if (movie.posterUrl) {
    return (
      <Image
        src={movie.posterUrl}
        alt=""
        fill
        className="object-cover"
        sizes="250px"
      />
    );
  } else {
    return <div className="bg-gray-300 inset-0 absolute" />;
  }
}

export default function MovieCard({
  movie,
  onClick,
  previousSelectedMovie,
}: {
  movie: Movie;
  previousSelectedMovie: Movie | null;
  onClick: () => void;
}) {
  const [ref, measurements] = useMeasure();

  return (
    <motion.div
      className="rounded-2xl relative aspect-[2/3] overflow-hidden"
      layoutId={`movie-card-${movie.id}`}
      layout
      style={{
        height: measurements.height ? measurements.height : undefined,
        zIndex: previousSelectedMovie?.id === movie.id ? 10 : 'auto',
      }}
    >
      <button ref={ref} className="h-full text-left" onClick={onClick}>
        <MoviePoster movie={movie} />
        {movie.ratingValue && (
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-4 right-4"
            >
              <MovieRating ratingValue={movie.ratingValue} />
            </motion.div>
          </AnimatePresence>
        )}
        <div className="absolute bottom-0 w-full h-[40%] text-white bg-gradient-to-b from-black/0 via-black/60 to-black/60">
          <div className="absolute bottom-0 px-4 pb-4 space-y-1">
            <MovieTitle movie={movie} />
            <MovieSupplementalInfo movie={movie} />
          </div>
        </div>
      </button>
    </motion.div>
  );
}
