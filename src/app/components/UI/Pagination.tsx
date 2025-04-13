import Link from 'next/link';

interface PaginationProps {
  totalPages: number;
  page: number;
  createPageUrl: (page: number) => string;
}

export default function Pagination({
  totalPages,
  page,
  createPageUrl,
}: PaginationProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {page > 1 && (
        <Link
          href={createPageUrl(page - 1)}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          Previous
        </Link>
      )}

      <span className="px-4 py-2">
        Page {page} of {totalPages}
      </span>

      {page < totalPages && (
        <Link
          href={createPageUrl(page + 1)}
          className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          Next
        </Link>
      )}
    </div>
  );
}
