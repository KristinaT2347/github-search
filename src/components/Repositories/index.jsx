import { bem } from "../../utils/bem";
import { Pager } from "../../components/Pager";
import { useCallback, useState } from "react";
import { Repository } from "../Repository";
import { usePagination } from "../../hooks/use-pagination";
import "./style.css";

const { bl, el } = bem("repositories");

export function Repositories({ className, userName, repositories }) {
  const [page, setPage] = useState(0);

  const maxItemsPerPage = 4;

  const repositoryPages = usePagination({
    items: repositories,
    maxItemsPerPage,
  });
  const totalPages = repositoryPages?.length;

  const pageItems = repositoryPages[page];

  const onPageChange = useCallback((n) => {
    setPage(n - 1);
  }, []);

  const pagerLabel = `${page * maxItemsPerPage + 1}-${
    page * maxItemsPerPage + pageItems.length
  } of ${repositories.length} items`;

  return (
    <div className={bl(undefined, [className])}>
      <h2 className={el("title")}>Repositories ({repositories.length})</h2>
      {pageItems.map(({ name, description, html_url }, i) => (
        <Repository
          className={el("repository")}
          key={i}
          name={name}
          description={description}
          url={html_url}
        />
      ))}
      <Pager
        className={el("pager")}
        totalPages={totalPages}
        currentPage={page + 1}
        label={pagerLabel}
        onPageChange={onPageChange}
      />
    </div>
  );
}
