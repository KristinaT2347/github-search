import { useCallback, useMemo } from "react";
import { bem } from "../../utils/bem";
import "./style.css";

const { bl, el } = bem("pager");

export function Pager({
  className,
  totalPages,
  currentPage,
  label,
  onPageChange,
}) {
  const pages = useMemo(() => {
    const pages = [];

    const createPage = (n) => {
      return {
        page: n,
        onClick: () => {
          onPageChange(n);
        },
      };
    };

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(createPage(i));
      }
    } else if (currentPage <= 4) {
      for (let i = 1; i <= Math.max(currentPage + 1, 3); i++) {
        pages.push(createPage(i));
      }

      pages.push({ page: null });
      pages.push(createPage(totalPages));
    } else if (currentPage >= totalPages - 3) {
      pages.push(createPage(1));
      pages.push({ page: null });

      for (
        let i = Math.min(currentPage - 1, totalPages - 2);
        i <= totalPages;
        i++
      ) {
        pages.push(createPage(i));
      }
    } else {
      pages.push(createPage(1));
      pages.push({ page: null });

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(createPage(i));
      }

      pages.push({ page: null });
      pages.push(createPage(totalPages));
    }

    return pages;
  }, [currentPage, totalPages, onPageChange]);

  const onPrevPage = useCallback(() => {
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const onNextPage = useCallback(() => {
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange]);

  return (
    <div className={bl(undefined, [className])}>
      <div className={el("label")}>{label}</div>
      <div className={el("navigation")}>
        <button
          className={el("arrow", { isLeft: true })}
          disabled={currentPage === 1}
          onClick={onPrevPage}
        />
        <div className={el("pages")}>
          {pages.map((page, i) => (
            <button
              className={el("page", {
                isCurrent: page.page === currentPage,
                isEllipsis: !page.page,
              })}
              disabled={page.page === currentPage || !page.page}
              key={i}
              onClick={page.onClick}
            >
              {page.page || "..."}
            </button>
          ))}
        </div>
        <button
          className={el("arrow", { isRight: true })}
          disabled={currentPage === totalPages}
          onClick={onNextPage}
        />
      </div>
    </div>
  );
}
