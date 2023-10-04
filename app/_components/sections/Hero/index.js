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
          Discover the allure of our exclusive VASE collection. Each piece, a
          masterstroke of artistry and craftsmanship, transcends its role as a
          mere flower holder to become a standalone masterpiece. Crafted from
          premium materials with an eye for detail, our vases embody luxury and
          sophistication. Add a touch of elegance to your space with our
          stunning vases - where every detail speaks of elegance.
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
