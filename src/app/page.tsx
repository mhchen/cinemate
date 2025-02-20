import { Logo } from '@/components/Logo';
import { Search } from '@/components/Search';

export default function Home() {
  return (
    <div className="max-w-3xl px-4 md:px-12 mx-auto pt-[25vh] flex flex-col gap-8 items-center">
      <Logo />
      <Search />
    </div>
  );
}
