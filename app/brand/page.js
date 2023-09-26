"use client";
import { useEffect } from "react";
import styles from "./Brand.module.scss";
import { collections } from "@/utils/data";
import { BlurredImage, Button } from "@/components/ui";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

const Brand = () => {
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
    <div className={styles.container}>
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
      <div className={styles.content}>
        <p>
          Découvrez la beauté émotionnelle des vases esthétiques de VaseStylé.
          Chaque vase raconte une histoire unique, capturant l'amour, la passion
          et l'émerveillement. Laissez-vous envoûter par des designs modernes et
          élégants qui transforment votre foyer en un havre de charme et
          d'émotion. Exprimez votre sensibilité artistique avec nos vases, des
          œuvres d'art qui parlent à votre cœur. Créez un espace qui reflète vos
          émotions et votre style avec les vases esthétiques de VaseStylé.
        </p>
        <Button href="/collections" title="Explore Our Collections" />
      </div>
    </div>
  );
};

export default Brand;
