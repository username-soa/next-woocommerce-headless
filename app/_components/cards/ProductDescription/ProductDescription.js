"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import styles from "./ProductDescription.module.scss";

const ProductDescription = ({
  title,
  price,
  description,
  currencyCode = "USD",
  availableForSale = true,
}) => {
  const parentAnimation = {
    hidden: { opacity: 0, y: "20px" },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        damping: 30,
        type: "spring",
        stiffness: 300,
        staggerChildren: 0.15,
        ease: [0, 1.5, 1, 1.5],
      },
    },
  };
  const childAnimation = {
    hidden: {
      y: "15px",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
      },
    },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      exit="exit"
      animate="show"
      initial="hidden"
      variants={parentAnimation}
      className={styles.container}
    >
      <motion.div className={styles.top}>
        <motion.h1 variants={childAnimation}>{title}</motion.h1>
        <motion.div variants={childAnimation} className={styles.pricing_wrp}>
          <p suppressHydrationWarning={true}>
            {`${new Intl.NumberFormat(undefined, {
              style: "currency",
              currency: currencyCode,
              currencyDisplay: "narrowSymbol",
            }).format(parseFloat(price))}`}
            <span> {`${currencyCode}`}</span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={childAnimation}
        className={styles.product_description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <motion.div variants={childAnimation} className={styles.buttons_wrp}>
        <Button title={availableForSale ? "Add To Bag" : "Out Of Stock"} />
      </motion.div>
    </motion.div>
  );
};

export default ProductDescription;
