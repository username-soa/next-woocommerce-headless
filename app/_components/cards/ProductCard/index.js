import Link from "next/link";
import styles from "./ProductCard.module.scss";
import { BlurredImage } from "@/components/ui";

const ProductCard = ({ alt, title, price, image, slug }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrp}>
        <BlurredImage
          src={image}
          alt={alt || "product image"}
          href={`/product/${slug}`}
          classNames={styles.product_image}
        />
      </div>

      <div className={styles.product_info}>
        <Link href={`/product/${slug}`}>{title}</Link>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
