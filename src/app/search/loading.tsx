import MovieCardSkeleton from './MovieCardSkeleton';
import { MoviesGrid } from './MoviesGrid';

export default function Loading() {
  return (
    <div className="animate-pulse">
      <MoviesGrid>
        {new Array(10).fill(undefined).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </MoviesGrid>
    </div>
  );
}
