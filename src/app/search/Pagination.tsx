import { Button } from "@/components/Button"
import { MoviesQueryQuery } from "@/gql/graphql"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

export type PaginationProps = {
  pagination: NonNullable<NonNullable<MoviesQueryQuery['movies']>['pagination']>;
}

export default function Pagination({ pagination }: PaginationProps) {
  const { page, totalPages } = pagination;
  return (
    <nav className="flex justify-between md:justify-start items-center gap-8">
      <Button variant="neutral" size="small" disabled={page === 1}>
        <IconChevronLeft />
      </Button>
      <div>
        <strong>{pagination.page}</strong> of {pagination.totalPages}
      </div>
      <Button variant="neutral" size="small" disabled={page === totalPages}>
        <IconChevronRight />
      </Button>
    </nav>
  )
}
