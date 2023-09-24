import styles from "./Brand.module.scss";
import { BlurredImage } from "@/components/ui";
import { collections } from "@/utils/data";
import { Button } from "@/components/ui";

const Brand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stream_container}>
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
