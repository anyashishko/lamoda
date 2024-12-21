import React from "react";
import styles from "../styles/ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.productItem}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Color: {product.color}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.toFixed(1)}</p>
    </div>
  );
};

export default ProductItem;
