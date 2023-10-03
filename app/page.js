import { products } from "@/utils/data";
import styles from "@/styles/home.module.scss";
import { BeastSellingSection, Hero } from "@/components/sections";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <BeastSellingSection data={products} />
      <div className={styles.featured_collections}></div>
    </div>
  );
}
