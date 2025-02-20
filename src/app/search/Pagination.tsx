'use client';

import { CmButton } from '@/components/CmButton';
import { MoviesQueryQuery } from '@/gql/graphql';
import { useRouterPush } from '@/hooks/useRouterPush';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export type PaginationProps = {
  pagination: NonNullable<
    NonNullable<MoviesQueryQuery['movies']>['pagination']
  >;
};

export default function Pagination({ pagination }: PaginationProps) {
  const { page, totalPages } = pagination;
  const routerPush = useRouterPush();

  const handlePageUpdate = (newPage: number) => {
    routerPush({
      queryParams: {
        page: newPage.toString(),
      },
    });
  };

  return (
    <nav className="flex justify-between md:justify-start items-center gap-4">
      <CmButton
        variant="neutral"
        disabled={page === 1}
        onClick={() => handlePageUpdate(page - 1)}
      >
        <IconChevronLeft />
      </CmButton>
      <div>
        Page <strong>{pagination.page}</strong> of {pagination.totalPages}
      </div>
      <CmButton
        variant="neutral"
        disabled={page === totalPages}
        onClick={() => handlePageUpdate(page + 1)}
      >
        <IconChevronRight />
      </CmButton>
    </nav>
  );
}
