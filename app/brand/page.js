import styles from "./Brand.module.scss";
import { Button, BrandHeader } from "@/components/ui";

export const metadata = {
  title: "About",
};

const Brand = () => {
  return (
    <div className={styles.container}>
      <BrandHeader />
      <div className={styles.content}>
        <p>
          Discover the allure of our exclusive VASE collection. Each piece, a
          masterstroke of artistry and craftsmanship, transcends its role as a
          mere flower holder to become a standalone masterpiece. Crafted from
          premium materials with an eye for detail, our vases embody luxury and
          sophistication. Add a touch of elegance to your space with our
          stunning vases - where every detail speaks of elegance.
        </p>
        <Button href="/collections" title="Explore Our Collections" />
      </div>
    </div>
  );
};

export default Brand;
