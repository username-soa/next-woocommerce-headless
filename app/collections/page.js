import styles from "./Collection.module.scss";
import { Container } from "@/components/ui";
import { Collection } from "@/components/cards";
import { collections } from "../../utils/data";

const page = () => {
  return (
    <Container>
      <div className={styles.page_header}>
        <h1 className={styles.page_header_header}>Collections</h1>
        <div className={styles.page_header_text}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        {collections?.map((item, index) => {
          return (
            <Collection
              alt={item?.alt}
              slug={item?.slug}
              title={item?.title}
              image={item?.image}
              key={`collection-${index}`}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default page;
