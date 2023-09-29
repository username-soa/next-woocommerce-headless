"use client";
import Image from "next/image";
import styles from "./PageHeader.module.scss";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const PageHeader = ({ title, image, description, qte }) => {
  const fadeUp = {
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
        stiffness: 300,
        damping: 30,
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const childAnimations = {
    hidden: {
      y: "15px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 1.5, 1, 1.5],
        type: "spring",
        duration: 1.25,
      },
    },
  };
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 50], [1.01, 1.08]);
  const springScale = useSpring(scale);
  const products_qte = qte > 1 ? `${qte} Products` : `${qte} Product`;
  return (
    <motion.div
      animate="show"
      initial="hidden"
      variants={fadeUp}
      className={styles.collection_hero}
    >
      <div className={styles.collection_top}>
        <motion.div
          style={{
            scale: springScale,
          }}
          className={styles.image_zoom}
        >
          <Image
            fill
            src={image}
            sizes="100vw"
            quality={100}
            style={{
              objectFit: "cover",
            }}
            alt={`${title}-image`}
          />
        </motion.div>
        <div className={styles.header_overlay}>
          <motion.h6 variants={childAnimations} className={styles.title_h6}>
            {products_qte}
          </motion.h6>
          <motion.h2 variants={childAnimations} className={styles.title_h2}>
            {title}.
          </motion.h2>
        </div>
      </div>
      <div className={styles.collection_desc}>
        <motion.p variants={childAnimations}>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l&apos;imprimerie depuis les années 1500, quand
          un imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageHeader;
