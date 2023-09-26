"use client";
import { cx } from "@/utils/functions";
import { collections } from "@/utils/data";
import styles from "@/styles/home.module.scss";
import { Button, BlurredImage } from "@/components/ui";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY, scrollYProgress } = useScroll();

  const x = useTransform(scrollY, [0, 100], [0, -100]);
  const scale = useTransform(scrollY, [0, 100], [1, 1.15]);
  const springX = useSpring(x);
  const springScale = useSpring(scale);
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
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
      <div className={styles.stream_container}>
        <div className={cx(styles.stream_wrp, styles.positive_stream)}>
          <div className={styles.stream}>
            <div>
              <BlurredImage src={collections[0].image} />
            </div>
            <div>
              <BlurredImage src={collections[1].image} />
            </div>
            <div>
              <BlurredImage src={collections[2].image} />
            </div>
            <div>
              <BlurredImage src={collections[3].image} />
            </div>
            <div>
              <BlurredImage src={collections[4].image} />
            </div>
          </div>
          <div className={styles.stream}>
            <div>
              <BlurredImage src={collections[0].image} />
            </div>
            <div>
              <BlurredImage src={collections[1].image} />
            </div>
            <div>
              <BlurredImage src={collections[2].image} />
            </div>
            <div>
              <BlurredImage src={collections[3].image} />
            </div>
            <div>
              <BlurredImage src={collections[4].image} />
            </div>
          </div>
        </div>
        <div className={cx(styles.stream_wrp, styles.negative_stream)}>
          {/* <div className={styles.stream}>
            <div>
              <BlurredImage src={collections[0].image} />
            </div>
            <div>
              <BlurredImage src={collections[1].image} />
            </div>
            <div>
              <BlurredImage src={collections[2].image} />
            </div>
            <div>
              <BlurredImage src={collections[3].image} />
            </div>
            <div>
              <BlurredImage src={collections[4].image} />
            </div>
          </div>
          <div className={styles.stream}>
            <div>
              <BlurredImage src={collections[0].image} />
            </div>
            <div>
              <BlurredImage src={collections[1].image} />
            </div>
            <div>
              <BlurredImage src={collections[2].image} />
            </div>
            <div>
              <BlurredImage src={collections[3].image} />
            </div>
            <div>
              <BlurredImage src={collections[4].image} />
            </div>
          </div> */}
        </div>
      </div>
      <motion.div
        style={{
          scale: springScale,
        }}
        className={styles.underlay}
      />
    </div>
  );
}
