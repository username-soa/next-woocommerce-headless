import { Container } from "@/components/ui";
import { products } from "../../../utils/data";
import styles from "./ProductDetails.module.scss";
import { ProductImages, ProductDescription } from "@/components/cards";

// TODO add dynamic metadata for products

async function getData(slug) {
  const result = products.filter((item) => item.slug === slug);
  if (!result || result.length === 0)
    throw new Error("Failed to fetch product details");
  return result[0];
}

export default async function ProductDetails({ params }) {
  const data = await getData(params.slug);
  if (!data) return notFound();
  return (
    <Container>
      <div className={styles.container}>
        <ProductImages images={data?.images} alt={`${data?.name} image`} />
        <ProductDescription
          price={200}
          title="product description 1"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </Container>
  );
}
