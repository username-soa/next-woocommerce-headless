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
          Découvrez la beauté émotionnelle des vases esthétiques de VaseStylé.
          Chaque vase raconte une histoire unique, capturant l&apos;amour, la
          passion et l&apos;émerveillement. Laissez-vous envoûter par des
          designs modernes et élégants qui transforment votre foyer en un havre
          de charme et d&apos;émotion. Exprimez votre sensibilité artistique
          avec nos vases, des œuvres d&apos;art qui parlent à votre cœur. Créez
          un espace qui reflète vos émotions et votre style avec les vases
          esthétiques de VaseStylé.
        </p>
        <Button href="/collections" title="Explore Our Collections" />
      </div>
    </div>
  );
};

export default Brand;
