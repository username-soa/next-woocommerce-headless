"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { ProductCard } from "@/components/cards";
import styles from "./BestSellingSection.module.scss";

const BeastSellingSection = ({ data }) => {
  const sliderRef = useRef(null);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Best Selling</h1>
        <Button
          title={"View all"}
          intent="transparent"
          href={"/best-selling"}
        />
      </div>
      <div ref={sliderRef} className={styles.flex_row}>
        <motion.div
          drag="x"
          dragConstraints={sliderRef}
          className={styles.flex_slider}
        >
          {data?.map((item, index) => {
            return (
              <ProductCard
                slug={item.slug}
                title={item?.name}
                price={item.price}
                image={item.image}
                key={`product-card-${index}`}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BeastSellingSection;
