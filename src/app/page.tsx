import { CmLink } from '@/components/CmLink';
import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="max-w-3xl px-4 md:px-12 mx-auto pt-[25vh] flex flex-col gap-8 items-center">
      <Logo />
      <Suspense>
        <Search />
      </Suspense>
      <p>
        Or <CmLink href="/search">browse all movies</CmLink>
      </p>
    </div>
  );
}
