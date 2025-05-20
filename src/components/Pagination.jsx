import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => (
  <div className={styles.pagination}>
    <button onClick={onPrevious} disabled={currentPage === 1}>
      Previous
    </button>
    <span className={styles.pageNumber}>{currentPage}</span>
    <button onClick={onNext} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
);

export default Pagination;
