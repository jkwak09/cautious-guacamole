import React from "react";
import { Link } from "gatsby";


function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {

  const totalPages = Math.ceil(totalCount / 3);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  return (
      <>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={`${pathPrefix}${prevPage}`}
      >
        {prevPage <= 0 ? `` : `← Previous`}
      </Link>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? null : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages ? `No more posts` : `Next →`}
      </Link>
      </>
  );
}

export default Pagination;