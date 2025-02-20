import Link from 'next/link';
import { Logo } from './Logo';
import { Search } from './Search';
import { Icon } from './Icon';

export type TopBarProps = {
  initialSearchValue: string;
};

export function TopBar() {
  return (
    <header className="px-4 md:px-8 py-4 border-b shadow flex items-center gap-12 justify-between">
      <div className="basis-12 md:basis-48 flex-shrink-0">
        <Link href="/">
          <span className="md:hidden">
            <Icon />
          </span>
          <span className="hidden md:block">
            <Logo />
          </span>
        </Link>
      </div>
      <div className="w-full max-w-xl">
        <Search />
      </div>
    </header >
  );
}
