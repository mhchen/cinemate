'use client';

import { GenresQueryQuery } from "@/gql/graphql";
import { useRouterPush } from "@/hooks/useRouterPush";

export type GenresSelectProps = {
  genres: NonNullable<NonNullable<GenresQueryQuery['genres']>['nodes']>
}

export function GenresSelect({ genres }: GenresSelectProps) {
  const routerPush = useRouterPush();
  const handleUpdateGenre = (genre: string) => {
    routerPush({
      queryParams: {
        genre,
        page: '1',
      }
    })
  }

  return (
    <select className="bg-none cursor-pointer apperance-none border rounded py-2 px-4 border-gray-300" onChange={(e) => handleUpdateGenre(e.target.value)}>
      <option value="">All genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.title!}>{genre.title}</option>
      ))}
    </select>
  )
}
