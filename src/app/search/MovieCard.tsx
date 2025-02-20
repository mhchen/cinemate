import { MoviesQueryQuery } from '@/gql/graphql'
import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image'

const ISO_RUNTIME_RE = /PT(?:(\d+)H)?(\d+)M/;

function isoDurationToRuntime(isoDuration: string | null | undefined) {
  if (!isoDuration) return null;

  const result = isoDuration.match(ISO_RUNTIME_RE)?.map(Number);
  if (!result) return null;

  const [_, hours, minutes] = result;
  const totalMinutes = (hours || 0) * 60 + minutes
  return `${totalMinutes} min`;
}


export default function MovieCard({ movie }: {
  movie: NonNullable<NonNullable<MoviesQueryQuery['movies']>['nodes']>[number]
}) {
  const movieReleaseYear = movie.datePublished?.split('-')[0];
  const movieSupplementalInfo = [movieReleaseYear, isoDurationToRuntime(movie.duration), movie.rating].filter(Boolean).join(' • ')

  return (
    <div className="rounded-2xl relative aspect-[2/3] overflow-hidden hover:scale-120">
      {movie.posterUrl ? (
        <Image src={movie.posterUrl} alt="" fill className="object-cover" />
      ) : (
        <div className="bg-gray-300 inset-0 absolute" />
      )}
      {movie.ratingValue && (
        <div className="absolute top-4 right-4 py-1 px-2 rounded-full text-white bg-black/60 font-bold flex items-center gap-1 text-sm">
          <IconStarFilled className="fill-yellow-500" size={12} />
          {movie.ratingValue.toFixed(1)}
        </div>
      )}
      <div className="absolute bottom-0 w-full h-[40%] text-white bg-gradient-to-b from-black/0 via-black/60 to-black/60">
        <div className="absolute bottom-0 px-4 pb-4 space-y-1">
          <div className="text-lg font-semibold leading-6">
            {movie.title}
          </div>
          <div className="text-sm text-gray-300">
            {movieSupplementalInfo}
          </div>
        </div>
      </div>
    </div>
  );
}
