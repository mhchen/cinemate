import { Button } from './Button';
import { IconSearch } from '@tabler/icons-react';

export function Search() {
  return (
    <form className="relative w-full">
      <input
        type="text"
        className="py-4 px-4 rounded-lg shadow-lg border w-full"
        placeholder="Search for a movie title"
        aria-label="Search for a movie title"
      />
      <Button className="absolute top-1/2 right-4 -translate-y-1/2 flex gap-2 items-center">
        <IconSearch size={16} />
        Search
      </Button>
    </form>
  );
}
