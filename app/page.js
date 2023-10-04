import { products, collections } from "@/utils/data";
import styles from "@/styles/home.module.scss";
import {
  BeastSellingSection,
  Hero,
  FeaturedCollection,
} from "@/components/sections";
import { BlurredImage, Button } from "./_components/ui";
import { cx } from "@/utils/functions";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      {/* <BeastSellingSection data={products} /> */}
      <FeaturedCollection
        title="Best Selling"
        description=" imply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book."
        href="/collections/best-selling"
        src={collections[0].image}
      />
      <FeaturedCollection
        reversed={true}
        title="New Arrivals"
        description=" imply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book."
        href="/collections/new-arrivals"
        src={collections[0].image}
      />
    </div>
  );
}
