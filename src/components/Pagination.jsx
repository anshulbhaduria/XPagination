import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => (
  <div className={styles.pagination}>
    <button onClick={onPrevious}>Previous</button>

    <span className={styles.pageNumber}>{currentPage}</span>

    <button onClick={onNext}>Next</button>
  </div>
);

export default Pagination;
