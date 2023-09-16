"use client";
import styles from "./ProductDescription.module.scss";

const ProductDescription = ({ title, price, description }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <span>{price}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
