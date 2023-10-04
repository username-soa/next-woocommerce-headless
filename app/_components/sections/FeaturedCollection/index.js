"use client";
import { Button, BlurredImage } from "@/components/ui";
import { cx } from "@/utils/functions";
import styles from "./FeaturedCollection.module.scss";

const FeaturedCollection = ({
  src,
  href,
  title,
  description,
  reversed = false,
}) => {
  return (
    <div className={cx(styles.container, { [styles.reversed]: reversed })}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={href} title="Shop now" intent="secondary" />
      </div>
      <div className={styles.image}>
        <BlurredImage radius={"0.375rem"} src={src} />
      </div>
    </div>
  );
};

export default FeaturedCollection;
