import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards";
import styles from "./CollectionDetails.module.scss";
import { PageHeader, Container } from "@/components/ui";
import { collections, products } from "../../../utils/data";

async function getData(slug) {
  const result = collections.filter((item) => item.slug === slug);
  if (!result || result.length === 0)
    throw new Error("Failed to fetch collection details");
  return result[0];
}

export default async function CollectionDetails({ params }) {
  const data = await getData(params.slug);
  if (!data) return notFound();

  return (
    <Container>
      <PageHeader
        title={data?.title}
        image={data?.image}
        description={"test"}
        qte={10}
      />

      <div className={styles.grid}>
        {products?.map((item, index) => {
          return (
            <ProductCard
              slug={item.slug}
              title={item?.name}
              price={item.price}
              image={item.image}
              key={`product-card-${index}`}
            />
          );
        })}
      </div>
    </Container>
  );
}
