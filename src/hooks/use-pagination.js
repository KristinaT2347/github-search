import { useMemo } from "react";

export const usePagination = ({ items, maxItemsPerPage }) => {
  return useMemo(() => {
    if (!items) {
      return null;
    }

    const pages = [];

    let page = [];

    items.forEach((item) => {
      page.push(item);

      if (page.length >= maxItemsPerPage) {
        pages.push(page);
        page = [];
      }
    });

    if (page.length) {
      pages.push(page);
    }

    return pages;
  }, [items, maxItemsPerPage]);
};
