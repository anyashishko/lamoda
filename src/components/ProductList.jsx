import React from "react";
import ProductItem from "./ProductItem";
import styles from "../styles/ProductList.module.css";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No products found for your search.</p>;
  }

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
