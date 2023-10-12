import styles from "./SimilarProducts.module.scss";
import { ProductCard } from "@/components/cards";

const SimilarProducts = ({ products }) => {
  if (products.length === 0) return;
  return (
    <div className={styles.container}>
      <h1>complete the look</h1>
      <div className={styles.grid}>
        {products.slice(0, 6).map((item, index) => {
          return (
            <ProductCard
              slug={item.slug}
              title={item?.name}
              price={item.price}
              image={item.image}
              key={`product-card-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
