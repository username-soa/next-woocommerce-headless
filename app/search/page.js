import { products } from "@/utils/data";
import styles from "./Search.module.scss";
import { Container } from "@/components/ui";
import { ProductCard } from "@/components/cards";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};
async function getProducts(term) {
  const result = products.filter((f) =>
    f.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );
  //   handle error
  //   if (!result || result.length === 0)
  //     throw new Error("Failed to fetch collection details");
  return result;
}

export default async function SearchPage({ searchParams }) {
  const { sort, q: searchValue } = searchParams;
  console.log(searchValue);
  const results = await getProducts(searchValue);
  const resultsText = results.length > 1 ? "results" : "result";
  return (
    <Container>
      {searchValue ? (
        <p className={styles.no_result}>
          {!results.length === 0
            ? "There are no products that match "
            : `Showing ${results.length} ${resultsText} for `}
          <span className={styles.bold_term}>&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {/* {products.length ? <div className={styles.grid}></div>: null} */}
      <div className={styles.grid}>
        {products.map((item, index) => {
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
