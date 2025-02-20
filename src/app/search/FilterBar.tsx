import { getGenresResult } from '@/lib/movies-api';
import { IconFilter } from '@tabler/icons-react';
import { Suspense, use } from 'react';
import invariant from 'tiny-invariant';
import { GenresSelect } from './GenresSelect';

function GenresSelectServer() {
  const { genres } = use(getGenresResult())

  invariant(genres?.nodes, 'Malformed genres result');

  return <GenresSelect genres={genres.nodes} />;

}

export function FilterBar() {
  return (
    <div className="flex gap-4 items-center">
      <IconFilter />
      <Suspense fallback={<div className="animate-pulse bg-gray-200 w-32 h-10 rounded" />}>
        <GenresSelectServer />
      </Suspense>
    </div >
  );
}
