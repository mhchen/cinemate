import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import {
  MoviePoster,
  MovieRating,
  MovieSupplementalInfo,
  MovieTitle,
} from './MovieCard';
import { Movie } from '@/gql/graphql';

export type SelectedMovieDialogProps = {
  selectedMovie: Movie;
  onClose: () => void;
};

export function SelectedMovieDialog({
  onClose,
  selectedMovie,
}: SelectedMovieDialogProps) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="bg-black/80 fixed inset-0" />
        <DialogContent
          forceMount
          className="inset-0 fixed flex items-center justify-center !pointer-events-none"
        >
          <DialogDescription>Film information overlay</DialogDescription>
          <AnimatePresence initial={false}>
            <motion.div
              className="fixed rounded-lg w-full max-w-md overflow-hidden aspect-[2/3] z-10 pointer-events-auto"
              layoutId={`movie-card-${selectedMovie.id}`}
            >
              <DialogTitle className="sr-only">
                {selectedMovie.title}
              </DialogTitle>
              <MoviePoster movie={selectedMovie} />
              <div className="absolute bottom-0 w-full h-[60%] text-white bg-gradient-to-b from-black/0 via-black/60 to-black/60">
                <div className="absolute bottom-0 px-4 pb-4 space-y-2 w-full">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <MovieTitle size="lg" movie={selectedMovie} />
                      <MovieSupplementalInfo movie={selectedMovie} />
                    </div>
                    {selectedMovie.ratingValue && (
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <MovieRating ratingValue={selectedMovie.ratingValue} />
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {selectedMovie.summary}
                  </motion.div>
                </div>
              </div>
              <DialogClose asChild>
                <button className="rounded-full text-white bg-black/60 p-2 absolute top-4 right-4 cursor-pointer">
                  <IconX size={24} />
                </button>
              </DialogClose>
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
