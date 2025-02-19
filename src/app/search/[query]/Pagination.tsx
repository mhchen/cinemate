import { Button } from "@/components/Button"
import { MoviesQueryQuery } from "@/gql/graphql"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

export type PaginationProps = {
  pagination: NonNullable<NonNullable<MoviesQueryQuery['movies']>['pagination']>;
}

export default function Pagination({ pagination }: PaginationProps) {
  return (
    <nav className="flex justify-between w-full max-w-lg">
      <Button variant="neutral" size="small">
        <IconChevronLeft />
      </Button>
      <div>
        <strong>{pagination.page}</strong> of {pagination.totalPages}
      </div>
      <Button variant="neutral" size="small">
        <IconChevronRight />
      </Button>
    </nav>
  )
}
