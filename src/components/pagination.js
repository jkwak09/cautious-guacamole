import React from "react";
import { Link } from "gatsby";

import paginationStyles from "./pagination.module.css";

function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {

  const totalPages = Math.ceil(totalCount / 12);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  console.log('previous page ------>',prevPage);
  return (
      <div className={paginationStyles.paginationContainer}>
        <Link
          disabled={prevPage < 1 ? true : null}
          to={prevPage < 1 ? null : `${pathPrefix}${prevPage}`}
        >
          <span>
            {prevPage < 1 ? `☻` : `← Newer`}
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
            {nextPage > totalPages ? `No more posts` : `Older →`}
          </span>
        </Link>
      </div>
  );
}

export default Pagination;