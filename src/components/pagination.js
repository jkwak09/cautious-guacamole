import React from "react";
import { Link } from "gatsby";

import paginationStyles from "./pagination.module.css";

function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {

  const totalPages = Math.ceil(totalCount / 3);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
      <div className={paginationStyles.paginationContainer}>
        <Link
          disabled={prevPage <= 0 ? true : null}
          to={`${pathPrefix}${prevPage}`}
        >
          <span>
            {prevPage <= 0 ? `` : `← Previous`}
          </span>
        </Link>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Link
          disabled={nextPage > totalPages ? true : null}
          to={nextPage > totalPages ? null : `${pathPrefix}${nextPage}`}
        >
          <span>
            {nextPage > totalPages ? `No more posts` : `Next →`}
          </span>
        </Link>
      </div>
  );
}

export default Pagination;