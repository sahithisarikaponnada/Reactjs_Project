import React from "react";

export default function Pagination({
  totalemployees,
  employeesPerPage,
  setCurrentPage,
  currentPage,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalemployees / employeesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="Pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
