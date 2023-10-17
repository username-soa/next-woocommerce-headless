"use client";
import Link from "next/link";
import { BlurredImage } from "@/components/ui";
import styles from "./CollectionCard.module.scss";

const Collection = ({ title, slug, image, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card_top}>
        <div className={styles.image_wrp}>
          <BlurredImage
            src={image}
            href={`/collections/${slug}`}
            alt={alt || "collection image"}
          />
        </div>
        <div className={styles.card_hover}>
          <div className={styles.card_hover_content}>
            <span>Collection</span>
            <div>{title}</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z"
              fill="white"
              stroke="white"
              stroke-width="0.542084"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles.card_extra}>
        <Link href={`/collections/${slug}`}>{title}</Link>
      </div>
    </div>
  );
};

export default Collection;
