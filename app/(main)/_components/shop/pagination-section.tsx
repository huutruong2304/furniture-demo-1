'use client';
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  totalPage: number;
};

const DEFAULT_PAGE = 1;
const PaginationSection = ({ totalPage = 1 }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || DEFAULT_PAGE;

  const createPageURL = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('page', page.toString());
    return `${pathname}?${newSearchParams.toString()}`;
  };

  const renderPaginationItems = () => {
    let visiblePages: (number | string)[] = [
      1,
      Math.max(1, page - 1),
      page,
      Math.min(totalPage, page + 1),
      totalPage,
    ];

    if (Number(visiblePages[1]) > 2) visiblePages.splice(1, 0, 'ellipsis-start');
    if (Number(visiblePages[visiblePages.length - 2]) < totalPage - 1)
      visiblePages.splice(visiblePages.length - 1, 0, 'ellipsis-end');

    visiblePages = Array.from(new Set(visiblePages));

    return visiblePages.map((item, index) => {
      return typeof item === 'string' && item?.includes('ellipsis') ? (
        <PaginationItem key={index} className="pagination-item">
          <PaginationEllipsis />
        </PaginationItem>
      ) : (
        <PaginationItem key={index} className={`pagination-item${item === page ? '-active' : ''}`}>
          <Link href={createPageURL(Number(item))} aria-label={'Go to page ' + item}>
            {item}
          </Link>
        </PaginationItem>
      );
    });
  };

  return (
    <Pagination>
      <PaginationContent className="space-x-4">
        {page > 1 && (
          <PaginationItem className="pagination-action">
            <Link href={createPageURL(page - 1)} aria-label="Next">
              Previous
            </Link>
          </PaginationItem>
        )}
        {renderPaginationItems()}
        {/*  */}
        {page < totalPage - 1 && (
          <PaginationItem className="pagination-action">
            <Link href={createPageURL(page + 1)} aria-label="Next">
              Next
            </Link>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSection;
