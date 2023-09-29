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
  const y = useTransform(scrollY, [0, 100], [0, 25]);
  const springY = useSpring(y);
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
          style={{
            translateX: divSlowX,
            translateY: divSlowY,
          }}
        >
          <BlurredImage src={collections[0].image} />
        </motion.div>
        <motion.div
          style={{
            translateX: divSlowX,
            translateY: divSlowY,
          }}
        >
          <BlurredImage src={collections[1].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[2].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
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
          style={{
            translateX: divSlowX,
            translateY: divSlowY,
          }}
        >
          <BlurredImage src={collections[0].image} />
        </motion.div>
        <motion.div
          style={{
            translateX: divSlowX,
            translateY: divSlowY,
          }}
        >
          <BlurredImage src={collections[1].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[2].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[3].image} />
        </motion.div>
        <motion.div
          style={{ y: springY, translateX: divSlowX, translateY: divSlowY }}
        >
          <BlurredImage src={collections[4].image} />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandHeader;
