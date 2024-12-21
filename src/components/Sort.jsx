import React from "react";
import styles from "../styles/Sort.module.css";

const Sort = ({ activeSort, setActiveSort }) => {
  return (
    <div className={styles.sortOptions}>
      <button
        className={`${styles.sortButton} ${activeSort === "priceAsc" ? styles.active : ""}`}
        onClick={() => setActiveSort("priceAsc")}
      >
        Lowest Price First
      </button>
      <button
        className={`${styles.sortButton} ${activeSort === "priceDesc" ? styles.active : ""}`}
        onClick={() => setActiveSort("priceDesc")}
      >
        Highest Price First
      </button>
      <button
        className={`${styles.sortButton} ${activeSort === "ratingDesc" ? styles.active : ""}`}
        onClick={() => setActiveSort("ratingDesc")}
      >
        Most Popular
      </button>
    </div>
  );
};

export default Sort;
