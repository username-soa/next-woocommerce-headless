"use client";
import Link from "next/link";
import styles from "./CollectionCard.module.scss";
import { Button, BlurredImage } from "@/components/ui";

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
          <div className={styles.btn_wrp}>
            <Button title="View Products" intent="inverted" />
          </div>
          <div className={styles.card_hover_content}>
            <span>Collection</span>
            <div>{title}</div>
          </div>
        </div>
      </div>
      <div className={styles.card_extra}>
        <Link href={`/collections/${slug}`}>{title}</Link>
      </div>
    </div>
  );
};

export default Collection;
