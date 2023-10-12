"use client";
import { cx } from "@/utils/functions";
import styles from "./Hero.module.scss";
import { heroImages } from "@/utils/data";
import { BlurredImage, Button } from "@/components/ui";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const backgroundAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        ease: [0, 1.5, 1, 1.5],
        stiffness: 300,
        damping: 30,
        delayChildren: 0.3,
        staggerChildren: 0.05,
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
        ease: [0, 1.5, 1, 1.5],
        type: "spring",
        duration: 1.25,
      },
    },
    exit: { opacity: 0 },
  };
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 200], [0, -80]);
  const scale = useTransform(scrollY, [0, 200], [1, 1.15]);
  const opacity = useTransform(scrollY, [0, 200], [0.8, 0.3]);
  const springY = useSpring(y);
  const springScale = useSpring(scale);
  return (
    <div className={styles.container}>
      <motion.div
        animate="show"
        initial="hidden"
        variants={backgroundAnimation}
        className={styles.content}
      >
        <motion.h1 variants={childAnimation}>
          Elegance
          <br />
          <span className={styles.highlighted_span}> in Every </span>
          Detail.
        </motion.h1>
        <motion.p variants={childAnimation}>
          DDiscover our unique VASE collection, where artistry meets
          craftsmanship in each standalone masterpiece. Crafted from premium
          materials, our vases embody luxury and sophistication. Elevate your
          space with our exquisite vases, a testament to modern elegance.
        </motion.p>
        <Button href={"/collections"} title="Shop now" />
      </motion.div>
      <motion.div
        exit="exit"
        animate="show"
        initial="hidden"
        variants={backgroundAnimation}
        className={styles.grid_images}
      >
        {[...Array(20).keys()].map((i, index) => {
          return (
            <motion.div variants={childAnimation} key={i}>
              <BlurredImage
                placeholder="blur"
                classNames={styles.grid_image}
                src={heroImages[index]?.image}
                alt={`hero-section-picture`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Hero;
