import { MoviesQueryQuery } from '@/gql/graphql'
import { IconStarFilled } from '@tabler/icons-react';
import Image from 'next/image'

export default function MovieCardSkeleton() {
  return (
    <div className="rounded-2xl animate-pulse relative aspect-[2/3] overflow-hidden bg-gray-200" />
  );
}
