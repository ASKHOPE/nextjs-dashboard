'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import '@/styles/globals.css'; // Import your CSS file

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (page: number | string) => {
    return `?page=${page}`; // Update the URL with the new page
  };

  return (
    <div className="pagination-container">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      <div className="pagination-numbers">
        {allPages.map((page, index) => {
          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              isActive={currentPage === page}
              onClick={() => typeof page === 'number' && onPageChange(page)}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  onClick,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return isActive ? (
    <div className="pagination-number active">{page}</div>
  ) : (
    <Link href={href} className="pagination-number" onClick={onClick}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
  onClick,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
  onClick?: () => void;
}) {
  return isDisabled ? (
    <div className={`pagination-arrow disabled ${direction}`}>
      {direction === 'left' ? <ArrowLeftIcon className="icon" /> : <ArrowRightIcon className="icon" />}
    </div>
  ) : (
    <Link className={`pagination-arrow ${direction}`} href={href} onClick={onClick}>
      {direction === 'left' ? <ArrowLeftIcon className="icon" /> : <ArrowRightIcon className="icon" />}
    </Link>
  );
}
