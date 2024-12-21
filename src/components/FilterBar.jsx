import React, { useState, useEffect } from "react";
import ColorFilter from "./ColorFilter";
import PriceRange from "./PriceRange";
import styles from "../styles/FilterBar.module.css";

const FilterBar = ({ filters, setFilters, initialFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setLocalFilters((prev) => ({ ...prev, searchTerm }));
    setFilters((prev) => ({ ...prev, searchTerm }));
  };

  const handleColorChange = (newColors) => {
    setLocalFilters((prev) => ({ ...prev, selectedColors: newColors }));
    setFilters((prev) => ({ ...prev, selectedColors: newColors }));
  };

  const handlePriceChange = (newRange) => {
    setLocalFilters((prev) => ({ ...prev, priceRange: newRange }));
    setFilters((prev) => ({ ...prev, priceRange: newRange }));
  };

  const handleResetFilters = () => {
    setLocalFilters(initialFilters);
    setFilters(initialFilters);
  };

  return (
    <div className={styles.filterBar}>
      <input
        type="text"
        value={localFilters.searchTerm}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className={styles.searchInput}
      />
      <ColorFilter
        selectedColors={localFilters.selectedColors}
        setFilters={handleColorChange}
      />
      <PriceRange
        priceRange={localFilters.priceRange}
        setFilters={handlePriceChange}
      />
      <div className={styles.filterActions}>
        <button onClick={handleResetFilters} className={styles.actionButton}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
