"use client";
import { cx } from "@/utils/functions";
import styles from "./StickySection.module.scss";
import { Button, BlurredImage } from "@/components/ui";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const StickySection = ({ src, href, title, description, reversed = false }) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.01, 1.5]);
  const springScale = useSpring(scale);
  return (
    <div className={cx(styles.container, { [styles.reversed]: reversed })}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={href} title="Shop now" />
      </div>
      <div className={styles.image}>
        <motion.div
          className={styles.zoom_image}
          style={{
            scale: springScale,
          }}
        >
          <BlurredImage radius={"0.375rem"} src={src} />
        </motion.div>
      </div>
    </div>
  );
};

export default StickySection;
