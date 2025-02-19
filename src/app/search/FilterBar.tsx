import { getGenresResult } from '@/lib/auth';
import { IconFilter } from '@tabler/icons-react';
import { Suspense, use } from 'react';
import invariant from 'tiny-invariant';

function GenresSelect() {
  const { genres } = use(getGenresResult())

  invariant(genres?.nodes, 'Malformed genres result');

  return (
    <select className="cursor-pointer apperance-none border rounded py-2 px-4 border-gray-300">
      <option value="">All genres</option>
      {genres.nodes.map((genre) => (
        <option key={genre.id} value={genre.id!}>{genre.title}</option>
      ))}
    </select>
  )
}

export function FilterBar() {
  return (
    <div className="flex gap-2 items-center">
      <IconFilter />
      <Suspense>
        <GenresSelect />
      </Suspense>
    </div>
  );
}
