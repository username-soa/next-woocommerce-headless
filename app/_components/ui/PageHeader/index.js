"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PageHeader.module.scss";

const PageHeader = ({ title, image, description, qte }) => {
  const fadeUp = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const childAnimations = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  const products_qte = qte > 1 ? `${qte} Products` : `${qte} Product`;
  return (
    <motion.div
      animate="show"
      initial="hidden"
      variants={fadeUp}
      className={styles.collection_hero}
    >
      <div className={styles.collection_top}>
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
        <div className={styles.header_overlay}>
          <motion.h6 className={styles.title_h6}>{products_qte}</motion.h6>
          <motion.h2 variants={childAnimations} className={styles.title_h2}>
            {title}.
          </motion.h2>
        </div>
      </div>
      <div className={styles.collection_desc}>
        <p>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte.
        </p>
      </div>
    </motion.div>
  );
};

export default PageHeader;
