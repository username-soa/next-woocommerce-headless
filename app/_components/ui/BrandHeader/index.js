/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import styles from "./BrandHeader.module.scss";
import { collections } from "@/utils/data";
import { BlurredImage } from "@/components/ui";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

const BrandHeader = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 40], [0, 15]);
  const y2 = useTransform(scrollY, [0, 80], [0, 35]);
  const y3 = useTransform(scrollY, [0, 60], [0, 35]);
  const y4 = useTransform(scrollY, [0, 100], [0, 15]);
  const y5 = useTransform(scrollY, [0, 30], [0, 35]);
  const springY = useSpring(y);
  const springY2 = useSpring(y2);
  const springY3 = useSpring(y3);
  const springY4 = useSpring(y4);
  const springY5 = useSpring(y5);
  const divSlowX = useMotionValue(0);
  const divSlowY = useMotionValue(0);
  useEffect(() => {
    const moveCursor = (e) => {
      divSlowX.set(((window.innerWidth - e.pageX) * -1.5) / 100);
      divSlowY.set(((window.innerHeight - e.pageY) * -1.5) / 100);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className={styles.stream_container}>
      <div className={styles.stream}>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[0].image} />
        </motion.div>
        <motion.div
          style={{ y: springY2, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[1].image} />
        </motion.div>
        <motion.div
          style={{ y: springY3, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[2].image} />
        </motion.div>
        <motion.div
          style={{ y: springY4, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[3].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[4].image} />
        </motion.div>
      </div>
      <div className={styles.stream}>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[0].image} />
        </motion.div>
        <motion.div
          style={{ y: springY2, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[1].image} />
        </motion.div>
        <motion.div
          style={{ y: springY3, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[2].image} />
        </motion.div>
        <motion.div
          style={{ y: springY4, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[3].image} />
        </motion.div>
        <motion.div
          style={{ y: springY5, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[4].image} />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandHeader;
