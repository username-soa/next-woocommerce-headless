"use client";
import { collections } from "@/utils/data";
import styles from "@/styles/home.module.scss";
import { Hero, StickySection } from "@/components/sections";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.stack_container}>
        <StickySection
          title="Best Selling"
          description=" imply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book."
          href="/collections/best-selling"
          src={collections[0].image}
        />
        <StickySection
          reversed={true}
          title="New Arrivals"
          description=" imply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book."
          href="/collections/new-arrivals"
          src={collections[3].image}
        />
      </div>
      <div className={styles.test_div}>
        newsletter or some other section, to be determined
      </div>
    </div>
  );
}
