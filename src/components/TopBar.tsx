import Link from 'next/link';
import { CmLogo } from './CmLogo';
import { SearchForm } from './SearchForm';
import { CmIcon } from './CmIcon';
import { Suspense } from 'react';

export function TopBar() {
  return (
    <header className="px-4 md:px-8 py-4 border-b shadow flex items-center gap-12 justify-between">
      <div className="basis-12 md:basis-48 flex-shrink-0">
        <Link href="/">
          <span className="md:hidden">
            <CmIcon />
          </span>
          <span className="hidden md:block">
            <CmLogo />
          </span>
        </Link>
      </div>
      <div className="w-full max-w-xl">
        <Suspense>
          <SearchForm />
        </Suspense>
      </div>
    </header>
  );
}
