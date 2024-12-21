import React from "react";
import styles from "../styles/PriceRange.module.css";

const PriceRange = ({ priceRange, setFilters }) => {
  const handleMinChange = (e) => {
    const minPrice = e.target.value ? parseInt(e.target.value, 10) : ""; // Empty when cleared
    setFilters({ ...priceRange, min: minPrice });
  };

  const handleMaxChange = (e) => {
    const maxPrice = e.target.value ? parseInt(e.target.value, 10) : ""; // Empty when cleared
    setFilters({ ...priceRange, max: maxPrice });
  };

  return (
    <div className={styles.priceRange}>
      <h3>Price Range</h3>
      <div>
        <input
          type="number"
          value={priceRange.min}
          onChange={handleMinChange}
          placeholder="Min"
        />
        <input
          type="number"
          value={priceRange.max}
          onChange={handleMaxChange}
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default PriceRange;
