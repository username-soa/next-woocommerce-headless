import { products } from "@/utils/data";
import { Hero } from "@/components/cards";
import styles from "@/styles/home.module.scss";
import { BeastSellingSection } from "@/components/sections";

export default function Home() {
  return (
    <div className={styles.hero}>
      <Hero />
      <BeastSellingSection data={products} />
    </div>
  );
}
