import { useEffect, useState } from "react";
import styles from "./pagination.module.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
};

export const Pagination = <T,>({
  currentPage,
  totalPages,
  paginate,
}: PaginationProps) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const generateArray = (length: number) => {
    return Array.from({ length }, (_, i) => i + 1);
  };

  useEffect(() => {
    setPageNumbers(generateArray(totalPages));
  }, [totalPages]);

  return (
    <>
      <ul className={styles.pagination}>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={`${styles.pageNumber} ${pageNumber === currentPage ? styles.active : ""}`}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </>
  );
};
