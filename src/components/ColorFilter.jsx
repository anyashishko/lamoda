import React from "react";
import styles from "../styles/ColorFilter.module.css";

const colors = ["Red", "Blue", "Green", "Yellow", "Black"];

const ColorFilter = ({ selectedColors, setFilters }) => {
  const handleColorChange = (color) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setFilters(newColors);
  };

  return (
    <div className={styles.colorFilter}>
      <h3>Filter by Color</h3>
      <div className={styles.colorCheckboxes}>
        {colors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
