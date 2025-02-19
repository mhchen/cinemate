import Link from 'next/link';
import { Logo } from './Logo';
import { Search } from './Search';

export type TopBarProps = {
  initialSearchValue: string;
};

export function TopBar({ initialSearchValue }: TopBarProps) {
  return (
    <header className="px-4 md:px-8 py-4 border-b shadow flex items-center gap-12 justify-between">
      <Link className="basis-48 flex-shrink-0" href="/">
        <Logo hideTextOnMobile />
      </Link>
      <div className="w-full max-w-xl">
        <Search initialValue={initialSearchValue} />
      </div>
    </header>
  );
}
