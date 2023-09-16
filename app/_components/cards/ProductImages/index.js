import Image from "next/image";
import styles from "./ProductImages.module.scss";

const ProductImages = ({ images, alt }) => {
  return (
    <div className={styles.container}>
      {images?.map((item, index) => {
        return (
          <div className={styles.image_wrp} key={`product-image-${index}`}>
            <Image fill src={item} alt={alt || "product image"} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductImages;
