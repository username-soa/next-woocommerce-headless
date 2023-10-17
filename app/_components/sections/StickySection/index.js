"use client";
import { cx } from "@/utils/functions";
import styles from "./StickySection.module.scss";
import { Button, BlurredImage } from "@/components/ui";

const StickySection = ({ src, href, title, description, reversed = false }) => {
  return (
    <div className={cx(styles.container, { [styles.reversed]: reversed })}>
      <div className={styles.content}>
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>{description}</p>
        <Button href={href} title="Shop now" />
      </div>
      <div className={styles.image}>
        <div className={styles.zoom_image}>
          <BlurredImage radius={"0.375rem"} src={src} />
        </div>
      </div>
    </div>
  );
};

export default StickySection;
