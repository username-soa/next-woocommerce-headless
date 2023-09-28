"use client";
import { cx } from "@/utils/functions";
import styles from "./Hero.module.scss";
import { collections } from "@/utils/data";
import { BlurredImage, Button } from "@/components/ui";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 1.15]);
  const springX = useSpring(x);
  const springScale = useSpring(scale);
  return (
    <div className={styles.container}>
      <div className={styles.stream_container}>
        <div className={cx(styles.stream_wrp, styles.positive_stream)}>
          <div className={styles.stream}>
            <div>
              <BlurredImage
                src={collections[0].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[1].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[2].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[3].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[4].image}
                classNames={styles.scaled}
              />
            </div>
          </div>
          <div className={styles.stream}>
            <div>
              <BlurredImage
                src={collections[0].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[1].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[2].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[3].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[4].image}
                classNames={styles.scaled}
              />
            </div>
          </div>
        </div>
        <div
          className={cx(
            styles.stream_wrp,
            styles.negative_stream,
            styles.stream_second
          )}
        >
          <div className={styles.stream}>
            <div>
              <BlurredImage
                src={collections[0].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[1].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[2].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[3].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[4].image}
                classNames={styles.scaled}
              />
            </div>
          </div>
          <div className={styles.stream}>
            <div>
              <BlurredImage
                src={collections[0].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[1].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[2].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[3].image}
                classNames={styles.scaled}
              />
            </div>
            <div>
              <BlurredImage
                src={collections[4].image}
                classNames={styles.scaled}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <h1>Elegance in Every Detail</h1>
        <p>
          Description: “Welcome to our exclusive collection of exquisite vases.
          Each piece is a testament to the artistry and craftsmanship that go
          into creating these unique items. Our vases are more than just
          containers for flowers - they are standalone works of art. Made from
          the finest materials and designed with meticulous attention to detail,
          our vases are the epitome of luxury and sophistication. Elevate your
          space with our stunning vases, where elegance resides in every detail.
        </p>
        <Button href={"/collections"} title="Explore Our Collections" />
      </div>

      <motion.div
        style={{
          scale: springScale,
        }}
        className={cx(styles.underlay, styles.underlay_1)}
      />
      <motion.div
        style={{
          scale: springScale,
        }}
        className={cx(styles.underlay, styles.underlay_2)}
      />
    </div>
  );
};

export default Hero;
